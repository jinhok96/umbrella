import type {
  AqiIndex,
  AqiPmData,
  FullGeocodingResult,
  GeocodingResult,
  GetPlaceGeocodingParams,
  GetPlaceGeocodingRawResponse,
  GetPlaceGeocodingResponse,
  GetReverseGeocodingParams,
  GetReverseGeocodingRawResponse,
  GetReverseGeocodingResponse,
  GoogleMapsServiceAirQualityError,
  GoogleMapsServicePlacesGeocodingError,
  Pollutant,
  PostAirQualityHourlyForecastsPayload,
  PostAirQualityHourlyForecastsRawResponse,
  PostAirQualityHourlyForecastsResponse,
  PostAutocompleteRegionsPayload,
  PostAutocompleteRegionsRawResponse,
  PostAutocompleteRegionsResponse,
  PostCurrentAirQualityPayload,
  PostCurrentAirQualityRawResponse,
  PostCurrentAirQualityResponse,
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
const AQI_DATE_TIME = 'testDateTime';
const AQI_INDEX: AqiIndex = {
  code: 'testCode',
  displayName: 'testDisplayName',
  aqi: 1,
  aqiDisplay: 'testAqiDisplay',
  color: {
    red: 1,
    green: 1,
    blue: 1,
  },
  category: 'testCategory',
};
const POLLUTANT_LIST: Pollutant[] = [
  {
    code: 'pm25',
    displayName: 'PM2.5',
    fullName: 'testFullName',
    concentration: {
      value: 10,
      units: 'PARTS_PER_BILLION',
    },
  },
  {
    code: 'pm10',
    displayName: 'PM10',
    fullName: 'testFullName',
    concentration: {
      value: 20,
      units: 'PARTS_PER_BILLION',
    },
  },
];
const AQI_PM_RESULT: AqiPmData = {
  dateTime: AQI_DATE_TIME,
  pm25: POLLUTANT_LIST.find(item => item.code === 'pm25')?.concentration.value,
  pm10: POLLUTANT_LIST.find(item => item.code === 'pm10')?.concentration.value,
};

/**
 * googleMapsService places, geocoding 공통 에러 Mock
 * @jinhok96 25.05.16
 */
const googleMapsServicePlacesGeocodingMockHttpClientError: PickedAxiosResponse<GoogleMapsServicePlacesGeocodingError> =
  {
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
 * googleMapsService air quality 공통 에러 Mock
 * @jinhok96 25.05.16
 */
const googleMapsServiceAirQualityMockHttpClientError: PickedAxiosResponse<GoogleMapsServiceAirQualityError> = {
  data: {
    error: {
      code: 400,
      details: [{ '@type': 'testType', fieldViolations: [{ description: 'testDescription' }] }],
      message: 'Invalid request.',
      status: 'INVALID_REQUEST',
    },
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

/**
 * postCurrentAirQuality Mock
 * @jinhok96 25.05.16
 */
const postCurrentAirQualityMockPayload: PostCurrentAirQualityPayload = { lat: LAT, lon: LON };
const postCurrentAirQualityMockRawData: PostCurrentAirQualityRawResponse = {
  dateTime: AQI_DATE_TIME,
  indexes: [AQI_INDEX],
  pollutants: POLLUTANT_LIST,
  regionCode: 'testRegionCode',
};
const postCurrentAirQualityMockData: PostCurrentAirQualityResponse = AQI_PM_RESULT;
const postCurrentAirQualityMockRawResponse: PickedAxiosResponse<PostCurrentAirQualityRawResponse> = {
  data: postCurrentAirQualityMockRawData,
  status: 200,
  statusText: 'OK',
  headers: { 'Content-Type': 'application/json' },
};
const postCurrentAirQualityMockResponse: PickedAxiosResponse<PostCurrentAirQualityResponse> = {
  data: postCurrentAirQualityMockData,
  status: 200,
  statusText: 'OK',
  headers: { 'Content-Type': 'application/json' },
};

/**
 * postAirQualityHourlyForecasts Mock
 * @jinhok96 25.05.16
 */
const postAirQualityHourlyForecastsMockPayload: PostAirQualityHourlyForecastsPayload = { lat: LAT, lon: LON };
const postAirQualityHourlyForecastsMockRawData: PostAirQualityHourlyForecastsRawResponse = {
  hourlyForecasts: new Array(48).fill({
    dateTime: AQI_DATE_TIME,
    indexes: [AQI_INDEX],
    pollutants: POLLUTANT_LIST,
  }),
  regionCode: 'testRegionCode',
};
const postAirQualityHourlyForecastsMockData: PostAirQualityHourlyForecastsResponse = new Array(48).fill(AQI_PM_RESULT);
const postAirQualityHourlyForecastsMockRawResponse: PickedAxiosResponse<PostAirQualityHourlyForecastsRawResponse> = {
  data: postAirQualityHourlyForecastsMockRawData,
  status: 200,
  statusText: 'OK',
  headers: { 'Content-Type': 'application/json' },
};
const postAirQualityHourlyForecastsMockResponse: PickedAxiosResponse<PostAirQualityHourlyForecastsResponse> = {
  data: postAirQualityHourlyForecastsMockData,
  status: 200,
  statusText: 'OK',
  headers: { 'Content-Type': 'application/json' },
};

export const GOOGLE_MAPS_SERVICE_MOCK = {
  HTTP_CLIENT_PLACES_GEOCODING_ERROR: googleMapsServicePlacesGeocodingMockHttpClientError,
  HTTP_CLIENT_AIR_QUALITY_ERROR: googleMapsServiceAirQualityMockHttpClientError,
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
  POST_CURRENT_AIR_QUALITY: {
    PAYLOAD: postCurrentAirQualityMockPayload,
    RAW_DATA: postCurrentAirQualityMockRawData,
    DATA: postCurrentAirQualityMockData,
    RAW_RESPONSE: postCurrentAirQualityMockRawResponse,
    RESPONSE: postCurrentAirQualityMockResponse,
  },
  POST_AIR_QUALITY_HOURLY_FORECASTS: {
    PAYLOAD: postAirQualityHourlyForecastsMockPayload,
    RAW_DATA: postAirQualityHourlyForecastsMockRawData,
    DATA: postAirQualityHourlyForecastsMockData,
    RAW_RESPONSE: postAirQualityHourlyForecastsMockRawResponse,
    RESPONSE: postAirQualityHourlyForecastsMockResponse,
  },
};
