import { getLocalizedTextFromMap } from '@libs/utils/localize/localize';
import { GET_LOCALIZED_TEXT_FROM_MAP_ERROR } from '@libs/utils/localize/localize.const';

import type { LocalizedTextMap } from '@libs/utils/localize/localize.type';

const mockLocalizedTextMap: LocalizedTextMap<'mock'> = {
  mock: {
    en: 'English Mock',
    kr: '한국어 목',
  },
};

describe('getLocalizedTextFromMap', () => {
  test('성공 테스트', () => {
    expect(getLocalizedTextFromMap(mockLocalizedTextMap, 'mock', 'en')).toBe(mockLocalizedTextMap.mock.en);
    expect(getLocalizedTextFromMap(mockLocalizedTextMap, 'mock', 'kr')).toBe(mockLocalizedTextMap.mock.kr);
  });

  test('맵에 없는 키일 경우 에러 throw 테스트', () => {
    // @ts-expect-error - 의도적인 타입 에러
    expect(() => getLocalizedTextFromMap(mockLocalizedTextMap, '-1', 'en')).toThrow(
      new Error(GET_LOCALIZED_TEXT_FROM_MAP_ERROR[10001].en),
    );
    // @ts-expect-error - 의도적인 타입 에러
    expect(() => getLocalizedTextFromMap(mockLocalizedTextMap, '-1', 'kr')).toThrow(
      new Error(GET_LOCALIZED_TEXT_FROM_MAP_ERROR[10001].kr),
    );
  });
});
