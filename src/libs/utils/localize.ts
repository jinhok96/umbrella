import type { LanguageCode, LocalizedTextMap } from '@libs/types/localize.type';

export const DEFAULT_LANGUAGE: LanguageCode = 'kr';

export const GET_LOCALIZED_TEXT_FROM_MAP_ERROR: LocalizedTextMap<'10001'> = {
  10001: {
    en: 'Invalid key in localizedTextMap.',
    kr: 'localizedTextMap에 존재하지 않는 키입니다.',
  },
};

/**
 * 로컬라이징된 텍스트를 반환하는 함수
 * @param localizedTextMap 다국어 로컬라이징 텍스트 맵
 * @param key 맵 키
 * @param lang 언어; 기본값: store에서 가져옴
 * @returns 로컬라이징된 텍스트
 * @jinhok96 25.05.08
 */
export function getLocalizedTextFromMap<T extends string>(
  localizedTextMap: LocalizedTextMap<T>,
  key: T,
  lang?: LanguageCode,
): string {
  // 스토어에서 lang 가져오기
  const language: LanguageCode = lang || DEFAULT_LANGUAGE;
  const textMap = localizedTextMap[key];

  if (!textMap) throw new Error(GET_LOCALIZED_TEXT_FROM_MAP_ERROR['10001'][language]);

  return textMap[language];
}
