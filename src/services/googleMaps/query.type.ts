import type {
  GetPlaceDetailParams,
  GetPlaceGeocodingParams,
  GetReverseGeocodingParams,
  PostAutocompleteRegionsPayload,
} from '@services/googleMaps/axios.type';

export type UseGetAutocompleteRegionParams = Partial<
  Omit<PostAutocompleteRegionsPayload, 'languageCode' | 'includedPrimaryTypes'>
>;

export type UseGetPlaceDetailParams = Partial<Pick<GetPlaceDetailParams, 'placeId'>>;

export type UseGetPlaceGeocodingParams = Partial<Pick<GetPlaceGeocodingParams, 'placeId'>>;

export type UseGetReverseGeocodingParams = Partial<GetReverseGeocodingParams>;

export type UseGetCurrentAirQualityParams = { lat?: number; lon?: number };

export type UseGetAirQualityHourlyForecastsParams = { lat?: number; lon?: number };
