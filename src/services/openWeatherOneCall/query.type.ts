import type {
  GetCurrentAndForecastsWeatherDataParams,
  GetDailyAggregationParams,
  GetWeatherDataForTimestampParams,
} from '@services/openWeatherOneCall/axios.type';

export type UseGetCurrentAndForecastsWeatherDataParams = Omit<
  GetCurrentAndForecastsWeatherDataParams,
  'units' | 'lang'
>;

export type UseGetWeatherDataForTimestampParams = Omit<GetWeatherDataForTimestampParams, 'units' | 'lang'>;

export type UseGetDailyAggregationParams = Omit<GetDailyAggregationParams, 'units' | 'lang'>;
