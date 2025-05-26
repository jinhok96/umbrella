import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CurrentForecastScreen from '@screens/HomeScreen/CurrentForecastScreen/CurrentForecastScreen';
import DailyForecastScreen from '@screens/HomeScreen/DailyForecastScreen/DailyForecastScreen';
import HourlyForecastScreen from '@screens/HomeScreen/HourlyForecastScreen/HourlyForecastScreen';

import type { LocalizedTextMap } from '@libs/utils/localize/localize.type';

type HomeNavigationRouteName = 'CurrentForecast' | 'HourlyForecast' | 'DailyForecast';

export const HOME_NAVIGATION_ROUTE_NAME_LIST: Record<HomeNavigationRouteName, HomeNavigationRouteName> = {
  CurrentForecast: 'CurrentForecast',
  HourlyForecast: 'HourlyForecast',
  DailyForecast: 'DailyForecast',
};

/**
 * HomeNavigation 라벨
 * @jinhok96 25.05.26
 */
export const HOME_BOTTOM_TAB_BAR_LABEL_LIST: LocalizedTextMap<HomeNavigationRouteName> = {
  CurrentForecast: { en: 'Home', ko: '홈' },
  HourlyForecast: { en: 'Hourly', ko: '시간별' },
  DailyForecast: { en: 'Daily', ko: '요일별' },
};

/**
 * HomeNavigation 테스트용 ID
 * @jinhok96 25.05.25
 */
export const HOME_NAVIGATION_TEST_ID_LIST: Record<HomeNavigationRouteName, string> = {
  CurrentForecast: 'CurrentForecastScreenTestId',
  HourlyForecast: 'HourlyForecastScreenTestId',
  DailyForecast: 'DailyForecastScreenTestId',
};

/**
 * HomeNavigation
 * @jinhok96 25.05.25
 */
export const HomeTab = createBottomTabNavigator({
  screens: {
    CurrentForecast: CurrentForecastScreen,
    HourlyForecast: HourlyForecastScreen,
    DailyForecast: DailyForecastScreen,
  },
});
