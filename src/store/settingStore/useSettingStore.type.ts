import type { Units } from '@services/openWeatherOneCall/axios.type';

export type Theme = 'light' | 'dark' | 'highContrast'; // light: 라이트, dark: 다크, highContrast: 고대비
/**
 * ISO 639-1 언어 코드
 * @ ko - 한국어
 * @ en - 영어
 * @jinhok96 25.05.14
 */
export type Lang = 'ko' | 'en';
export type DefaultLocationMode = 'current' | 'recent'; // current: 현재 위치, recent: 최근 본 위치
export type FontSize = 'normal' | 'large'; // normal: 글자 보통 크기, large: 글자 큰 크기

export type SettingStoreState = {
  theme: Theme;
  units: Units;
  lang: Lang;
  defaultLocationMode: DefaultLocationMode;
  locationPermission: boolean;
  fontSize: FontSize;
};

export type SettingStoreActions = {
  setTheme: (theme: SettingStoreState['theme']) => void;
  setUnits: (units: SettingStoreState['units']) => void;
  setLang: (lang: SettingStoreState['lang']) => void;
  setDefaultLocationMode: (mode: SettingStoreState['defaultLocationMode']) => void;
  setLocationPermission: (permission: SettingStoreState['locationPermission']) => void;
  setFontSize: (fontSize: SettingStoreState['fontSize']) => void;
};

export type SettingStore = SettingStoreState & SettingStoreActions;
