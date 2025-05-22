import { getIconColor } from '@components/icon/Icon.util';
import { colorThemeVarList } from '@libs/utils/themes.util';

import type { ColorVar } from '@libs/utils/themes.type';
import type { Theme } from '@store/settingStore/useSettingStore.type';

describe('getIconColor', () => {
  test('theme 값에 따라 동적으로 색을 반환하는지 테스트', () => {
    const color: ColorVar = '--color-test';
    const light: Theme = 'light';
    const dark: Theme = 'dark';
    const highContrast: Theme = 'highContrast';

    expect(getIconColor(light, color)).toBe(colorThemeVarList[light]['--color-test']);
    expect(getIconColor(dark, color)).toBe(colorThemeVarList[dark]['--color-test']);
    expect(getIconColor(highContrast, color)).toBe(colorThemeVarList[highContrast]['--color-test']);
  });
});
