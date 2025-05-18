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

/**
 * 날씨 정보 스토어 상태
 * @ current - 현재 날씨 (미세먼지 포함)
 * @ minutely - 1시간 단위 분별 예보
 * @ hourly - 48시간 단위 시간별 예보 (미세먼지 포함)
 * @ daily - 8일 단위 일별 예보
 * @ alerts - 정부 날씨 경보
 * @jinhok96 25.05.18
 */
export type ForecastsStoreState = {
  current: Current | null;
  minutely: Minutely | null;
  hourly: Hourly | null;
  daily: Daily | null;
  alerts: Alerts | null;
};

export type ForecastsStoreActions = {
  setCurrent: (state: ForecastsStoreState['current']) => void;
  setMinutely: (state: ForecastsStoreState['minutely']) => void;
  setHourly: (state: ForecastsStoreState['hourly']) => void;
  setDaily: (state: ForecastsStoreState['daily']) => void;
  setAlerts: (state: ForecastsStoreState['alerts']) => void;
  setForecasts: (
    getCurrentAndForecastsWeatherResponseData: GetCurrentAndForecastsWeatherDataResponse,
    postCurrentAirQualityResponseData: PostCurrentAirQualityResponse,
    postAirQualityHourlyForecastsResponseData: PostAirQualityHourlyForecastsResponse,
  ) => void;
};

export type ForecastsStore = ForecastsStoreState & ForecastsStoreActions;
