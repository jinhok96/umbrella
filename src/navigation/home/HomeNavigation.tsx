import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Easing } from 'react-native-reanimated';

import CalenderIcon from '@components/icon/CalenderIcon';
import ClockIcon from '@components/icon/ClockIcon';
import HomeIcon from '@components/icon/HomeIcon';
import { ANIMATION_DURATION } from '@libs/constants/duration.const';
import StyledBottomTabBar from '@navigation/home/_components/styledBottomTabBar/StyledBottomTabBar';
import StyledBottomTabBarButton from '@navigation/home/_components/styledBottomTabBar/StyledBottomTabBarButton';
import StyledBottomTabBarIcon from '@navigation/home/_components/styledBottomTabBar/StyledBottomTabBarIcon';
import StyledBottomTabBarLabel from '@navigation/home/_components/styledBottomTabBar/StyledBottomTabBarLabel';
import { HOME_BOTTOM_TAB_BAR_LABEL_LIST } from '@navigation/home/HomeNavigation.const';
import CurrentForecastScreen from '@screens/HomeScreen/CurrentForecastScreen/CurrentForecastScreen';
import DailyForecastScreen from '@screens/HomeScreen/DailyForecastScreen/DailyForecastScreen';
import HourlyForecastScreen from '@screens/HomeScreen/HourlyForecastScreen/HourlyForecastScreen';

import type { HomeTabParamList } from '@navigation/home/HomeNavigation.type';

const HomeTab = createBottomTabNavigator<HomeTabParamList>();

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
      }}
    >
      <HomeTab.Screen
        name="CurrentForecast"
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
        name="HourlyForecast"
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
        name="DailyForecast"
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
