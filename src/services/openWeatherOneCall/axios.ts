import Config from 'react-native-config';

import HttpClient from '@services/httpClient/httpClient';
import { httpClientError } from '@services/httpClient/utils';

import type {
  GetCurrentAndForecastsWeatherDataParams,
  GetCurrentAndForecastsWeatherDataResponse,
  GetDailyAggregationParams,
  GetDailyAggregationResponse,
  GetWeatherDataForTimestampParams,
  GetWeatherDataForTimestampResponse,
  OpenWeatherOneCallServiceError,
} from '@services/openWeatherOneCall/axios.type';

/**
 * OpenWeather One Call API 3.0 에러 처리 함수
 * @param error httpClient에서 throw한 에러
 * @jinhok96 25.05.06
 */
function throwError(error: unknown) {
  const typedError = httpClientError<OpenWeatherOneCallServiceError>(error);
  const errorMessage = typedError.data?.message || typedError.statusText;
  throw new Error(errorMessage);
}

const OpenWeatherAPIBaseURL = Config.OPEN_WEATHER_API_BASE_URL || '';
const OpenWeatherAPIKey = Config.OPEN_WEATHER_API_KEY || '';

/**
 * OpenWeather One Call API 3.0 인스턴스
 *
 * params에 appid(API 키) 주입
 * @jinhok96 25.05.05
 */
const axiosInstance = new HttpClient(OpenWeatherAPIBaseURL, {
  params: {
    appid: OpenWeatherAPIKey,
  },
});

/**
 * OpenWeather One Call API 3.0 서비스
 * @jinhok96 25.05.05
 */
export const openWeatherOneCallService = {
  getCurrentAndForecastsWeatherData: async (params: GetCurrentAndForecastsWeatherDataParams) => {
    try {
      const response = await axiosInstance.get<GetCurrentAndForecastsWeatherDataResponse>('/3.0/onecall', params);
      return response;
    } catch (error) {
      throwError(error);
    }
  },
  getWeatherDataForTimestamp: async (params: GetWeatherDataForTimestampParams) => {
    try {
      const response = await axiosInstance.get<GetWeatherDataForTimestampResponse>(`/3.0/onecall/timemachine`, params);
      return response;
    } catch (error) {
      throwError(error);
    }
  },
  getDailyAggregation: async (params: GetDailyAggregationParams) => {
    try {
      const response = await axiosInstance.get<GetDailyAggregationResponse>('/3.0/onecall/day_summary', params);
      return response;
    } catch (error) {
      throwError(error);
    }
  },
};

export { axiosInstance as openWeatherOneCallAxiosInstance };
