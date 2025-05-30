import { create } from 'zustand';

import { navigationRef } from '@navigation/_components/styledNavigationContainer/StyledNavigationContainer.const';
import { INIT_MODAL_STORE_STATE } from '@store/modalStore/useModalStore.const';

import type { ModalStore } from '@store/modalStore/useModalStore.type';
import type { StateCreator } from 'zustand';

/**
 * 앱 설정 스토어
 * @ openModal - 모달 열기
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
        onSubmit: () => handleSubmit(...),
      },
    )
 * @ closeModal - 모달 닫기
 * @jinhok96 25.05.30
 */
const modalStoreCreator: StateCreator<ModalStore> = set => ({
  ...INIT_MODAL_STORE_STATE,
  openModal: (props, { onCancel, onSubmit }) => {
    set({ onCancel, onSubmit });

    const navigate = () => {
      if (!navigationRef.isReady()) return;
      navigationRef.navigate('Modal', props);
    };

    navigate();
  },
  closeModal: () => {
    set({ onCancel: null, onSubmit: null });

    const goBack = () => {
      if (!navigationRef.isReady()) return;
      navigationRef.goBack();
    };

    goBack();
  },
});

export const useModalStore = create<ModalStore>()(modalStoreCreator);
export const modalStore = useModalStore;
