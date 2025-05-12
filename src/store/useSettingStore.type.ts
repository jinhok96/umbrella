import type { Lang, Units } from '@services/openWeatherOneCall/axios.type';

export type Theme = 'light' | 'dark';

export type SettingStoreState = {
  theme: Theme;
  units: Units;
  lang: Lang;
};

export type SettingStoreActions = {
  setTheme: (theme: SettingStoreState['theme']) => void;
  setUnit: (unit: SettingStoreState['units']) => void;
  setLang: (lang: SettingStoreState['lang']) => void;
};

export type SettingStore = SettingStoreState & SettingStoreActions;
