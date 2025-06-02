import { getColorHex } from '@libs/utils/getColorHex.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { ColorVar } from '@libs/utils/themes.type';

/**
 * `getColorHex` 유틸 함수의 커스텀 훅
 *
 * 테마에 따라 동적 컬러 Hex 코드를 가져옴
 * @param color `ColorVar` 색상
 * @returns Hex 코드
 */
export function useGetColorHex(color: ColorVar) {
  const theme = useSettingStore(state => state.theme);
  return getColorHex(theme, color);
}
