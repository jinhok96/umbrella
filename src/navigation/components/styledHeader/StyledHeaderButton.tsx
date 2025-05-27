import type { PropsWithChildren } from 'react';
import { View } from 'react-native';

import PressableHitSlop from '@components/common/PressableHitSlop';

import type { PressableHitSlopProps } from '@components/common/PressableHitSlop.type';

/**
 * 상단 헤더 버튼 컴포넌트
 * @jinhok96 25.05.28
 */
export default function StyledHeaderButton({
  className,
  children,
  onPress,
  ...props
}: PropsWithChildren<PressableHitSlopProps>) {
  return (
    <View className={`size-6 shrink-0 ${className}`}>
      <PressableHitSlop
        {...props}
        onPress={onPress}
        className={`size-full items-center justify-center ${!onPress && 'pointer-events-none'}`}
      >
        <View className="size-full">{children}</View>
      </PressableHitSlop>
    </View>
  );
}
