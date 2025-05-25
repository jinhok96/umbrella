import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import { BottomTabBar } from '@react-navigation/bottom-tabs';

import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

type StyledBottomTabBarProps = Omit<ViewProps, 'className' | 'children'> & BottomTabBarProps;

/**
 * 스타일이 적용된 `BottomTabBar` 컴포넌트
 * @param props `BottomTabBarProps`
 * @jinhok96 25.05.25
 */
export default function StyledBottomTabBar({
  state,
  descriptors,
  navigation,
  insets,
  ...props
}: StyledBottomTabBarProps) {
  return (
    <View
      {...props}
      className="border-t border-gray-50 bg-test"
    >
      <BottomTabBar
        state={state}
        descriptors={descriptors}
        navigation={navigation}
        insets={insets}
      />
    </View>
  );
}
