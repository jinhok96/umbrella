import { vars } from 'nativewind';

import type { ColorVar } from '@libs/utils/themes.type';
import type { Theme } from '@store/settingStore/useSettingStore.type';

type ColorTheme = Record<Theme, Record<ColorVar, string>>;

/**
 * 알파 16진수
 * FF = 100%
 * F2 = 95%
 * E6 = 90%
 * D9 = 85%
 * CC = 80%
 * BF = 75%
 * B3 = 70%
 * A6 = 65%
 * 99 = 60%
 * 8C = 55%
 * 80 = 50%
 * 73 = 45%
 * 66 = 40%
 * 59 = 35%
 * 4D = 30%
 * 40 = 25%
 * 33 = 20%
 * 26 = 15%
 * 1A = 10%
 * 0D = 5%
 * @jinhok96 25.05.21
 */

/**
 * 정적 컬러 토큰 리스트
 * @jinhok96 25.05.25
 */
const colorTokenList = {
  gray: {
    90: '#191F28',
    80: '#252A33',
    70: '#30353D',
    60: '#4E5968',
    50: '#8B95A1',
    40: '#B0B8C1',
    30: '#D0D8DE',
    20: '#E2E7EB',
    10: '#F3F6F9',
    5: '#F9FAFB',
    0: '#FFFFFF',
  },
  blue: {
    default: '#168AFF',
    medium: '#168AFF33',
    light: '#168AFF1A',
  },
  purple: {
    default: '#6C75FF',
    medium: '#8088FF33',
    light: '#8088FF1A',
  },
  red: {
    default: '#FF5E5E',
    medium: '#FF5E5E33',
    light: '#FF5E5E1A',
  },
  green: {
    default: '#03B26C',
    medium: '#03B26C33',
    light: '#03B26C1A',
  },
  transparency: {
    black: {
      90: '#000000E6',
      80: '#000000CC',
      70: '#000000B3',
      60: '#00000099',
      50: '#00000080',
      40: '#00000066',
      30: '#0000004D',
      20: '#00000033',
      10: '#0000001A',
      5: '#0000000D',
    },
    white: {
      90: '#FFFFFFE6',
      80: '#FFFFFFCC',
      70: '#FFFFFFB3',
      60: '#FFFFFF99',
      50: '#FFFFFF80',
      40: '#FFFFFF66',
      30: '#FFFFFF4D',
      20: '#FFFFFF33',
      10: '#FFFFFF1A',
      5: '#FFFFFF0D',
    },
  },
};

/**
 * 동적 테마 컬러 토큰 리스트
 * highContrast 수정 예정
 * @jinhok96 25.06.05
 */
