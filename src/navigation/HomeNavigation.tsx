import { Easing } from 'react-native-reanimated';

import CalenderIcon from '@components/icon/CalenderIcon';
import ClockIcon from '@components/icon/ClockIcon';
import HomeIcon from '@components/icon/HomeIcon';
import { ANIMATION_DURATION } from '@libs/constants/duration.const';
import { OtherThemeVarList } from '@libs/utils/themes.util';
import StyledBottomTabBar from '@navigation/components/styledBottomTabBar/StyledBottomTabBar';
import StyledBottomTabBarButton from '@navigation/components/styledBottomTabBar/StyledBottomTabBarButton';
import StyledBottomTabBarIcon from '@navigation/components/styledBottomTabBar/StyledBottomTabBarIcon';
import StyledBottomTabBarLabel from '@navigation/components/styledBottomTabBar/StyledBottomTabBarLabel';
import {
  HOME_BOTTOM_TAB_BAR_LABEL_LIST,
  HOME_NAVIGATION_ROUTE_NAME_LIST,
  HomeTab,
} from '@navigation/HomeNavigation.const';
import CurrentForecastScreen from '@screens/HomeScreen/CurrentForecastScreen/CurrentForecastScreen';
import DailyForecastScreen from '@screens/HomeScreen/DailyForecastScreen/DailyForecastScreen';
import HourlyForecastScreen from '@screens/HomeScreen/HourlyForecastScreen/HourlyForecastScreen';

export default function HomeNavigation() {
  return (
    <HomeTab.Navigator
      tabBar={props => <StyledBottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarButton: props => <StyledBottomTabBarButton {...props} />,
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
