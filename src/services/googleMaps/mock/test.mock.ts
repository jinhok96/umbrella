import type {
  FullGeocodingResult,
  GeocodingResult,
  GetPlaceGeocodingParams,
  GetPlaceGeocodingRawResponse,
  GetPlaceGeocodingResponse,
  GetReverseGeocodingParams,
  GetReverseGeocodingRawResponse,
  GetReverseGeocodingResponse,
  GoogleMapsServiceError,
  PostAutocompleteRegionsPayload,
  PostAutocompleteRegionsRawResponse,
  PostAutocompleteRegionsResponse,
} from '@services/googleMaps/axios.type';
import type { PickedAxiosResponse } from '@services/httpClient/httpClient.type';

const PLACE_ID = 'testId';
const LAT = 0;
const LON = 0;
const FORMATTED_ADDRESS = 'testFormattedAddress';
const TYPES = ['locality', 'sublocality', 'geocode'];
const GEOCODING_RESULT: GeocodingResult = {
  placeId: PLACE_ID,
  formattedAddress: FORMATTED_ADDRESS,
  location: {
    latitude: LAT,
    longitude: LON,
  },
  types: TYPES,
};
const FULL_GEOCODING_RESULT: FullGeocodingResult = {
  ...GEOCODING_RESULT,
  place: 'testPlace',
  granularity: 'testGranularity',
  viewport: {
    low: {
      latitude: LAT,
      longitude: LON,
    },
    high: {
      latitude: LAT,
      longitude: LON,
    },
  },
  postalAddress: {
    regionCode: 'testRegionCode',
    languageCode: 'testLanguageCode',
    postalCode: 'testPostalCode',
    administrativeArea: 'testAdministrativeArea',
    locality: 'testLocality',
    addressLine: ['testAddressLine1', 'testAddressLine2'],
  },
  addressComponents: [
    {
      longText: 'testLongName',
      shortText: 'testShortName',
      types: ['testTypes'],
    },
  ],
};

/**
 * googleMapsService 공통 에러 Mock
 * @jinhok96 25.05.16
 */
const googleMapsServiceMockHttpClientError: PickedAxiosResponse<GoogleMapsServiceError> = {
  data: {
    code: 400,
    message: 'Invalid request.',
    status: 'INVALID_REQUEST',
  },
  status: 500,
  statusText: 'Internal Server Error',
  headers: { 'Content-Type': 'application/json' },
};

/**
 * postAutocompleteRegions Mock
 * @jinhok96 25.05.16
 */
const postAutocompleteRegionsMockPayload: PostAutocompleteRegionsPayload = { input: 'test' };
const postAutocompleteRegionsMockRawData: PostAutocompleteRegionsRawResponse = {
  suggestions: [
    {
      placePrediction: {
        place: 'testPlace',
        placeId: PLACE_ID,
        text: { text: 'testText', matches: [{ endOffset: 1 }] },
        types: TYPES,
      },
    },
  ],
};
const postAutocompleteRegionsMockData: PostAutocompleteRegionsResponse = [
  {
    placeId: PLACE_ID,
    text: 'testText',
    types: TYPES,
  },
];
const postAutocompleteRegionsMockRawResponse: PickedAxiosResponse<PostAutocompleteRegionsRawResponse> = {
  data: postAutocompleteRegionsMockRawData,
  status: 200,
  statusText: 'OK',
  headers: { 'Content-Type': 'application/json' },
};
const postAutocompleteRegionsMockResponse: PickedAxiosResponse<PostAutocompleteRegionsResponse> = {
  data: postAutocompleteRegionsMockData,
  status: 200,
  statusText: 'OK',
  headers: { 'Content-Type': 'application/json' },
};

/**
 * getPlaceGeocoding Mock
 * @jinhok96 25.05.16
 */
const getPlaceGeocodingMockParams: GetPlaceGeocodingParams = { placeId: PLACE_ID };
const getPlaceGeocodingMockRawData: GetPlaceGeocodingRawResponse = FULL_GEOCODING_RESULT;
const getPlaceGeocodingMockData: GetPlaceGeocodingResponse = GEOCODING_RESULT;
const getPlaceGeocodingMockRawResponse: PickedAxiosResponse<GetPlaceGeocodingResponse> = {
  data: getPlaceGeocodingMockRawData,
  status: 200,
  statusText: 'OK',
  headers: { 'Content-Type': 'application/json' },
};
const getPlaceGeocodingMockResponse: PickedAxiosResponse<GetPlaceGeocodingResponse> = {
  data: getPlaceGeocodingMockData,
  status: 200,
  statusText: 'OK',
  headers: { 'Content-Type': 'application/json' },
};

/**
 * getReverseGeocoding Mock
 * @jinhok96 25.05.16
 */
const getReverseGeocodingMockParams: GetReverseGeocodingParams = { lat: LAT, lon: LON };
const getReverseGeocodingMockRawData: GetReverseGeocodingRawResponse = {
  results: [FULL_GEOCODING_RESULT],
  plusCode: {
    globalCode: 'testGlobalCode',
    compoundCode: 'testCompoundCode',
  },
};
const getReverseGeocodingMockData: GetReverseGeocodingResponse = GEOCODING_RESULT;
const getReverseGeocodingMockRawResponse: PickedAxiosResponse<GetReverseGeocodingRawResponse> = {
  data: getReverseGeocodingMockRawData,
  status: 200,
  statusText: 'OK',
  headers: { 'Content-Type': 'application/json' },
};
const getReverseGeocodingMockResponse: PickedAxiosResponse<GetReverseGeocodingResponse> = {
  data: getReverseGeocodingMockData,
  status: 200,
  statusText: 'OK',
  headers: { 'Content-Type': 'application/json' },
};

export const GOOGLE_MAPS_SERVICE_MOCK = {
  HTTP_CLIENT_ERROR: googleMapsServiceMockHttpClientError,
  POST_AUTOCOMPLETE_REGIONS: {
    PAYLOAD: postAutocompleteRegionsMockPayload,
    RAW_DATA: postAutocompleteRegionsMockRawData,
    DATA: postAutocompleteRegionsMockData,
    RAW_RESPONSE: postAutocompleteRegionsMockRawResponse,
    RESPONSE: postAutocompleteRegionsMockResponse,
  },
  GET_PLACE_GEOCODING: {
    PARAMS: getPlaceGeocodingMockParams,
    RAW_DATA: getPlaceGeocodingMockRawData,
    DATA: getPlaceGeocodingMockData,
    RAW_RESPONSE: getPlaceGeocodingMockRawResponse,
    RESPONSE: getPlaceGeocodingMockResponse,
  },
  GET_REVERSE_GEOCODING: {
    PARAMS: getReverseGeocodingMockParams,
    RAW_DATA: getReverseGeocodingMockRawData,
    DATA: getReverseGeocodingMockData,
    RAW_RESPONSE: getReverseGeocodingMockRawResponse,
    RESPONSE: getReverseGeocodingMockResponse,
  },
};
