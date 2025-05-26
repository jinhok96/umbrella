import type { PropsWithChildren } from 'react';
import type { PressableProps } from 'react-native';
import { View } from 'react-native';

import HitSlopPressable from '@components/common/HitSlopPressable';

/**
 * 상단 헤더 버튼 컴포넌트
 * @jinhok96 25.05.26
 */
export default function StyledHeaderButton({
  className,
  children,
  onPress,
  ...props
}: PropsWithChildren<PressableProps>) {
  return (
    <View className={`size-6 flex-shrink-0 ${className}`}>
      <HitSlopPressable
        {...props}
        onPress={onPress}
        className={`size-full items-center justify-center ${!onPress && 'pointer-events-none'}`}
      >
        <View className="size-full">{children}</View>
      </HitSlopPressable>
    </View>
  );
}
