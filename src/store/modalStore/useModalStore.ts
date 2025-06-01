import { create } from 'zustand';

import { navigationActions } from '@navigation/_components/styledNavigationContainer/StyledNavigationContainer.const';
import { INIT_MODAL_STORE_STATE } from '@store/modalStore/useModalStore.const';

import type { ModalStore } from '@store/modalStore/useModalStore.type';
import type { StateCreator } from 'zustand';

const SCREEN_TRANSITION_TIMEOUT = 150;

/**
 * 앱 설정 스토어
 * @ openModal - 모달 열기
 * @ closeModal - 모달 닫기
 * @example 
    const openModal = useModalStore(state => state.openModal);

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
        onCancelBeforeClose: () => handleCancelBeforeClose(...),
        onCancelAfterClose: () => handleCancelAfterClose(...),
        onSubmitBeforeClose: () => handleSubmitBeforeClose(...),
        onSubmitAfterClose: () => handleSubmitAfterClose(...),
      },
    )
 * @jinhok96 25.06.01
 */
const modalStoreCreator: StateCreator<ModalStore> = (set, get) => ({
  ...INIT_MODAL_STORE_STATE,
  openModal: (props, state) => {
    set({
      ...state,
      isOpened: true,
      onCancelAfterClose: () => {
        get().closeModal();

        // closeModal 애니메이션 종료 후 호출
        if (!state.onCancelAfterClose) return;
        setTimeout(() => {
          state.onCancelAfterClose?.();
        }, SCREEN_TRANSITION_TIMEOUT);
      },
      onSubmitAfterClose: () => {
        get().closeModal();

        // closeModal 애니메이션 종료 후 호출
        if (!state.onSubmitAfterClose) return;
        setTimeout(() => {
          state.onSubmitAfterClose?.();
        }, SCREEN_TRANSITION_TIMEOUT);
      },
    });

    navigationActions.navigate('Modal', props);
  },
  closeModal: () => {
    // 모달 상태 초기화, 이전 스크린으로 이동, 모달 스크린 히스토리 삭제
    set(INIT_MODAL_STORE_STATE);
    navigationActions.pop();
  },
});

export const useModalStore = create<ModalStore>()(modalStoreCreator);
export const modalStore = useModalStore;
