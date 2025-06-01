import type { ModalProps } from '@components/modal/Modal.type';

/**
 * 모달 상태 스토어
 * @ onCancelBeforeClose - 모달 취소 이벤트에서 모달 끄기 전 호출
 * @ onCancelAfterClose - 모달 취소 이벤트에서 모달 끈 뒤 호출
 * @ onSubmitBeforeClose - 모달 확인 이벤트에서 모달 끄기 전 호출
 * @ onSubmitAfterClose - 모달 확인 이벤트에서 모달 끈 뒤 호출
 * @jinhok96 25.06.01
 */
export type ModalStoreState = {
  onCancelBeforeClose: (() => void) | null | undefined;
  onCancelAfterClose: (() => void) | null | undefined;
  onSubmitBeforeClose: (() => void) | null | undefined;
  onSubmitAfterClose: (() => void) | null | undefined;
};

export type ModalStoreActions = {
  openModal: (props: ModalProps, state: Partial<ModalStoreState>) => void;
  closeModal: () => void;
};

export type ModalStore = ModalStoreState & ModalStoreActions;
