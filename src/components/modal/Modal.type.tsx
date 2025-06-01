import type { ViewProps } from 'react-native';

import type { ButtonProps } from '@components/button/Button.type';

export type ModalType = 'default' | 'error';
export type ModalPosition = 'center' | 'bottom';

type ModalButtonProps = Pick<ButtonProps, 'text' | 'icon' | 'iconPosition'>;

export type ModalProps = Omit<ViewProps, 'className'> & {
  type?: ModalType;
  position?: ModalPosition;
  hideIcon?: boolean;
  title?: string;
  subTitle?: string;
  cancelButtonProps?: ModalButtonProps;
  submitButtonProps?: ModalButtonProps;
};
