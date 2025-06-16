import { addHours } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

import type { LocalizedText } from '@libs/utils/localize/localize.type';

type GetLocalISOStringParams = {
  originalDate?: Date;
  hourOffset?: number;
  formatStr?: string;
};

/**
 * 로컬 타임존의 시간 문자열을 반환하는 함수
 * @param hourOffset 현재로부터 적용할 시각 오프셋
 * @param formatStr 문자열 포맷
 * @returns 로컬 타임존 시간 문자열
 * @jinhok96 25.05.16
 */
export function getLocalISOString({
  originalDate = new Date(),
  hourOffset = 0,
  formatStr = "yyyy-MM-dd'T'HH:mm:ssXXX",
}: GetLocalISOStringParams = {}): string {
  const futureDate = addHours(originalDate, hourOffset);

  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
  return formatInTimeZone(futureDate, timeZone, formatStr);
}

/**
 * 요일 텍스트 다국어 객체를 반환하는 함수
 * @param date `Date`
 * @returns `LocalizedText` 타입 요일 텍스트 객체
 * @jinhok96 25.06.12
 */
export function getLocalizedDay(date: Date): LocalizedText {
  const days: LocalizedText[] = [
    { ko: '일', en: 'SUN' },
    { ko: '월', en: 'MON' },
    { ko: '화', en: 'TUE' },
    { ko: '수', en: 'WED' },
    { ko: '목', en: 'THU' },
    { ko: '금', en: 'FRI' },
    { ko: '토', en: 'SAT' },
  ];

  return days[date.getDay()];
}

/**
 * MM.DD 형식의 날짜 문자열을 반환하는 함수
 * @param date `Date`
 * @returns `MM.DD` 형식의 날짜 문자열
 * @jinhok96 25.06.12
 */
export function formatDateToMMDD(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${month}.${day}`;
}

/**
 * HH:MM 형식의 날짜 문자열을 반환하는 함수
 * @param date `Date`
 * @returns `HH:MM` 형식의 날짜 문자열
 * @jinhok96 25.06.12
 */
export function formatDateToHHMM(date: Date): string {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${hours}:${minutes}`;
}
