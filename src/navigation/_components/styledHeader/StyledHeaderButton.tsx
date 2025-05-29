import type { PropsWithChildren } from 'react';
import { View } from 'react-native';

import classNames from 'classnames';

import PressableHitSlop from '@components/button/PressableHitSlop';

import type { PressableHitSlopProps } from '@components/button/PressableHitSlop.type';

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
  const disabledClassName = classNames(!onPress && 'pointer-events-none');

  return (
    <View className={`size-6 shrink-0 ${className}`}>
      <PressableHitSlop
        {...props}
        onPress={onPress}
        className={`size-full items-center justify-center ${disabledClassName}`}
      >
        <View className="size-full">{children}</View>
      </PressableHitSlop>
    </View>
  );
}
