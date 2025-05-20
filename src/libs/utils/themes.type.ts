import type { Theme } from '@store/settingStore/useSettingStore.type';

type ColorVar = '--color-morning';

export type ColorTheme = Record<Theme, Record<ColorVar, string>>;
