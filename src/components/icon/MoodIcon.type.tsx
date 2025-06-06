import type { IconProps } from '@components/icon/Icon.type';

export type MoodIconProps = Omit<IconProps, 'color'> & {
  type: 'good' | 'normal' | 'bad';
};
