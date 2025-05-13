import Config from 'react-native-config';

import { getLocalizedTextFromMap } from '@libs/utils/localize/localize';
import HttpClient from '@services/httpClient/httpClient';
import { HTTP_CLIENT_STATUS_LIST } from '@services/httpClient/httpClient.const';
import { getHttpClientStatusMessage, httpClientError } from '@services/httpClient/httpClient.util';
import { OPEN_WEATHER_ONE_CALL_SERVICE_ERROR_STATUS } from '@services/openWeatherOneCall/axios.const';
import { settingStore } from '@store/settingStore/useSettingStore';

import type { HttpClientStatusList } from '@services/httpClient/httpClient.type';
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
 * @jinhok96 25.05.12
 */
function throwError(error: unknown): void {
  const { lang } = settingStore.getState();
  const { data, status } = httpClientError<OpenWeatherOneCallServiceError>(error);
  const errorCode = data?.cod || status;
  const missingParams = data?.parameters?.join(', ');

  switch (errorCode) {
    case 400:
      throw new Error(
        getLocalizedTextFromMap(OPEN_WEATHER_ONE_CALL_SERVICE_ERROR_STATUS, errorCode.toString(), lang) +
          (missingParams && ` (${missingParams})`),
      );
    case 401:
      throw new Error(getLocalizedTextFromMap(OPEN_WEATHER_ONE_CALL_SERVICE_ERROR_STATUS, errorCode.toString(), lang));
    case 404:
      throw new Error(getLocalizedTextFromMap(OPEN_WEATHER_ONE_CALL_SERVICE_ERROR_STATUS, errorCode.toString(), lang));
    case 429:
      throw new Error(getLocalizedTextFromMap(OPEN_WEATHER_ONE_CALL_SERVICE_ERROR_STATUS, errorCode.toString(), lang));
    default:
      if (errorCode in HTTP_CLIENT_STATUS_LIST) {
        throw new Error(getHttpClientStatusMessage(errorCode.toString() as keyof HttpClientStatusList));
      }
      throw new Error(getHttpClientStatusMessage('9999'));
  }
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
 * @jinhok96 25.05.12
 */
export const openWeatherOneCallService = {
  getCurrentAndForecastsWeatherData: async (params: GetCurrentAndForecastsWeatherDataParams) => {
    try {
      const exclude = params.exclude?.join(',');
      const updatedParams = { ...params, exclude };
      const response = await axiosInstance.get<GetCurrentAndForecastsWeatherDataResponse>(
        '/3.0/onecall',
        updatedParams,
      );
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
