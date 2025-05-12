import { getLocalizedTextFromMap } from '@libs/utils/localize/localize';
import { GET_LOCALIZED_TEXT_FROM_MAP_ERROR } from '@libs/utils/localize/localize.const';
import { settingStore } from '@store/useSettingStore';

import type { LocalizedTextMap } from '@libs/utils/localize/localize.type';

const mockLocalizedTextMap: LocalizedTextMap<'mock'> = {
  mock: {
    en: 'English Mock',
    kr: '한국어 목',
  },
};

describe('getLocalizedTextFromMap', () => {
  const { lang } = settingStore.getState();

  test('성공 테스트', () => {
    expect(getLocalizedTextFromMap(mockLocalizedTextMap, 'mock')).toBe(mockLocalizedTextMap.mock[lang]);
  });

  test('맵에 없는 키일 경우 에러 throw 테스트', () => {
    // @ts-expect-error - 의도적인 타입 에러
    expect(() => getLocalizedTextFromMap(mockLocalizedTextMap, '-1')).toThrow(
      new Error(GET_LOCALIZED_TEXT_FROM_MAP_ERROR[10001][lang]),
    );
  });
});
