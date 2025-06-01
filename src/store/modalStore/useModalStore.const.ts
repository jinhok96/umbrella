import type { ModalStoreState } from '@store/modalStore/useModalStore.type';

export const INIT_MODAL_STORE_STATE: ModalStoreState = {
  onCancelBeforeClose: null,
  onCancelAfterClose: null,
  onSubmitBeforeClose: null,
  onSubmitAfterClose: null,
};
