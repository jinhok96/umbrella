import type { ForecastsStoreState } from '@store/forecastsStore/useForecastsStore.type';

export const INIT_FORECASTS_STORE_STATE: ForecastsStoreState = {
  current: null,
  minutely: null,
  hourly: null,
  daily: null,
  alerts: null,
};