export const colorThemeVarList: ColorTheme = {
  light: {
    '--color-test': colorTokenList.blue.default,
    '--color-white': colorTokenList.gray[0],
    '--color-background-01': colorTokenList.gray[10],
    '--color-background-02': colorTokenList.gray[0],
    '--color-background-03': colorTokenList.gray[10],
    '--color-text-01': colorTokenList.gray[90],
    '--color-text-02': colorTokenList.gray[80],
    '--color-text-03': colorTokenList.gray[70],
    '--color-text-04': colorTokenList.gray[60],
    '--color-text-05': colorTokenList.gray[50],
    '--color-text-06': colorTokenList.gray[40],
    '--color-text-07': colorTokenList.gray[30],
    '--color-text-08': colorTokenList.gray[20],
    '--color-text-09': colorTokenList.gray[10],
    '--color-text-10': colorTokenList.gray[5],
    '--color-text-11': colorTokenList.gray[0],
    '--color-morning': colorTokenList.blue.default,
    '--color-morning-medium': colorTokenList.blue.medium,
    '--color-morning-light': colorTokenList.blue.light,
    '--color-night': colorTokenList.purple.default,
    '--color-night-medium': colorTokenList.purple.medium,
    '--color-night-light': colorTokenList.purple.light,
    '--color-error': colorTokenList.red.default,
    '--color-error-light': colorTokenList.red.light,
    '--color-success': colorTokenList.green.default,
    '--color-success-light': colorTokenList.green.default,
    '--color-transparency-01': colorTokenList.transparency.black[90],
    '--color-transparency-02': colorTokenList.transparency.black[80],
    '--color-transparency-03': colorTokenList.transparency.black[70],
    '--color-transparency-04': colorTokenList.transparency.black[60],
    '--color-transparency-05': colorTokenList.transparency.black[50],
    '--color-transparency-06': colorTokenList.transparency.black[40],
    '--color-transparency-07': colorTokenList.transparency.black[30],
    '--color-transparency-08': colorTokenList.transparency.black[20],
    '--color-transparency-09': colorTokenList.transparency.black[10],
    '--color-transparency-10': colorTokenList.transparency.black[5],
    // 직접 추가
    '--color-weather-summary': colorTokenList.transparency.white[10],
    '--color-checklist': '#d1e8ff', // --color-morning-medium
  },
  dark: {
    '--color-test': colorTokenList.red.default,
    '--color-white': colorTokenList.gray[0],
    '--color-background-01': colorTokenList.gray[90],
    '--color-background-02': colorTokenList.gray[80],
    '--color-background-03': colorTokenList.gray[70],
    '--color-text-01': colorTokenList.gray[0],
    '--color-text-02': colorTokenList.gray[5],
    '--color-text-03': colorTokenList.gray[10],
    '--color-text-04': colorTokenList.gray[20],
    '--color-text-05': colorTokenList.gray[30],
    '--color-text-06': colorTokenList.gray[40],
    '--color-text-07': colorTokenList.gray[50],
    '--color-text-08': colorTokenList.gray[60],
    '--color-text-09': colorTokenList.gray[70],
    '--color-text-10': colorTokenList.gray[80],
    '--color-text-11': colorTokenList.gray[90],
    '--color-morning': colorTokenList.blue.default,
    '--color-morning-medium': colorTokenList.blue.medium,
    '--color-morning-light': colorTokenList.blue.light,
    '--color-night': colorTokenList.purple.default,
    '--color-night-medium': colorTokenList.purple.medium,
    '--color-night-light': colorTokenList.purple.light,
    '--color-error': colorTokenList.red.default,
    '--color-error-light': colorTokenList.red.light,
    '--color-success': colorTokenList.green.default,
    '--color-success-light': colorTokenList.green.default,
    '--color-transparency-01': colorTokenList.transparency.white[90],
    '--color-transparency-02': colorTokenList.transparency.white[80],
    '--color-transparency-03': colorTokenList.transparency.white[70],
    '--color-transparency-04': colorTokenList.transparency.white[60],
    '--color-transparency-05': colorTokenList.transparency.white[50],
    '--color-transparency-06': colorTokenList.transparency.white[40],
    '--color-transparency-07': colorTokenList.transparency.white[30],
    '--color-transparency-08': colorTokenList.transparency.white[20],
    '--color-transparency-09': colorTokenList.transparency.white[10],
    '--color-transparency-10': colorTokenList.transparency.white[5],
    // 직접 추가
    '--color-weather-summary': colorTokenList.transparency.white[10],
    '--color-checklist': '#223d5b', // --color-morning-medium
  },
  highContrast: {
    '--color-test': colorTokenList.green.default,
    '--color-white': colorTokenList.gray[0],
    '--color-background-01': colorTokenList.gray[90],
    '--color-background-02': colorTokenList.gray[80],
    '--color-background-03': colorTokenList.gray[70],
    '--color-text-01': colorTokenList.gray[0],
    '--color-text-02': colorTokenList.gray[5],
    '--color-text-03': colorTokenList.gray[10],
    '--color-text-04': colorTokenList.gray[20],
    '--color-text-05': colorTokenList.gray[30],
    '--color-text-06': colorTokenList.gray[40],
    '--color-text-07': colorTokenList.gray[50],
    '--color-text-08': colorTokenList.gray[60],
    '--color-text-09': colorTokenList.gray[70],
    '--color-text-10': colorTokenList.gray[80],
    '--color-text-11': colorTokenList.gray[90],
    '--color-morning': colorTokenList.blue.default,
    '--color-morning-medium': colorTokenList.blue.medium,
    '--color-morning-light': colorTokenList.blue.light,
    '--color-night': colorTokenList.purple.default,
    '--color-night-medium': colorTokenList.purple.medium,
    '--color-night-light': colorTokenList.purple.light,
    '--color-error': colorTokenList.red.default,
    '--color-error-light': colorTokenList.red.light,
    '--color-success': colorTokenList.green.default,
    '--color-success-light': colorTokenList.green.default,
    '--color-transparency-01': colorTokenList.transparency.white[90],
    '--color-transparency-02': colorTokenList.transparency.white[80],
    '--color-transparency-03': colorTokenList.transparency.white[70],
    '--color-transparency-04': colorTokenList.transparency.white[60],
    '--color-transparency-05': colorTokenList.transparency.white[50],
    '--color-transparency-06': colorTokenList.transparency.white[40],
    '--color-transparency-07': colorTokenList.transparency.white[30],
    '--color-transparency-08': colorTokenList.transparency.white[20],
    '--color-transparency-09': colorTokenList.transparency.white[10],
    '--color-transparency-10': colorTokenList.transparency.white[5],
    // 직접 추가
    '--color-weather-summary': colorTokenList.transparency.white[10],
    '--color-checklist': '#223d5b', // --color-morning-medium
  },
};

export const colorTheme: ColorTheme = {
  light: vars(colorThemeVarList.light),
  dark: vars(colorThemeVarList.dark),
  highContrast: vars(colorThemeVarList.highContrast),
};

/**
 * `boxShadow`를 생성하는 함수
 * @jinhok96 25.05.28
 */
function generateShadowStyle(x: number, y: number, blur: number, spread: number, rgba: string) {
  return `${x}px ${y}px ${blur}px ${spread}px ${rgba};`;
}

/**
 * 그림자 스타일 리스트
 * @jinhok96 25.05.29
 */
export const shadowStyleList = {
  bottomTabBar: generateShadowStyle(0, -8, 24, 0, 'rgba(0, 0, 0, 0.04)'),
  float: generateShadowStyle(0, 4, 8, 0, 'rgba(0, 0, 0, 0.12)'),
  toast: generateShadowStyle(0, 4, 16, 0, 'rgba(0, 0, 0, 0.08)'),
};
