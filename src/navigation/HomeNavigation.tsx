/* eslint-disable react/no-unstable-nested-components */
/**
 * react-navigation에서 nested component를 메모이징하므로 react/no-unstable-nested-components 예외 적용
 * @jinhok96 25.05.25
 */

import { Easing } from 'react-native-reanimated';

import CheckIcon from '@components/icon/CheckIcon';
import { ANIMATION_DURATION } from '@libs/constants/duration.const';
import { getColorHex } from '@libs/utils/getColorHex.util';
import StyledBottomTabBar from '@navigation/components/StyledBottomTabBar';
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
const INACTIVE_COLOR_VAR: ColorVar = '--color-gray-50';

const getIconColor = (focused: boolean) => (focused ? ACTIVE_COLOR_VAR : INACTIVE_COLOR_VAR);

export default function HomeNavigation() {
  const theme = useSettingStore(state => state.theme);

  return (
    <HomeTab.Navigator
      tabBar={props => <StyledBottomTabBar {...props} />}
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: getColorHex(theme, ACTIVE_COLOR_VAR),
        tabBarInactiveTintColor: getColorHex(theme, INACTIVE_COLOR_VAR),
        animation: 'shift',
        tabBarStyle: {
          backgroundColor: 'transparent',
          shadowColor: 'transparent',
        },
        transitionSpec: {
          animation: 'timing',
          config: {
            duration: ANIMATION_DURATION,
            easing: Easing.inOut(Easing.ease),
          },
        },
      }}
    >
      <HomeTab.Screen
        name={HOME_NAVIGATION_ROUTE_NAME_LIST.CurrentForecast}
        component={CurrentForecastScreen}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({ focused }) => <CheckIcon color={getIconColor(focused)} />,
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
          tabBarShowLabel: true,
          tabBarIcon: ({ focused }) => <CheckIcon color={getIconColor(focused)} />,
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
          tabBarShowLabel: true,
          tabBarIcon: ({ focused }) => <CheckIcon color={getIconColor(focused)} />,
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
