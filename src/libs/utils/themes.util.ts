import { vars } from 'nativewind';

import type { ColorTheme } from '@libs/utils/themes.type';

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
 * 동적 테마 색상표
 * dark, highContrast 수정 예정
 * @jinhok96 25.05.21
 */
export const colorThemeVarList: ColorTheme = {
  light: {
    '--color-test': '#168AFF',
    '--color-gray-90': '#191F28',
    '--color-gray-80': '#333D4B',
    '--color-gray-70': '#4E5968',
    '--color-gray-60': '#6B7684',
    '--color-gray-50': '#8B95A1',
    '--color-gray-40': '#B0B8C1',
    '--color-gray-30': '#D0D8DE',
    '--color-gray-20': '#E2E7EB',
    '--color-gray-10': '#EEF0F2',
    '--color-gray-5': '#F9FAFB',
    '--color-white': '#FFFFFF',
    '--color-morning': '#168AFF',
    '--color-morning-medium': '#168AFF33',
    '--color-morning-light': '#168AFF1A',
    '--color-night': '#6C75FF',
    '--color-night-medium': '#8088FF33',
    '--color-night-light': '#8088FF1A',
    '--color-error': '#FF5E5E',
    '--color-error-light': '#FF5E5E1A',
    '--color-success': '#03B26C',
    '--color-success-light': '#03B26C1A',
    '--color-black-transparency-90': '#000000E6',
    '--color-black-transparency-80': '#000000CC',
    '--color-black-transparency-70': '#000000B3',
    '--color-black-transparency-60': '#00000099',
    '--color-black-transparency-50': '#00000080',
    '--color-black-transparency-40': '#00000066',
    '--color-black-transparency-30': '#0000004D',
    '--color-black-transparency-20': '#00000033',
    '--color-black-transparency-10': '#0000001A',
    '--color-black-transparency-5': '#0000000D',
    '--color-white-transparency-90': '#FFFFFFE6',
    '--color-white-transparency-80': '#FFFFFFCC',
    '--color-white-transparency-70': '#FFFFFFB3',
    '--color-white-transparency-60': '#FFFFFF99',
    '--color-white-transparency-50': '#FFFFFF80',
    '--color-white-transparency-40': '#FFFFFF66',
    '--color-white-transparency-30': '#FFFFFF4D',
    '--color-white-transparency-20': '#FFFFFF33',
    '--color-white-transparency-10': '#FFFFFF1A',
    '--color-white-transparency-5': '#FFFFFF0D',
  },
  dark: {
    '--color-test': '#FF5E5E',
    '--color-gray-90': '#191F28',
    '--color-gray-80': '#333D4B',
    '--color-gray-70': '#4E5968',
    '--color-gray-60': '#6B7684',
    '--color-gray-50': '#8B95A1',
    '--color-gray-40': '#B0B8C1',
    '--color-gray-30': '#D0D8DE',
    '--color-gray-20': '#E2E7EB',
    '--color-gray-10': '#EEF0F2',
    '--color-gray-5': '#F9FAFB',
    '--color-white': '#FFFFFF',
    '--color-morning': '#168AFF',
    '--color-morning-medium': '#168AFF33',
    '--color-morning-light': '#168AFF1A',
    '--color-night': '#6C75FF',
    '--color-night-medium': '#8088FF33',
    '--color-night-light': '#8088FF1A',
    '--color-error': '#FF5E5E',
    '--color-error-light': '#FF5E5E1A',
    '--color-success': '#03B26C',
    '--color-success-light': '#03B26C1A',
    '--color-black-transparency-90': '#000000E6',
    '--color-black-transparency-80': '#000000CC',
    '--color-black-transparency-70': '#000000B3',
    '--color-black-transparency-60': '#00000099',
    '--color-black-transparency-50': '#00000080',
    '--color-black-transparency-40': '#00000066',
    '--color-black-transparency-30': '#0000004D',
    '--color-black-transparency-20': '#00000033',
    '--color-black-transparency-10': '#0000001A',
    '--color-black-transparency-5': '#0000000D',
    '--color-white-transparency-90': '#FFFFFFE6',
    '--color-white-transparency-80': '#FFFFFFCC',
    '--color-white-transparency-70': '#FFFFFFB3',
    '--color-white-transparency-60': '#FFFFFF99',
    '--color-white-transparency-50': '#FFFFFF80',
    '--color-white-transparency-40': '#FFFFFF66',
    '--color-white-transparency-30': '#FFFFFF4D',
    '--color-white-transparency-20': '#FFFFFF33',
    '--color-white-transparency-10': '#FFFFFF1A',
    '--color-white-transparency-5': '#FFFFFF0D',
  },
  highContrast: {
    '--color-test': '#03B26C',
    '--color-gray-90': '#191F28',
    '--color-gray-80': '#333D4B',
    '--color-gray-70': '#4E5968',
    '--color-gray-60': '#6B7684',
    '--color-gray-50': '#8B95A1',
    '--color-gray-40': '#B0B8C1',
    '--color-gray-30': '#D0D8DE',
    '--color-gray-20': '#E2E7EB',
    '--color-gray-10': '#EEF0F2',
    '--color-gray-5': '#F9FAFB',
    '--color-white': '#FFFFFF',
    '--color-morning': '#168AFF',
    '--color-morning-medium': '#168AFF33',
    '--color-morning-light': '#168AFF1A',
    '--color-night': '#6C75FF',
    '--color-night-medium': '#8088FF33',
    '--color-night-light': '#8088FF1A',
    '--color-error': '#FF5E5E',
    '--color-error-light': '#FF5E5E1A',
    '--color-success': '#03B26C',
    '--color-success-light': '#03B26C1A',
    '--color-black-transparency-90': '#000000E6',
    '--color-black-transparency-80': '#000000CC',
    '--color-black-transparency-70': '#000000B3',
    '--color-black-transparency-60': '#00000099',
    '--color-black-transparency-50': '#00000080',
    '--color-black-transparency-40': '#00000066',
    '--color-black-transparency-30': '#0000004D',
    '--color-black-transparency-20': '#00000033',
    '--color-black-transparency-10': '#0000001A',
    '--color-black-transparency-5': '#0000000D',
    '--color-white-transparency-90': '#FFFFFFE6',
    '--color-white-transparency-80': '#FFFFFFCC',
    '--color-white-transparency-70': '#FFFFFFB3',
    '--color-white-transparency-60': '#FFFFFF99',
    '--color-white-transparency-50': '#FFFFFF80',
    '--color-white-transparency-40': '#FFFFFF66',
    '--color-white-transparency-30': '#FFFFFF4D',
    '--color-white-transparency-20': '#FFFFFF33',
    '--color-white-transparency-10': '#FFFFFF1A',
    '--color-white-transparency-5': '#FFFFFF0D',
  },
};

export const colorTheme: ColorTheme = {
  light: vars(colorThemeVarList.light),
  dark: vars(colorThemeVarList.dark),
  highContrast: vars(colorThemeVarList.highContrast),
};
