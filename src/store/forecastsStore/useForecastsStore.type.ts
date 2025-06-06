import type {
  AqiPmData,
  PostAirQualityHourlyForecastsResponse,
  PostCurrentAirQualityResponse,
} from '@services/googleMaps/axios.type';
import type { GetCurrentAndForecastsWeatherDataResponse } from '@services/openWeatherOneCall/axios.type';

type AqiPmDataWithoutDateTime = Omit<AqiPmData, 'dateTime'>;

type Current = GetCurrentAndForecastsWeatherDataResponse['current'] & AqiPmDataWithoutDateTime;
type Minutely = GetCurrentAndForecastsWeatherDataResponse['minutely'];
type Hourly = Array<GetCurrentAndForecastsWeatherDataResponse['hourly'][number] & AqiPmDataWithoutDateTime>;
type Daily = GetCurrentAndForecastsWeatherDataResponse['daily'];
type Alerts = GetCurrentAndForecastsWeatherDataResponse['alerts'];

export type ForecastsStoreState = {
  current: Current | null;
  minutely: Minutely | null;
  hourly: Hourly | null;
  daily: Daily | null;
  alerts: Alerts | null;
};

export type ForecastsStoreActions = {
  setForecasts: (
    getCurrentAndForecastsWeatherResponseData: GetCurrentAndForecastsWeatherDataResponse,
    postCurrentAirQualityResponseData: PostCurrentAirQualityResponse,
    postAirQualityHourlyForecastsResponseData: PostAirQualityHourlyForecastsResponse,
  ) => void;
};

export type ForecastsStore = ForecastsStoreState & ForecastsStoreActions;
