import type { HOME_NAVIGATION_ROUTE_NAME_LIST } from '@navigation/home/HomeNavigation.const';
import type { ROOT_NAVIGATION_ROUTE_NAME_LIST } from '@navigation/root/RootNavigation.const';
import type { SETTING_NAVIGATION_ROUTE_NAME_LIST } from '@navigation/setting/SettingNavigation.const';

/**
 * 전체 네비게이션 라우트 이름 타입
 * @jinhok96 25.05.29
 */
export type RouteName =
  | keyof typeof ROOT_NAVIGATION_ROUTE_NAME_LIST
  | keyof typeof HOME_NAVIGATION_ROUTE_NAME_LIST
  | keyof typeof SETTING_NAVIGATION_ROUTE_NAME_LIST;
