import type { HOME_NAVIGATION_ROUTE_NAME_LIST, HomeTab } from '@navigation/home/HomeNavigation.const';
import type { ROOT_NAVIGATION_ROUTE_NAME_LIST, RootStack } from '@navigation/root/RootNavigation.const';
import type { SETTING_NAVIGATION_ROUTE_NAME_LIST, SettingStack } from '@navigation/setting/SettingNavigation.const';
import type { StaticParamList } from '@react-navigation/native';

/**
 * 전체 네비게이션 라우트 이름 타입
 * @jinhok96 25.05.30
 */
export type RouteName =
  | keyof typeof ROOT_NAVIGATION_ROUTE_NAME_LIST
  | keyof typeof HOME_NAVIGATION_ROUTE_NAME_LIST
  | keyof typeof SETTING_NAVIGATION_ROUTE_NAME_LIST;

/**
 * navigation.d.ts용 타입
 * @jinhok96 25.05.30
 */
export type RootStackParamList = StaticParamList<typeof RootStack | typeof HomeTab | typeof SettingStack>;
