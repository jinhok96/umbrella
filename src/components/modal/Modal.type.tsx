import type { ViewProps } from 'react-native';

import type { ButtonProps } from '@components/button/Button.type';

export type ModalType = 'default' | 'error';

type ModalButtonProps = Pick<ButtonProps, 'text' | 'icon' | 'iconPosition'>;

export type ModalProps = Omit<ViewProps, 'children' | 'className'> & {
  type?: ModalType;
  hideIcon?: boolean;
  title?: string;
  subTitle?: string;
  cancelButtonProps?: ModalButtonProps;
  submitButtonProps?: ModalButtonProps;
};
