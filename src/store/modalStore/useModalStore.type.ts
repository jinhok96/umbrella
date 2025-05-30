import type { ModalProps } from '@components/modal/Modal.type';

/**
 * 모달 상태 스토어
 * @ onCancel - 모달 취소 이벤트에서 호출
 * @ onSubmitBeforeClose - 모달 확인 이벤트에서 모달 끄기 전 호출
 * @ onSubmitAfterClose - 모달 확인 이벤트에서 모달 끈 뒤 호출
 * @jinhok96 25.05.30
 */
export type ModalStoreState = {
  onCancel: (() => void) | null | undefined;
  onSubmitBeforeClose: (() => void) | null | undefined;
  onSubmitAfterClose: (() => void) | null | undefined;
};

export type ModalStoreActions = {
  openModal: (
    props: ModalProps,
    state: {
      onCancel?: ModalStoreState['onCancel'];
      onSubmitBeforeClose?: ModalStoreState['onSubmitBeforeClose'];
      onSubmitAfterClose?: ModalStoreState['onSubmitAfterClose'];
    },
  ) => void;
  closeModal: () => void;
};

export type ModalStore = ModalStoreState & ModalStoreActions;
