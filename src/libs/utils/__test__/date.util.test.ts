import { addHours } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

import { getLocalISOString } from '@libs/utils/date.util';

describe('getLocalISOString', () => {
  const originalDate = new Date();

  test('기본 파라미터로 호출 시 현재 시간의 ISO 문자열 반환', () => {
    const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
    const expected = formatInTimeZone(originalDate, timeZone, "yyyy-MM-dd'T'HH:mm:ssXXX");
    expect(getLocalISOString({ originalDate })).toBe(expected);
  });

  test('hourOffset 적용 시 정확한 시간 계산', () => {
    const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
    const hourOffset = 3;
    const futureDate = addHours(originalDate, hourOffset);
    const expected = formatInTimeZone(futureDate, timeZone, "yyyy-MM-dd'T'HH:mm:ssXXX");
    expect(getLocalISOString({ originalDate, hourOffset })).toBe(expected);
  });

  test('사용자 정의 format 문자열 적용 테스트', () => {
    const formatStr = 'yyyy/MM/dd HH:mm:ss';
    const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
    const expected = formatInTimeZone(originalDate, timeZone, formatStr);
    expect(getLocalISOString({ originalDate, formatStr })).toBe(expected);
  });

  test('hourOffset과 custom format 함께 적용 테스트', () => {
    const hourOffset = -5;
    const formatStr = 'HH:mm yyyy-MM-dd';
    const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
    const pastDate = addHours(originalDate, hourOffset);
    const expected = formatInTimeZone(pastDate, timeZone, formatStr);
    expect(getLocalISOString({ originalDate, hourOffset, formatStr })).toBe(expected);
  });
});
