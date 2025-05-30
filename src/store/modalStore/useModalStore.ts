import { StackActions } from '@react-navigation/native';
import { create } from 'zustand';

import { navigationRef } from '@navigation/_components/styledNavigationContainer/StyledNavigationContainer.const';
import { INIT_MODAL_STORE_STATE } from '@store/modalStore/useModalStore.const';

import type { ModalStore } from '@store/modalStore/useModalStore.type';
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
        onCancel: closeModal,
        onSubmitBeforeClose: () => handleSubmit(...),
        onSubmitAfterClose: () => navigate(...),
      },
    )
 * @jinhok96 25.05.30
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

export const useModalStore = create<ModalStore>()(modalStoreCreator);
export const modalStore = useModalStore;
