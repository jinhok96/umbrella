import type { LocalizedText } from '@libs/utils/localize/localize.type';
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

type Checklist = {
  umbrella: {
    hours: number[];
    message?: LocalizedText;
  } | null;
  mask: {
    pm10: number;
    pm25: number;
    message?: LocalizedText;
  } | null;
  clothes: {
    temp: {
      morn: number;
      day: number;
      eve: number;
      night: number;
      min: number;
      max: number;
    } | null;
    message?: LocalizedText;
  } | null;
  suncream: {
    uvi: number;
    message?: LocalizedText;
  } | null;
  ozone: {
    o3: number;
  } | null;
};

export type ForecastsStoreState = {
  current: Current | null;
  minutely: Minutely | null;
  hourly: Hourly | null;
  daily: Daily | null;
  alerts: Alerts | null;
  checklist: Checklist | null;
};

export type ForecastsStoreActions = {
  setForecasts: (
    getCurrentAndForecastsWeatherResponseData: GetCurrentAndForecastsWeatherDataResponse,
    postCurrentAirQualityResponseData: PostCurrentAirQualityResponse,
    postAirQualityHourlyForecastsResponseData: PostAirQualityHourlyForecastsResponse,
  ) => void;
};

export type ForecastsStore = ForecastsStoreState & ForecastsStoreActions;
