import type {
  GetPlaceGeocodingParams,
  GetReverseGeocodingParams,
  PostAutocompleteRegionsPayload,
} from '@services/googleMaps/axios.type';

export type UsePostAutocompleteRegionPayload = Omit<
  PostAutocompleteRegionsPayload,
  'languageCode' | 'includedPrimaryTypes'
>;

export type UseGetPlaceGeocodingParams = Partial<GetPlaceGeocodingParams>;

export type UseGetReverseGeocodingParams = Partial<GetReverseGeocodingParams>;
