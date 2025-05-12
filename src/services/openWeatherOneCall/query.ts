import { useSuspenseQuery } from '@tanstack/react-query';

import { MINUTE } from '@libs/constants/time.const';
import { openWeatherOneCallService } from '@services/openWeatherOneCall/axios';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { OpenWeatherOneCallAPICommonParams } from '@services/openWeatherOneCall/axios.type';
import type {
  UseGetCurrentAndForecastsWeatherDataParams,
  UseGetDailyAggregationParams,
  UseGetWeatherDataForTimestampParams,
} from '@services/openWeatherOneCall/query.type';

/**
 * STALE_TIME: OpenWeather One Call API 3.0 데이터 갱신 시간 10분
 * GC_TIME: staleTime과 겹치지 않도록 설정해 캐시 항상 유지
 * @jinhok96 25.04.30
 */
const STALE_TIME = 10 * MINUTE;
const GC_TIME = 15 * MINUTE;

/**
 * 전역 상태에서 OpenWeather Oen Call API 3.0 공통 파라미터 가져오기
 * @returns `{ units, lang }`
 * @jinhok96 25.05.12
 */
function useGetOpenWeatherAPICommonParams(): OpenWeatherOneCallAPICommonParams {
  const units = useSettingStore(state => state.units);
  const lang = useSettingStore(state => state.lang);
  return { units, lang };
}

/**
 * 현재 날씨, 1시간 단위 분 예보, 48시간 단위 시간별 예보, 8일 단위 일별 예보, 정부 날씨 경보
 * @param lat number; 위도, 소수점(-90; 90)
 * @param lon number; 경도, 소수점(-180, 180)
 * @param exclude string | undefined; 응답에서 제외할 날씨 데이터
 * @returns `{ lat, lon, timezone, timezone_offset, current, minutely, hourly, daily, alerts }`
 * @jinhok96 25.05.12
 */
export function useGetCurrentAndForecastsWeatherData(params: UseGetCurrentAndForecastsWeatherDataParams) {
  const commonParams = useGetOpenWeatherAPICommonParams();
  const fullParams = { ...params, ...commonParams };
  return useSuspenseQuery({
    queryKey: ['useGetCurrentAndForecastsWeatherData', JSON.stringify(fullParams)],
    queryFn: () => openWeatherOneCallService.getCurrentAndForecastsWeatherData(fullParams),
    staleTime: STALE_TIME,
    gcTime: GC_TIME,
  });
}

/**
 * 1979년 1월 1일부터 4일 전 예보까지 모든 타임스탬프의 날씨 데이터
 * @param lat number; 위도, 소수점(-90; 90)
 * @param lon number; 경도, 소수점(-180, 180)
 * @param dt number; 요청할 타임스탬프(유닉스 시간, UTC 표준 시간대)
 * @returns `{ lat, lon, timezone, timezone_offset, data }`
 * @jinhok96 25.05.12
 */
export function useGetWeatherDataForTimestamp(params: UseGetWeatherDataForTimestampParams) {
  const commonParams = useGetOpenWeatherAPICommonParams();
  const fullParams = { ...params, ...commonParams };
  return useSuspenseQuery({
    queryKey: ['useGetWeatherDataForTimestamp', JSON.stringify(fullParams)],
    queryFn: () => openWeatherOneCallService.getWeatherDataForTimestamp(fullParams),
    staleTime: STALE_TIME,
    gcTime: GC_TIME,
  });
}

/**
 * 1979년 1월 2일부터 앞으로 1.5년 동안의 장기 예보까지 특정 날짜의 집계된 날씨 데이터
 * @param lat number; 위도, 소수점(-90; 90)
 * @param lon number; 경도, 소수점(-180, 180)
 * @param date string; 요청할 날짜; YYYY-MM-DD
 * @returns `{ lat, lon, tz, date, units, cloud_cover, humidity, precipitation, pressure, temperature, wind }`
 * @jinhok96 25.05.12
 */
export function useGetDailyAggregation(params: UseGetDailyAggregationParams) {
  const commonParams = useGetOpenWeatherAPICommonParams();
  const fullParams = { ...params, ...commonParams };
  return useSuspenseQuery({
    queryKey: ['useGetDailyAggregation', JSON.stringify(fullParams)],
    queryFn: () => openWeatherOneCallService.getDailyAggregation(fullParams),
    staleTime: STALE_TIME,
    gcTime: GC_TIME,
  });
}
