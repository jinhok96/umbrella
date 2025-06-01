import { StackActions } from '@react-navigation/native';
import { create } from 'zustand';

import { navigationRef } from '@navigation/_components/styledNavigationContainer/StyledNavigationContainer.const';
import { INIT_MODAL_STORE_STATE } from '@store/modalStore/useModalStore.const';

import type { ModalProps } from '@components/modal/Modal.type';
import type { ModalStore, ModalStoreState } from '@store/modalStore/useModalStore.type';
import type { StateCreator } from 'zustand';

/**
 * 앱 설정 스토어
 * @ openModal - 모달 열기
 * @ closeModal - 모달 닫기
 * @example 
    openModal(
      {
        title: 'Title',
        subTitle: 'SubTitle',
        cancelButtonProps: {
          text: '취소',
        },
        submitButtonProps: {
          text: '확인',
        },
      },
      {
        onCancelBeforeClose: () => handleCancel(...),
        onCancelAfterClose: () => navigate(...),
        onSubmitBeforeClose: () => handleSubmit(...),
        onSubmitAfterClose: () => navigate(...),
      },
    )
 * @jinhok96 25.06.01
 */
const modalStoreCreator: StateCreator<ModalStore> = set => ({
  ...INIT_MODAL_STORE_STATE,
  openModal: (props, state) => {
    set(state);

    const navigate = () => {
      if (!navigationRef.isReady()) return;
      navigationRef.navigate('Modal', props);
    };

    navigate();
  },
  closeModal: () => {
    // 모달 상태 초기화
    set(INIT_MODAL_STORE_STATE);

    // 이전 스크린으로 이동하고 모달 스크린 히스토리 삭제
    const pop = () => {
      if (!navigationRef.isReady()) return;
      if (!navigationRef.canGoBack()) return;
      navigationRef.dispatch(StackActions.pop());
    };

    pop();
  },
});

const useModalStoreRaw = create<ModalStore>()(modalStoreCreator);
export const modalStore = useModalStoreRaw;

const SCREEN_TRANSITION_TIMEOUT = 300;

export function useModalStore() {
  const { openModal, closeModal, ...rest } = useModalStoreRaw();

  const openModalWithTransitionTimeout = (props: ModalProps, state: Partial<ModalStoreState>) => {
    openModal(props, {
      ...state,
      onCancelAfterClose: () => {
        closeModal();

        // closeModal 애니메이션 종료 후 호출
        if (!state.onCancelAfterClose) return;
        setTimeout(() => {
          state.onCancelAfterClose?.();
        }, SCREEN_TRANSITION_TIMEOUT);
      },
      onSubmitAfterClose: () => {
        closeModal();

        // closeModal 애니메이션 종료 후 호출
        if (!state.onSubmitAfterClose) return;
        setTimeout(() => {
          state.onSubmitAfterClose?.();
        }, SCREEN_TRANSITION_TIMEOUT);
      },
    });
  };

  return { ...rest, openModal: openModalWithTransitionTimeout, closeModal };
}
