import { vars } from 'nativewind';

import type { ColorTheme } from '@libs/utils/themes.type';

export const colorThemeVarList: ColorTheme = {
  light: {
    '--color-morning': '#168AFF',
  },
  dark: {
    '--color-morning': '#FF5E5E',
  },
  highContrast: {
    '--color-morning': '#03B26C',
  },
};

export const colorTheme: ColorTheme = {
  light: vars(colorThemeVarList.light),
  dark: vars(colorThemeVarList.dark),
  highContrast: vars(colorThemeVarList.highContrast),
};
