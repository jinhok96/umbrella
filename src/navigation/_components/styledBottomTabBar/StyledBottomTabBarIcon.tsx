import type React from 'react';
import { View } from 'react-native';

import classNames from 'classnames';

import type { IconProps } from '@components/icon/Icon.type';

type StyledBottomTabBarIconProps = {
  icon: (props: IconProps & { color: IconProps['color'] }) => React.JSX.Element;
  focused: boolean;
};

/**
 * 스타일이 적용된 `BottomTabBar` 라벨 컴포넌트
 * @param icon 렌더링할 아이콘 (`@components/icon/*`)
 * @param focused 현재 선택된 탭인지 여부
 * @jinhok96 25.05.28
 */
export default function StyledBottomTabBarIcon({ focused, icon: Icon }: StyledBottomTabBarIconProps) {
  const focusedClassName = classNames(focused && 'opacity-100', !focused && 'opacity-0');
  const unfocusedClassName = classNames(focused && 'opacity-0', !focused && 'opacity-100');

  return (
    <View className="relative size-full">
      <View className={`transition-auto absolute size-full self-center ${focusedClassName}`}>
        <Icon color="--color-morning" />
      </View>
      <View className={`transition-auto absolute size-full self-center ${unfocusedClassName}`}>
        <Icon color="--color-text-06" />
      </View>
    </View>
  );
}
