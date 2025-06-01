import type { ModalStoreState } from '@store/modalStore/useModalStore.type';

export const INIT_MODAL_STORE_STATE: ModalStoreState = {
  isOpened: false,
  onCancelBeforeClose: null,
  onCancelAfterClose: null,
  onSubmitBeforeClose: null,
  onSubmitAfterClose: null,
};
