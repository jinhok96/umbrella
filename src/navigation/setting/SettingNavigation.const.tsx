import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InfoScreen from '@screens/SettingScreen/InfoScreen/InfoScreen';
import InquiryScreen from '@screens/SettingScreen/InquiryScreen/InquiryScreen';
import LicenseScreen from '@screens/SettingScreen/LicenseScreen/LicenseScreen';
import SetDefaultLocationScreen from '@screens/SettingScreen/SetDefaultLocationScreen/SetDefaultLocationScreen';
import SetLangScreen from '@screens/SettingScreen/SetLangScreen/SetLangScreen';
import SetThemeScreen from '@screens/SettingScreen/SetThemeScreen/SetThemeScreen';
import SettingMenuScreen from '@screens/SettingScreen/SettingMenuScreen/SettingMenuScreen';
import SetUnitsScreen from '@screens/SettingScreen/SetUnitsScreen/SetUnitsScreen';

import type { LocalizedTextMap } from '@libs/utils/localize/localize.type';
import type { SettingNavigationRouteName, SettingStackParamList } from '@navigation/setting/SettingNavigation.type';

export const SETTING_NAVIGATION_ROUTE_NAME_LIST: Record<SettingNavigationRouteName, SettingNavigationRouteName> = {
  SettingMenu: 'SettingMenu',
  SetTheme: 'SetTheme',
  SetLang: 'SetLang',
  SetUnits: 'SetUnits',
  SetDefaultLocation: 'SetDefaultLocation',
  License: 'License',
  Info: 'Info',
  Inquiry: 'Inquiry',
};

export const SETTING_HEADER_LABEL_LIST: LocalizedTextMap<SettingNavigationRouteName> = {
  SettingMenu: { en: 'Setting', ko: '설정' },
  SetTheme: { en: 'Theme', ko: '테마' },
  SetLang: { en: 'Language', ko: '언어' },
  SetUnits: { en: 'Units', ko: '측정 단위' },
  SetDefaultLocation: { en: 'Default Location', ko: '앱 시작 시 기본 위치' },
  License: { en: 'License', ko: '라이센스' },
  Info: { en: 'Information', ko: '날씨 기준' },
  Inquiry: { en: 'Inquiry', ko: '문의하기' },
};

/**
 * SettingNavigation 라벨
 * @jinhok96 25.05.26
 */
export const SETTING_NAVIGATION_LABEL_LIST: LocalizedTextMap<SettingNavigationRouteName> = {
  SettingMenu: { en: 'Setting', ko: '설정' },
  SetTheme: { en: 'Theme', ko: '테마' },
  SetLang: { en: 'Language', ko: '언어' },
  SetUnits: { en: 'Units', ko: '측정 단위' },
  SetDefaultLocation: { en: 'Default Location On Launch', ko: '앱 시작 시 기본 위치' },
  License: { en: 'License', ko: '라이센스' },
  Info: { en: 'Information', ko: '날씨 기준' },
  Inquiry: { en: 'Inquiry', ko: '문의하기' },
};

/**
 * SettingNavigation 테스트용 ID
 * @jinhok96 25.05.26
 */
export const SETTING_NAVIGATION_TEST_ID_LIST: Record<SettingNavigationRouteName, string> = {
  SettingMenu: 'SettingMenuScreenTestId',
  SetTheme: 'SetThemeScreenTestId',
  SetLang: 'SetLangScreenTestId',
  SetUnits: 'SetUnitsScreenTestId',
  SetDefaultLocation: 'SetDefaultLocationScreenTestId',
  License: 'LicenseScreenTestId',
  Info: 'InfoScreenTestId',
  Inquiry: 'InquiryScreenTestId',
};

/**
 * navigation.d.ts용 SettingStack
 * @jinhok96 25.05.26
 */
export const SettingStack = createNativeStackNavigator<SettingStackParamList>({
  screens: {
    SettingMenu: SettingMenuScreen,
    SetTheme: SetThemeScreen,
    SetLang: SetLangScreen,
    SetUnits: SetUnitsScreen,
    SetDefaultLocation: SetDefaultLocationScreen,
    License: LicenseScreen,
    Info: InfoScreen,
    Inquiry: InquiryScreen,
  },
});
