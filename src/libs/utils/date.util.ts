import { addHours } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

/**
 * 로컬 타임존의 시간 문자열을 반환하는 함수
 * @param hourOffset 현재로부터 적용할 시각 오프셋
 * @param formatStr 문자열 포맷
 * @returns 로컬 타임존 시간 문자열
 * @jinhok96 25.05.16
 */
export function getLocalISOString(hourOffset: number = 0, formatStr: string = "yyyy-MM-dd'T'HH:mm:ssXXX") {
  const now = new Date();
  const futureDate = addHours(now, hourOffset);

  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
  return formatInTimeZone(futureDate, timeZone, formatStr);
}
