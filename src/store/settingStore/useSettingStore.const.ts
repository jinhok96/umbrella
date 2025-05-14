import type { SettingStoreState } from '@store/settingStore/useSettingStore.type';

export const INIT_SETTING_STORE_STATE: SettingStoreState = {
  theme: 'light',
  units: 'metric',
  lang: 'ko',
  defaultLocationMode: 'current',
  locationPermission: false,
  fontSizeAccessibility: 'normal',
  highContrastAccessibility: false,
};
