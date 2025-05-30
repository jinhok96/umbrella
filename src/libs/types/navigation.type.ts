import type { HOME_NAVIGATION_ROUTE_NAME_LIST } from '@navigation/home/HomeNavigation.const';
import type { HomeTabParamList } from '@navigation/home/HomeNavigation.type';
import type { ROOT_NAVIGATION_ROUTE_NAME_LIST } from '@navigation/root/RootNavigation.const';
import type { RootStackParamList } from '@navigation/root/RootNavigation.type';
import type { SETTING_NAVIGATION_ROUTE_NAME_LIST } from '@navigation/setting/SettingNavigation.const';
import type { SettingStackParamList } from '@navigation/setting/SettingNavigation.type';

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
// export type GlobalRootStackParamList = StaticParamList<typeof RootStack | typeof HomeTab | typeof SettingStack>;
export type GlobalRootStackParamList = RootStackParamList & HomeTabParamList & SettingStackParamList;
