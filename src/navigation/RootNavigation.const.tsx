import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HOME_NAVIGATION_TEST_ID_LIST, HomeTab } from '@navigation/HomeNavigation.const';
import LocationScreen from '@screens/LocationScreen/LocationScreen';
import InfoScreen from '@screens/SettingScreen/InfoScreen/InfoScreen';
import InquiryScreen from '@screens/SettingScreen/InquiryScreen/InquiryScreen';
import LicenseScreen from '@screens/SettingScreen/LicenseScreen/LicenseScreen';
import SetDefaultLocationScreen from '@screens/SettingScreen/SetDefaultLocationScreen/SetDefaultLocationScreen';
import SetLangScreen from '@screens/SettingScreen/SetLangScreen/SetLangScreen';
import SetThemeScreen from '@screens/SettingScreen/SetThemeScreen/SetThemeScreen';
import SettingScreen from '@screens/SettingScreen/SettingScreen';
import SetUnitsScreen from '@screens/SettingScreen/SetUnitsScreen/SetUnitsScreen';

type RootNavigationRouteName =
  | 'Home'
  | 'Location'
  | 'Setting'
  | 'SetTheme'
  | 'SetLang'
  | 'SetUnits'
  | 'SetDefaultLocation'
  | 'Info'
  | 'Inquiry'
  | 'License';

export const ROOT_NAVIGATION_ROUTE_NAME_LIST: Record<RootNavigationRouteName, RootNavigationRouteName> = {
  Home: 'Home',
  Location: 'Location',
  Setting: 'Setting',
  SetTheme: 'SetTheme',
  SetLang: 'SetLang',
  SetUnits: 'SetUnits',
  SetDefaultLocation: 'SetDefaultLocation',
  Info: 'Info',
  Inquiry: 'Inquiry',
  License: 'License',
};

/**
 * RootNavigation 테스트용 ID
 * @jinhok96 25.05.25
 */
export const ROOT_NAVIGATION_TEST_ID_LIST: Record<RootNavigationRouteName, string> = {
  Home: HOME_NAVIGATION_TEST_ID_LIST.CurrentForecast,
  Location: 'LocationScreenTestId',
  Setting: 'SettingScreenTestId',
  SetTheme: 'SetThemeScreenTestId',
  SetLang: 'SetLangScreenTestId',
  SetUnits: 'SetUnitsScreenTestId',
  SetDefaultLocation: 'SetDefaultLocationScreenTestId',
  Info: 'InfoScreenTestId',
  Inquiry: 'InquiryScreenTestId',
  License: 'LicenseScreenTestId',
};

/**
 * RootNavigation
 * @jinhok96 25.05.25
 */
export const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeTab,
    Location: LocationScreen,
    Setting: SettingScreen,
    SetTheme: SetThemeScreen,
    SetLang: SetLangScreen,
    SetUnits: SetUnitsScreen,
    SetDefaultLocation: SetDefaultLocationScreen,
    Info: InfoScreen,
    Inquiry: InquiryScreen,
    License: LicenseScreen,
  },
});
