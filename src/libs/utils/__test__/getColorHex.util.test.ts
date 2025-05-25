import { getColorHex } from '@libs/utils/getColorHex.util';
import { colorThemeVarList } from '@libs/utils/themes.util';

import type { ColorVar } from '@libs/utils/themes.type';
import type { Theme } from '@store/settingStore/useSettingStore.type';

describe('getColorHex', () => {
  test('theme 값에 따라 동적으로 색을 반환하는지 테스트', () => {
    const color: ColorVar = '--color-test';
    const light: Theme = 'light';
    const dark: Theme = 'dark';
    const highContrast: Theme = 'highContrast';

    expect(getColorHex(light, color)).toBe(colorThemeVarList[light]['--color-test']);
    expect(getColorHex(dark, color)).toBe(colorThemeVarList[dark]['--color-test']);
    expect(getColorHex(highContrast, color)).toBe(colorThemeVarList[highContrast]['--color-test']);
  });
});
