/* eslint-disable react/no-unstable-nested-components */
/**
 * react-navigation에서 nested component를 메모이징하므로 react/no-unstable-nested-components 예외 적용
 * @jinhok96 25.05.25
 */

import { Easing } from 'react-native-reanimated';

import CalenderIcon from '@components/icon/CalenderIcon';
import ClockIcon from '@components/icon/ClockIcon';
import HomeIcon from '@components/icon/HomeIcon';
import { ANIMATION_DURATION } from '@libs/constants/duration.const';
import { getColorHex } from '@libs/utils/getColorHex.util';
import { OtherThemeVarList } from '@libs/utils/themes.util';
import StyledBottomTabBar from '@navigation/components/StyledBottomTabBar';
import StyledBottomTabBarButton from '@navigation/components/StyledBottomTabBarButton';
import StyledBottomTabBarIcon from '@navigation/components/StyledBottomTabBarIcon';
import StyledBottomTabBarLabel from '@navigation/components/StyledBottomTabBarLabel';
import {
  HOME_BOTTOM_TAB_BAR_LABEL_LIST,
  HOME_NAVIGATION_ROUTE_NAME_LIST,
  HomeTab,
} from '@navigation/HomeNavigation.const';
import CurrentForecastScreen from '@screens/HomeScreen/CurrentForecastScreen/CurrentForecastScreen';
import DailyForecastScreen from '@screens/HomeScreen/DailyForecastScreen/DailyForecastScreen';
import HourlyForecastScreen from '@screens/HomeScreen/HourlyForecastScreen/HourlyForecastScreen';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { ColorVar } from '@libs/utils/themes.type';

const ACTIVE_COLOR_VAR: ColorVar = '--color-morning';
const INACTIVE_COLOR_VAR: ColorVar = '--color-text-06';

export default function HomeNavigation() {
  const theme = useSettingStore(state => state.theme);

  return (
    <HomeTab.Navigator
      tabBar={props => <StyledBottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarButton: props => <StyledBottomTabBarButton {...props} />,
        tabBarActiveTintColor: getColorHex(theme, ACTIVE_COLOR_VAR),
        tabBarInactiveTintColor: getColorHex(theme, INACTIVE_COLOR_VAR),
        animation: 'shift',
        transitionSpec: {
          animation: 'timing',
          config: {
            duration: ANIMATION_DURATION,
            easing: Easing.inOut(Easing.ease),
          },
        },
        tabBarStyle: {
          boxShadow: OtherThemeVarList.shadow['--shadow-bottom-tab-bar'],
        },
      }}
    >
      <HomeTab.Screen
        name={HOME_NAVIGATION_ROUTE_NAME_LIST.CurrentForecast}
        component={CurrentForecastScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <StyledBottomTabBarIcon
              focused={focused}
              icon={HomeIcon}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <StyledBottomTabBarLabel
              text={HOME_BOTTOM_TAB_BAR_LABEL_LIST.CurrentForecast}
              focused={focused}
            />
          ),
        }}
      />
      <HomeTab.Screen
        name={HOME_NAVIGATION_ROUTE_NAME_LIST.HourlyForecast}
        component={HourlyForecastScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <StyledBottomTabBarIcon
              focused={focused}
              icon={ClockIcon}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <StyledBottomTabBarLabel
              text={HOME_BOTTOM_TAB_BAR_LABEL_LIST.HourlyForecast}
              focused={focused}
            />
          ),
        }}
      />
      <HomeTab.Screen
        name={HOME_NAVIGATION_ROUTE_NAME_LIST.DailyForecast}
        component={DailyForecastScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <StyledBottomTabBarIcon
              focused={focused}
              icon={CalenderIcon}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <StyledBottomTabBarLabel
              text={HOME_BOTTOM_TAB_BAR_LABEL_LIST.DailyForecast}
              focused={focused}
            />
          ),
        }}
      />
    </HomeTab.Navigator>
  );
}
