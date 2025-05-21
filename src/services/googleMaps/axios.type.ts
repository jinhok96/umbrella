export type GoogleMapsServicePlacesGeocodingError = {
  code: number;
  message: string;
  status: string;
};

export type GoogleMapsServiceAirQualityError = {
  error: {
    code: number;
    details: Array<{ '@type': string; fieldViolations: Array<{ description: string }> }>;
    message: string;
    status: string;
  };
};

/**
 * Autocomplete Regions 공통 payload
 * @ languageCode - IETF BCP-47 언어 코드 / ko, en은 앱 언어 코드(ISO 639-1)와 동일
 * @ includedPrimaryTypes - 지역 또는 구역 (ex: 동네, 우편번호) 필터링 (https://developers.google.com/maps/documentation/places/web-service/place-autocomplete?hl=ko#includedPrimaryTypes)f
 * @jinhok96 25.05.20
 */
export type CommonAutocompleteRegionsPayload = {
  languageCode: 'ko' | 'en';
  includedPrimaryTypes: '(regions)' | '(cities)' | Array<'locality' | 'sublocality' | 'geocode'>;
};

export type PostAutocompleteRegionsPayload = CommonAutocompleteRegionsPayload & {
  input: string;
};

export type PostAutocompleteRegionsRawResponse = {
  suggestions: Array<{
    placePrediction: {
      place: string;
      placeId: string;
      text: { text: string; matches: Array<{ endOffset: number }> };
      types: string[];
    };
  }>;
};

export type PostAutocompleteRegionsResponse = Array<{
  placeId: string;
  text: string;
  types: string[];
}>;

export type GeocodingResult = {
  placeId: string;
  formattedAddress: string;
  location: {
    latitude: number;
    longitude: number;
  };
  types: string[];
};

export type FullGeocodingResult = GeocodingResult & {
  place: string;
  granularity: string;
  viewport: {
    low: {
      latitude: number;
      longitude: number;
    };
    high: {
      latitude: number;
      longitude: number;
    };
  };
  postalAddress: {
    regionCode: string;
    languageCode: string;
    postalCode: string;
    administrativeArea: string;
    locality: string;
    addressLine: string[];
  };
  addressComponents: Array<{
    longText: string;
    shortText: string;
    types: string[];
  }>;
};

export type GetPlaceGeocodingParams = {
  placeId: string;
};

export type GetPlaceGeocodingRawResponse = FullGeocodingResult;

export type GetPlaceGeocodingResponse = GeocodingResult;

export type GetReverseGeocodingParams = {
  lat: number;
  lon: number;
};

export type GetReverseGeocodingRawResponse = {
  results: Array<FullGeocodingResult>;
  plusCode: {
    globalCode: string;
    compoundCode: string;
  };
};

export type GetReverseGeocodingResponse = GeocodingResult;

export type CommonAirQualityPayload = {
  location: { latitude: number; longitude: number };
  languageCode: 'ko' | 'en'; // IETF BCP-47 언어 코드 / ko, en은 앱 언어 코드(ISO 639-1)와 동일
  extraComputations: ['POLLUTANT_CONCENTRATION'];
};

export type PostCurrentAirQualityPayload = CommonAirQualityPayload;

export type AqiIndex = {
  code: string;
  displayName: string;
  aqi: number;
  aqiDisplay: string;
  color: {
    red: number;
    green: number;
    blue: number;
  };
  category: string;
};

type PollutantCode = 'pm25' | 'pm10' | 'co' | 'no2' | 'o3' | 'so2';

export type Pollutant = {
  code: PollutantCode;
  displayName: string;
  fullName: string;
  concentration: {
    value: number;
    units: 'PARTS_PER_BILLION' | 'MICROGRAMS_PER_CUBIC_METER'; // ppb, μg/m3
  };
};

export type AqiPmData = {
  dateTime: string;
  pm25?: number;
  pm10?: number;
};

export type PostCurrentAirQualityRawResponse = {
  dateTime: string;
  indexes: AqiIndex[];
  pollutants: Pollutant[];
  regionCode: string;
};

export type PostCurrentAirQualityResponse = AqiPmData;

export type PostAirQualityHourlyForecastsPayload = CommonAirQualityPayload & {
  period: { startTime: string; endTime: string };
  pageToken?: string;
};

export type PostAirQualityHourlyForecastsRawResponse = {
  hourlyForecasts: Array<{
    dateTime: string;
    indexes: Array<AqiIndex & { dominantPollutant: PollutantCode }>;
    pollutants: Pollutant[];
  }>;
  regionCode: string;
  nextPageToken?: string;
};

export type PostAirQualityHourlyForecastsResponse = Array<AqiPmData>;
