import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HOME_NAVIGATION_TEST_ID_LIST, HomeTab } from '@navigation/HomeNavigation.const';
import { SettingStack } from '@navigation/SettingNavigation.const';
import LocationScreen from '@screens/LocationScreen/LocationScreen';

type RootNavigationRouteName = 'Home' | 'Location' | 'Setting';

export const ROOT_NAVIGATION_ROUTE_NAME_LIST: Record<RootNavigationRouteName, RootNavigationRouteName> = {
  Home: 'Home',
  Location: 'Location',
  Setting: 'Setting',
};

/**
 * RootNavigation 테스트용 ID
 * @jinhok96 25.05.25
 */
export const ROOT_NAVIGATION_TEST_ID_LIST: Record<RootNavigationRouteName, string> = {
  Home: HOME_NAVIGATION_TEST_ID_LIST.CurrentForecast,
  Location: 'LocationScreenTestId',
  Setting: 'SettingScreenTestId',
};

/**
 * RootNavigation
 * @jinhok96 25.05.26
 */
export const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeTab,
    Location: LocationScreen,
    Setting: SettingStack,
  },
});
