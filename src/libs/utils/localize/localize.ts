import { GET_LOCALIZED_TEXT_FROM_MAP_ERROR } from '@libs/utils/localize/localize.const';

import type { LocalizedTextMap } from '@libs/utils/localize/localize.type';
import type { SettingStoreState } from '@store/settingStore/useSettingStore.type';

/**
 * 로컬라이징된 텍스트를 반환하는 함수
 * @param localizedTextMap 다국어 로컬라이징 텍스트 맵
 * @param key 맵 키
 * @param lang 언어
 * @returns 로컬라이징된 텍스트
 * @jinhok96 25.05.12
 */
export function getLocalizedTextFromMap<T extends string>(
  localizedTextMap: LocalizedTextMap<T>,
  key: T,
  lang: SettingStoreState['lang'],
): string {
  const textMap = localizedTextMap[key];

  if (!textMap) throw new Error(GET_LOCALIZED_TEXT_FROM_MAP_ERROR['10001'][lang]);

  return textMap[lang];
}
