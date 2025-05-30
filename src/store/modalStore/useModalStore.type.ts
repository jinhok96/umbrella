import type { ModalProps } from '@components/modal/Modal.type';

/**
 * 모달 상태 스토어
 * @ onCancel - 모달 취소 버튼의 `onPress`에 전달할 함수
 * @ onSubmit - 모달 확인 버튼의 `onPress`에 전달할 함수
 * @jinhok96 25.05.30
 */
export type ModalStoreState = {
  onCancel: (() => void) | null | undefined;
  onSubmit: (() => void) | null | undefined;
};

export type ModalStoreActions = {
  openModal: (
    props: ModalProps,
    state: {
      onCancel: ModalStoreState['onCancel'];
      onSubmit: ModalStoreState['onSubmit'];
    },
  ) => void;
  closeModal: () => void;
};

export type ModalStore = ModalStoreState & ModalStoreActions;
