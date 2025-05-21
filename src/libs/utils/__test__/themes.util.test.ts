import { colorThemeVarList } from '@libs/utils/themes.util';

import type { ColorTheme } from '@libs/utils/themes.type';

describe('colorThemeVarList', () => {
  test('모든 colorTheme 키에 --color- 접두사가 붙는지 확인', () => {
    // 모든 테마 키를 추출 (light, dark, highContrast 등)
    const themeKeys = Object.keys(colorThemeVarList) as Array<keyof ColorTheme>;

    themeKeys.forEach(themeKey => {
      const theme = colorThemeVarList[themeKey];
      const colorKeys = Object.keys(theme);

      colorKeys.forEach(colorKey => {
        // 각 컬러 변수가 --color-로 시작하는지 확인
        expect(colorKey).toMatch(/^--color-/);
      });
    });
  });
});
