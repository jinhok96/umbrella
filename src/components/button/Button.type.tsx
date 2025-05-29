import type { ReactNode } from 'react';
import type { PressableProps } from 'react-native';

import type { ColorVar } from '@libs/utils/themes.type';

export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonVariant = 'primary' | 'black' | 'grayOutline' | 'error';

export type ButtonProps = PressableProps & {
  text?: string;
  size: ButtonSize;
  variant: ButtonVariant;
  icon?: (color: ColorVar) => ReactNode;
  iconPosition?: 'left' | 'right';
};
