import { colorThemeVarList } from '@libs/utils/themes.util';

import type { Theme } from '@store/settingStore/useSettingStore.type';

export function getIconColor(theme: Theme) {
  return colorThemeVarList[theme]['--color-gray-90'];
}
