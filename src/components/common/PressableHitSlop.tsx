import type { Insets } from 'react-native';
import { Pressable } from 'react-native';

import type { PressableHitSlopProps } from '@components/common/PressableHitSlop.type';

/**
 * hitSlop 옵션을 확장한 Pressable 컴포넌트
 * @param hitSlop `Pressable`의 `hitSlop` (기본값: 10)
 * @param hitSlopX `hitSlop` 가로 (기본값: 0)
 * @param hitSlopY `hitSlop` 세로 (기본값: 0)
 * @jinhok96 25.05.28
 */
export default function PressableHitSlop({
  hitSlop = 10,
  hitSlopX = 0,
  hitSlopY = 0,
  ...props
}: PressableHitSlopProps) {
  const insets: Insets = {
    top: hitSlopY,
    bottom: hitSlopY,
    left: hitSlopX,
    right: hitSlopX,
  };

  const hitSlopXY = !hitSlopX && !hitSlopY ? hitSlop : insets;

  return (
    <Pressable
      {...props}
      hitSlop={hitSlopXY}
    />
  );
}
