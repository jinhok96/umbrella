import type { PressableProps } from 'react-native';
import { Pressable } from 'react-native';

export default function HitSlopPressable({ hitSlop = 10, ...props }: PressableProps) {
  return (
    <Pressable
      {...props}
      hitSlop={hitSlop}
    />
  );
}
