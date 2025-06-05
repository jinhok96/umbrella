import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HOME_NAVIGATION_TEST_ID_LIST, HomeTab } from '@navigation/home/HomeNavigation.const';
import { SETTING_NAVIGATION_TEST_ID_LIST, SettingStack } from '@navigation/setting/SettingNavigation.const';
import LocationScreen from '@screens/LocationScreen/LocationScreen';
import ModalScreen from '@screens/ModalScreen/ModalScreen/ModalScreen';

import type { LocalizedTextMap } from '@libs/utils/localize/localize.type';
import type { RootNavigationRouteName, RootStackParamList } from '@navigation/root/RootNavigation.type';

export const ROOT_NAVIGATION_ROUTE_NAME_LIST: Record<RootNavigationRouteName, RootNavigationRouteName> = {
  Home: 'Home',
  Location: 'Location',
  Setting: 'Setting',
  Modal: 'Modal',
};

/**
 * RootNavigation 라벨
 * @jinhok96 25.05.26
 */
export const ROOT_NAVIGATION_LABEL_LIST: LocalizedTextMap<'Location' | 'Setting'> = {
  Location: { en: 'Location', ko: '위치' },
  Setting: { en: 'Setting', ko: '설정' },
};

/**
 * RootNavigation 테스트용 ID
 * @jinhok96 25.05.30
 */
export const ROOT_NAVIGATION_TEST_ID_LIST: Record<RootNavigationRouteName, string> = {
  Home: HOME_NAVIGATION_TEST_ID_LIST.CurrentForecast,
  Location: 'LocationScreenTestId',
  Setting: SETTING_NAVIGATION_TEST_ID_LIST.SettingMenu,
  Modal: 'ModalScreenTestId',
};

/**
 * navigation.d.ts용 RootStack
 * @jinhok96 25.05.30
 */
export const RootStack = createNativeStackNavigator<RootStackParamList>({
  screens: {
    Home: HomeTab,
    Location: LocationScreen,
    Setting: SettingStack,
    Modal: ModalScreen,
  },
});
