import type { ReactNode } from 'react';

import type { ModalProps } from '@components/modal/Modal.type';

export type ModalStoreState = {
  isOpened: boolean;
  children?: ReactNode;
  onCancelBeforeClose: (() => void) | null | undefined;
  onCancelAfterClose: (() => void) | null | undefined;
  onSubmitBeforeClose: (() => void) | null | undefined;
  onSubmitAfterClose: (() => void) | null | undefined;
};

export type ModalStoreActions = {
  openModal: (props: ModalProps, state: Partial<Omit<ModalStoreState, 'isOpened'>>) => void;
  closeModal: () => void;
};

export type ModalStore = ModalStoreState & ModalStoreActions;
