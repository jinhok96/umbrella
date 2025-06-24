import type { ReactNode } from 'react';
import type { PressableProps } from 'react-native';

import type { ColorVar } from '@libs/utils/themes.type';

export type ButtonSize = '40' | '48' | '52';
export type ButtonVariant = 'primary' | 'black' | 'grayOutline' | 'error' | 'disabled';

export type ButtonProps = Omit<PressableProps, 'children'> & {
  text?: string;
  size: ButtonSize;
  variant: ButtonVariant;
  icon?: (color: ColorVar) => ReactNode;
  iconPosition?: 'left' | 'right';
};
