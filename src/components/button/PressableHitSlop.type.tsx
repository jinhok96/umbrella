import type { PressableProps } from 'react-native';

export type PressableHitSlopProps = Omit<PressableProps, 'hitSlop'> & {
  hitSlop?: number;
  hitSlopX?: number;
  hitSlopY?: number;
};
