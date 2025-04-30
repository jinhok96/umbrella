import Config from 'react-native-config';

import HttpClient from '@services/httpClient/httpClient';

import type {
  GetCurrentAndForecastsWeatherDataParams,
  GetCurrentAndForecastsWeatherDataResponse,
  GetDailyAggregationParams,
  GetDailyAggregationResponse,
  GetWeatherDataForTimestampParams,
  GetWeatherDataForTimestampResponse,
} from '@services/openWeatherOneCall/type';

const OpenWeatherAPIBaseURL = Config.OPEN_WEATHER_API_BASE_URL || '';
const OpenWeatherAPIKey = Config.OPEN_WEATHER_API_KEY || '';

/**
 * OpenWeather One Call API 3.0 인스턴스
 *
 * params에 appid(API 키) 포함됨
 * @jinhok96 25.04.30
 */
const axiosInstance = new HttpClient(OpenWeatherAPIBaseURL, {
  params: {
    appid: OpenWeatherAPIKey,
  },
});

/**
 * OpenWeather One Call API 3.0 서비스
 * @jinhok96 25.04.30
 */
export const openWeatherOneCallService = {
  /**
   * 현재 날씨, 1시간 단위 분 예보, 48시간 단위 시간별 예보, 8일 단위 일별 예보, 정부 날씨 경보
   * @param params Omit<GetCurrentAndForecastsWeatherDataParams, 'appid'>
   * @returns `{ lat, lon, timezone, timezone_offset, current, minutely, hourly, daily, alerts }`
   * @jinhok96 25.04.30
   */
  getCurrentAndForecastsWeatherData: async (params: Omit<GetCurrentAndForecastsWeatherDataParams, 'appid'>) => {
    const response = await axiosInstance.get<GetCurrentAndForecastsWeatherDataResponse>('/3.0/onecall', params);
    return response;
  },
  /**
   * 1979년 1월 1일부터 4일 전 예보까지 모든 타임스탬프의 날씨 데이터
   * @param params Omit<GetWeatherDataForTimestampParams, 'appid'>
   * @returns `{ lat, lon, timezone, timezone_offset, data }`
   * @jinhok96 25.04.30
   */
  getWeatherDataForTimestamp: async (params: Omit<GetWeatherDataForTimestampParams, 'appid'>) => {
    const response = await axiosInstance.get<GetWeatherDataForTimestampResponse>(`/3.0/onecall/timemachine`, params);
    return response;
  },
  /**
   * 1979년 1월 2일부터 앞으로 1.5년 동안의 장기 예보까지 특정 날짜의 집계된 날씨 데이터
   * @param params Omit<GetDailyAggregationParams, 'appid'>
   * @returns `{ lat, lon, tz, date, units, cloud_cover, humidity, precipitation, pressure, temperature, wind }`
   * @jinhok96 25.04.30
   */
  getDailyAggregation: async (params: Omit<GetDailyAggregationParams, 'appid'>) => {
    const response = await axiosInstance.get<GetDailyAggregationResponse>('/3.0/onecall/day_summary', params);
    return response;
  },
};
