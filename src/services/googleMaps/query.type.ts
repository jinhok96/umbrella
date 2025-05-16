import type {
  GetPlaceGeocodingParams,
  GetReverseGeocodingParams,
  PostAirQualityHourlyForecastsPayload,
  PostAutocompleteRegionsPayload,
  PostCurrentAirQualityPayload,
} from '@services/googleMaps/axios.type';

export type UseGetAutocompleteRegionParams = Partial<
  Omit<PostAutocompleteRegionsPayload, 'languageCode' | 'includedPrimaryTypes'>
>;

export type UseGetPlaceGeocodingParams = Partial<GetPlaceGeocodingParams>;

export type UseGetReverseGeocodingParams = Partial<GetReverseGeocodingParams>;

export type UseGetCurrentAirQualityParams = Partial<PostCurrentAirQualityPayload>;

export type UseGetAirQualityHourlyForecastsParams = Partial<PostAirQualityHourlyForecastsPayload>;
