import type { ColorVar } from '@libs/utils/themes.type';

export type IconProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
  color?: ColorVar;
};
