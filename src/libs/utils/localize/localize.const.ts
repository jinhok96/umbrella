import type { LanguageCode, LocalizedTextMap } from '@libs/utils/localize/localize.type';

export const DEFAULT_LANGUAGE: LanguageCode = 'kr';

export const GET_LOCALIZED_TEXT_FROM_MAP_ERROR: LocalizedTextMap<'10001'> = {
  10001: {
    en: 'Invalid key in localizedTextMap.',
    kr: 'localizedTextMap에 존재하지 않는 키입니다.',
  },
};
