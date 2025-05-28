import type { PressableProps } from 'react-native';
import { Pressable, View } from 'react-native';

import type { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';

type StyledBottomTabBarButtonProps = Omit<Pick<BottomTabBarButtonProps, keyof PressableProps>, 'className'>;

/**
 * 스타일이 적용된 `BottomTabBar` 버튼 컴포넌트
 * @jinhok96 25.05.26
 */
export default function StyledBottomTabBarButton({ children, ...props }: StyledBottomTabBarButtonProps) {
  return (
    <>
      {/* 여기는 수정하지 말 것 */}
      <View className="flex size-fit items-center">
        {/* 여기서 컨테이너 조정 */}
        <View className="h-9 w-full">
          {/* 여기서 조작 가능한 Pressable 영역 조정 */}
          <Pressable
            {...props}
            className="size-full pt-3"
          >
            {children}
          </Pressable>
        </View>
      </View>
    </>
  );
}
