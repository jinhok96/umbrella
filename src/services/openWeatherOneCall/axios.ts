import Config from 'react-native-config';

import HttpClient from '@services/httpClient/httpClient';
import { PickedAxiosResponse } from '@services/httpClient/httpClient.type';

import type {
  GetCurrentAndForecastsWeatherDataParams,
  GetCurrentAndForecastsWeatherDataResponse,
  GetDailyAggregationParams,
  GetDailyAggregationResponse,
  GetWeatherDataForTimestampParams,
  GetWeatherDataForTimestampResponse,
} from '@services/openWeatherOneCall/type';

/**
 * OpenWeather One Call API 3.0 에러 타입
 * @jinhok96 25.04.30
 */
type OpenWeatherOneCallServiceError = {
  cod: number;
  message: string;
  parameters?: string[];
};

/**
 * OpenWeather One Call API 3.0 에러 처리 함수
 * @param error httpClient에서 throw한 에러
 * @jinhok96 25.05.01
 */
function throwError(error: PickedAxiosResponse<OpenWeatherOneCallServiceError | null>) {
  const errorMessage = error.data?.message || error.statusText || 'Unknown Error';
  throw new Error(errorMessage);
}

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
  getCurrentAndForecastsWeatherData: async (params: Omit<GetCurrentAndForecastsWeatherDataParams, 'appid'>) => {
    try {
      const response = await axiosInstance.get<GetCurrentAndForecastsWeatherDataResponse>('/3.0/onecall', params);
      return response;
    } catch (error) {
      throwError(error as PickedAxiosResponse<OpenWeatherOneCallServiceError | null>);
    }
  },
  getWeatherDataForTimestamp: async (params: Omit<GetWeatherDataForTimestampParams, 'appid'>) => {
    try {
      const response = await axiosInstance.get<GetWeatherDataForTimestampResponse>(`/3.0/onecall/timemachine`, params);
      return response;
    } catch (error) {
      throwError(error as PickedAxiosResponse<OpenWeatherOneCallServiceError | null>);
    }
  },
  getDailyAggregation: async (params: Omit<GetDailyAggregationParams, 'appid'>) => {
    try {
      const response = await axiosInstance.get<GetDailyAggregationResponse>('/3.0/onecall/day_summary', params);
      return response;
    } catch (error) {
      throwError(error as PickedAxiosResponse<OpenWeatherOneCallServiceError | null>);
    }
  },
};
