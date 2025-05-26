import type { PropsWithChildren } from 'react';
import type { PressableProps } from 'react-native';
import { Pressable, View } from 'react-native';

export default function StyledHeaderButton({
  className,
  children,
  onPress,
  ...props
}: PropsWithChildren<PressableProps>) {
  return (
    <View className={`size-6 flex-shrink-0 ${className}`}>
      <Pressable
        {...props}
        onPress={onPress}
        className={`size-full items-center justify-center ${!onPress && 'pointer-events-none'}`}
      >
        <View className="size-full">{children}</View>
      </Pressable>
    </View>
  );
}
