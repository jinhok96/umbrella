import type { PropsWithChildren } from 'react';
import { View } from 'react-native';

import classNames from 'classnames';

import { colorTheme } from '@libs/utils/themes.util';
import { useRouteStore } from '@store/routeStore/useRouteStore';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { RouteName } from '@libs/types/navigation.type';

const BG_BACKGROUND_01_ROUTE_NAME_LIST: RouteName[] = ['Home', 'CurrentForecast', 'HourlyForecast', 'DailyForecast'];

export default function ColorThemeProvider({ children }: PropsWithChildren) {
  const theme = useSettingStore(state => state.theme);
  const currentRouteName = useRouteStore(state => state.currentRouteName);

  const isBgBackground01 = currentRouteName && BG_BACKGROUND_01_ROUTE_NAME_LIST.includes(currentRouteName);

  const className = classNames('flex-1', isBgBackground01 ? 'bg-background-01' : 'bg-background-02');

  return (
    <View
      className="flex-1"
      style={colorTheme[theme] as Record<string, string>}
      needsOffscreenAlphaCompositing={true}
    >
      <View className={className}>{children}</View>
    </View>
  );
}
