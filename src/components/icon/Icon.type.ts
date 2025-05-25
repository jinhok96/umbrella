import type { SvgProps } from 'react-native-svg';

import type { ColorVar } from '@libs/utils/themes.type';

export type IconProps<T extends Record<string, unknown> = {}> = T &
  Omit<SvgProps, 'color'> & {
    color?: ColorVar;
  };
