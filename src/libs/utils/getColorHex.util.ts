import { colorThemeVarList } from '@libs/utils/themes.util';

import type { ColorVar } from '@libs/utils/themes.type';
import type { Theme } from '@store/settingStore/useSettingStore.type';

/**
 * 동적 테마에 따라 아이콘 색을 가져오는 함수
 * @param theme 전역 테마
 * @param color 색 이름 (var)
 * @returns HEX 코드
 * @jinhok96 25.05.25
 */
export function getColorHex(theme: Theme, color: ColorVar) {
  return colorThemeVarList[theme][color];
}
