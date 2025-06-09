import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import BottomTabBar from '@components/@react-navigation/bottom-tabs/BottomTabBar';
import { shadowStyleList } from '@libs/utils/themes.util';

import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

type StyledBottomTabBarProps = Omit<ViewProps, 'className' | 'children'> & BottomTabBarProps;

/**
 * 스타일이 적용된 `BottomTabBar` 컴포넌트
 * @param props `BottomTabBarProps`
 * @jinhok96 25.06.09
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
      className="pb-safe-offset-5 bg-background-02 px-3"
      style={{ boxShadow: shadowStyleList.bottomTabBar }}
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
