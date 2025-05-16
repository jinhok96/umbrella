import { GET_LOCALIZED_TEXT_FROM_MAP_ERROR } from '@libs/utils/localize/localize.const';
import { getLocalizedTextFromMap } from '@libs/utils/localize/localize.util';
import { settingStore } from '@store/settingStore/useSettingStore';

import type { LocalizedTextMap } from '@libs/utils/localize/localize.type';

const mockLocalizedTextMap: LocalizedTextMap<'mock'> = {
  mock: {
    en: 'English Mock',
    ko: '한국어 목',
  },
};

describe('getLocalizedTextFromMap', () => {
  const { lang } = settingStore.getState();

  test('성공 테스트', () => {
    expect(getLocalizedTextFromMap(mockLocalizedTextMap, 'mock', lang)).toBe(mockLocalizedTextMap.mock[lang]);
  });

  test('맵에 없는 키일 경우 에러 throw 테스트', () => {
    // @ts-expect-error - 의도적인 타입 에러
    expect(() => getLocalizedTextFromMap(mockLocalizedTextMap, '-1', lang)).toThrow(
      new Error(GET_LOCALIZED_TEXT_FROM_MAP_ERROR[10001][lang]),
    );
  });
});
