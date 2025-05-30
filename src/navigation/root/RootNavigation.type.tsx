import type { ModalProps } from '@components/modal/Modal.type';
import type { HomeTabParamList } from '@navigation/home/HomeNavigation.type';
import type { SettingStackParamList } from '@navigation/setting/SettingNavigation.type';

export type RootNavigationRouteName = 'Home' | 'Location' | 'Setting' | 'Modal';

/**
 * RootNavigation 파라미터 타입
 * @jinhok96 25.05.30
 */
export type RootStackParamList = {
  Home: HomeTabParamList['CurrentForecast'];
  Location: undefined;
  Setting: SettingStackParamList['SettingMenu'];
  Modal: ModalProps;
};
