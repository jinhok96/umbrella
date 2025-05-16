export const SECOND = 1000;
export const MINUTE = 60 * SECOND;
export const HOUR = 60 * MINUTE;
export const DAY = 24 * HOUR;

/**
 * STALE_TIME: OpenWeather One Call API 3.0 데이터 갱신 시간 10분
 * GC_TIME: staleTime과 겹치지 않도록 설정해 캐시 항상 유지
 * @jinhok96 25.05.16
 */
export const WEATHER_STALE_TIME = 10 * MINUTE;
export const WEATHER_GC_TIME = 15 * MINUTE;
