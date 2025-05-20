import type {
  GetPlaceGeocodingParams,
  GetReverseGeocodingParams,
  PostAutocompleteRegionsPayload,
} from '@services/googleMaps/axios.type';

export type UseGetAutocompleteRegionParams = Partial<
  Omit<PostAutocompleteRegionsPayload, 'languageCode' | 'includedPrimaryTypes'>
>;

export type UseGetPlaceGeocodingParams = Partial<GetPlaceGeocodingParams>;

export type UseGetReverseGeocodingParams = Partial<GetReverseGeocodingParams>;

export type UseGetCurrentAirQualityParams = { lat?: number; lon?: number };

export type UseGetAirQualityHourlyForecastsParams = { lat?: number; lon?: number };
