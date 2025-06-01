import type { ViewProps } from 'react-native';

import type { ButtonProps } from '@components/button/Button.type';
import type { LocalizedText } from '@libs/utils/localize/localize.type';

export type ModalType = 'default' | 'error';
export type ModalPosition = 'center' | 'bottom';

type ModalButtonProps = Pick<ButtonProps, 'text' | 'icon' | 'iconPosition'>;

export type ModalProps = Omit<ViewProps, 'className'> & {
  type?: ModalType;
  position?: ModalPosition;
  hideIcon?: boolean;
  title?: LocalizedText;
  subTitle?: LocalizedText;
  cancelButtonProps?: ModalButtonProps;
  submitButtonProps?: ModalButtonProps;
};
