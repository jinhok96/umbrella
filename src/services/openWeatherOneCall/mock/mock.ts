import { DEFAULT_LANGUAGE } from '@libs/utils/localize/localize.const';
import { OPEN_WEATHER_ONE_CALL_SERVICE_ERROR_STATUS } from '@services/openWeatherOneCall/status';

import type { PickedAxiosResponse } from '@services/httpClient/httpClient.type';
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
 * OpenWeatherOneCallService 공통 에러 Mock
 * @jinhok96 25.05.08
 */
const openWeatherOneCallServiceMockError: OpenWeatherOneCallServiceError = {
  cod: 401,
  message: OPEN_WEATHER_ONE_CALL_SERVICE_ERROR_STATUS[401][DEFAULT_LANGUAGE],
};
const openWeatherOneCallServiceMockHttpClientError: PickedAxiosResponse<OpenWeatherOneCallServiceError> = {
  data: openWeatherOneCallServiceMockError,
  status: 500,
  statusText: 'Internal Server Error',
  headers: { 'Content-Type': 'application/json' },
};

/**
 * getCurrentAndForecastsWeatherData Mock
 * @jinhok96 25.05.06
 */
const getCurrentAndForecastsWeatherDataMockParams: GetCurrentAndForecastsWeatherDataParams = {
  lat: 37.5665,
  lon: 126.978,
};
const getCurrentAndForecastsWeatherDataMockData: GetCurrentAndForecastsWeatherDataResponse = {
  lat: 33.44,
  lon: -94.04,
  timezone: 'America/Chicago',
  timezone_offset: -18000,
  current: {
    dt: 1684929490,
    sunrise: 1684926645,
    sunset: 1684977332,
    temp: 292.55,
    feels_like: 292.87,
    pressure: 1014,
    humidity: 89,
    dew_point: 290.69,
    uvi: 0.16,
    clouds: 53,
    visibility: 10000,
    wind_speed: 3.13,
    wind_deg: 93,
    wind_gust: 6.71,
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04d',
      },
    ],
  },
  minutely: [
    {
      dt: 1684929540,
      precipitation: 0,
    },
  ],
  hourly: [
    {
      dt: 1684926000,
      temp: 292.01,
      feels_like: 292.33,
      pressure: 1014,
      humidity: 91,
      dew_point: 290.51,
      uvi: 0,
      clouds: 54,
      visibility: 10000,
      wind_speed: 2.58,
      wind_deg: 86,
      wind_gust: 5.88,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      pop: 0.15,
    },
  ],
  daily: [
    {
      dt: 1684951200,
      sunrise: 1684926645,
      sunset: 1684977332,
      moonrise: 1684941060,
      moonset: 1684905480,
      moon_phase: 0.16,
      summary: 'Expect a day of partly cloudy with rain',
      temp: {
        day: 299.03,
        min: 290.69,
        max: 300.35,
        night: 291.45,
        eve: 297.51,
        morn: 292.55,
      },
      feels_like: {
        day: 299.21,
        night: 291.37,
        eve: 297.86,
        morn: 292.87,
      },
      pressure: 1016,
      humidity: 59,
      dew_point: 290.48,
      wind_speed: 3.98,
      wind_deg: 76,
      wind_gust: 8.92,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: 92,
      pop: 0.47,
      rain: 0.15,
      uvi: 9.23,
    },
  ],
  alerts: [
    {
      sender_name: 'NWS Philadelphia - Mount Holly (New Jersey, Delaware, Southeastern Pennsylvania)',
      event: 'Small Craft Advisory',
      start: 1684952747,
      end: 1684988747,
      description:
        '...SMALL CRAFT ADVISORY REMAINS IN EFFECT FROM 5 PM THIS\nAFTERNOON TO 3 AM EST FRIDAY...\n* WHAT...North winds 15 to 20 kt with gusts up to 25 kt and seas\n3 to 5 ft expected.\n* WHERE...Coastal waters from Little Egg Inlet to Great Egg\nInlet NJ out 20 nm, Coastal waters from Great Egg Inlet to\nCape May NJ out 20 nm and Coastal waters from Manasquan Inlet\nto Little Egg Inlet NJ out 20 nm.\n* WHEN...From 5 PM this afternoon to 3 AM EST Friday.\n* IMPACTS...Conditions will be hazardous to small craft.',
      tags: [],
    },
  ],
};
const getCurrentAndForecastsWeatherDataMockResponse: PickedAxiosResponse<GetCurrentAndForecastsWeatherDataResponse> = {
  data: getCurrentAndForecastsWeatherDataMockData,
  status: 200,
  statusText: 'OK',
  headers: { 'Content-Type': 'application/json' },
};

