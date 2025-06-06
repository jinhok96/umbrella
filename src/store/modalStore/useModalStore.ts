import { create } from 'zustand';

import { ANIMATION_DURATION } from '@libs/constants/duration.const';
import { navigationActions } from '@navigation/_components/styledNavigationContainer/StyledNavigationContainer.const';
import { INIT_MODAL_STORE_STATE } from '@store/modalStore/useModalStore.const';

import type { ModalStore } from '@store/modalStore/useModalStore.type';
import type { StateCreator } from 'zustand';

const SCREEN_TRANSITION_TIMEOUT = ANIMATION_DURATION + 50;

/**
 * 앱 설정 스토어
 * @ isOpened - 모달이 열려있는지 여부
 * @ children - 모달에 렌더링할 컴포넌트
 * @ onCancelBeforeClose - 모달 취소 이벤트에서 모달 끄기 전 호출
 * @ onCancelAfterClose - 모달 취소 이벤트에서 모달 끈 뒤 호출
 * @ onSubmitBeforeClose - 모달 확인 이벤트에서 모달 끄기 전 호출
 * @ onSubmitAfterClose - 모달 확인 이벤트에서 모달 끈 뒤 호출
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
      children: props.children,
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

    navigationActions.navigate('Modal', { ...props, children: null });
  },
  closeModal: () => {
    // 모달 상태 초기화, 이전 스크린으로 이동, 모달 스크린 히스토리 삭제
    set(INIT_MODAL_STORE_STATE);
    navigationActions.pop();
  },
});

export const useModalStore = create<ModalStore>()(modalStoreCreator);
export const modalStore = useModalStore;
