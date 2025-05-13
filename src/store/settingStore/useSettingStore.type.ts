import type { Lang, Units } from '@services/openWeatherOneCall/axios.type';

export type Theme = 'light' | 'dark'; // light: 라이트, dark: 다크
export type DefaultLocationMode = 'current' | 'recent'; // current: 현재 위치, recent: 최근 본 위치

export type FontSizeAccessibility = 'normal' | 'large'; // normal: 글자 보통 크기, large: 글자 큰 크기

/**
 * 앱 설정 스토어 상태
 * @ theme - 테마; light | dark
 * @ units - 날씨 측정 단위; metric | imperial
 * @ lang - 앱 언어; kr | en
 * @ defaultLocationMode - 앱 시작 시 기본 위치 모드; current(현재 위치) | recent(마지막에 본 위치)
 * @ locationPermission - 위치 권한; boolean
 * @ fontSizeAccessibility - 접근성: 폰트 크기; normal | large
 * @ highContrastAccessibility - 접근성: 고대비; boolean
 * @jinhok96 25.05.13
 */
export type SettingStoreState = {
  theme: Theme;
  units: Units;
  lang: Lang;
  defaultLocationMode: DefaultLocationMode;
  locationPermission: boolean;
  fontSizeAccessibility: FontSizeAccessibility;
  highContrastAccessibility: boolean;
};

export type SettingStoreActions = {
  setTheme: (theme: SettingStoreState['theme']) => void;
  setUnits: (units: SettingStoreState['units']) => void;
  setLang: (lang: SettingStoreState['lang']) => void;
  setDefaultLocationMode: (mode: SettingStoreState['defaultLocationMode']) => void;
  setLocationPermission: (permission: SettingStoreState['locationPermission']) => void;
  setFontSizeAccessibility: (fontSize: SettingStoreState['fontSizeAccessibility']) => void;
  setHighContrastAccessibility: (highContrast: SettingStoreState['highContrastAccessibility']) => void;
};

export type SettingStore = SettingStoreState & SettingStoreActions;