/**
 * getWeatherDataForTimestamp Mock
 * @jinhok96 25.05.06
 */
const getWeatherDataForTimestampMockParams: GetWeatherDataForTimestampParams = {
  lat: 39.099724,
  lon: -94.578331,
  dt: 1643803200,
};
const getWeatherDataForTimestampMockData: GetWeatherDataForTimestampResponse = {
  lat: 52.2297,
  lon: 21.0122,
  timezone: 'Europe/Warsaw',
  timezone_offset: 3600,
  data: [
    {
      dt: 1645888976,
      sunrise: 1645853361,
      sunset: 1645891727,
      temp: 279.13,
      feels_like: 276.44,
      pressure: 1029,
      humidity: 64,
      dew_point: 272.88,
      uvi: 0.06,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.6,
      wind_deg: 340,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
    },
  ],
};
const getWeatherDataForTimestampMockResponse: PickedAxiosResponse<GetWeatherDataForTimestampResponse> = {
  data: getWeatherDataForTimestampMockData,
  status: 200,
  statusText: 'OK',
  headers: { 'Content-Type': 'application/json' },
};

/**
 * getDailyAggregation Mock
 * @jinhok96 25.05.06
 */
const getDailyAggregationMockParams: GetDailyAggregationParams = {
  lat: 39.099724,
  lon: -94.578331,
  date: '2020-03-04',
};
const getDailyAggregationMockData: GetDailyAggregationResponse = {
  lat: 33,
  lon: 35,
  tz: '+02:00',
  date: '2020-03-04',
  units: 'standard',
  cloud_cover: {
    afternoon: 0,
  },
  humidity: {
    afternoon: 33,
  },
  precipitation: {
    total: 0,
  },
  temperature: {
    min: 286.48,
    max: 299.24,
    afternoon: 296.15,
    night: 289.56,
    evening: 295.93,
    morning: 287.59,
  },
  pressure: {
    afternoon: 1015,
  },
  wind: {
    max: {
      speed: 8.7,
      direction: 120,
    },
  },
};
const getDailyAggregationMockResponse: PickedAxiosResponse<GetDailyAggregationResponse> = {
  data: getDailyAggregationMockData,
  status: 200,
  statusText: 'OK',
  headers: { 'Content-Type': 'application/json' },
};

export const OPEN_WEATHER_ONE_CALL_SERVICE_MOCK = {
  HTTP_CLIENT_ERROR: openWeatherOneCallServiceMockHttpClientError,
  GET_CURRENT_AND_FORECASTS_WEATHER_DATA: {
    PARAMS: getCurrentAndForecastsWeatherDataMockParams,
    DATA: getCurrentAndForecastsWeatherDataMockData,
    RESPONSE: getCurrentAndForecastsWeatherDataMockResponse,
  },
  GET_WEATHER_DATA_FOR_TIMESTAMP: {
    PARAMS: getWeatherDataForTimestampMockParams,
    DATA: getWeatherDataForTimestampMockData,
    RESPONSE: getWeatherDataForTimestampMockResponse,
  },
  GET_DAILY_AGGREGATION: {
    PARAMS: getDailyAggregationMockParams,
    DATA: getDailyAggregationMockData,
    RESPONSE: getDailyAggregationMockResponse,
  },
};
