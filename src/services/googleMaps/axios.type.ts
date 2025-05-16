export type GoogleMapsServiceError = {
  code: number;
  message: string;
  status: string;
};

export type GoogleMapsAirQualityServiceError = {
  error: {
    code: number;
    details: Array<{ '@type': string; fieldViolations: Array<{ description: string }> }>;
    message: string;
    status: string;
  };
};

export type PostAutocompleteRegionsPayload = {
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

export type PostCurrentAirQualityPayload = { lat: number; lon: number };

type AqiIndex = {
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
type Pollutant = {
  code: PollutantCode;
  displayName: string;
  fullName: string;
  concentration: {
    value: number;
    units: 'PARTS_PER_BILLION' | 'MICROGRAMS_PER_CUBIC_METER'; // ppb, μg/m3
  };
};

export type PostCurrentAirQualityRawResponse = {
  dateTime: string;
  regionCode: string;
  indexes: AqiIndex[];
  pollutants: Pollutant[];
};

export type PostCurrentAirQualityResponse = {
  dateTime: string;
  pm25?: number;
  pm10?: number;
};

export type PostAirQualityHourlyForecastsPayload = {
  lat: number;
  lon: number;
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

export type PostAirQualityHourlyForecastsResponse = Array<{
  dateTime: string;
  pm25?: number;
  pm10?: number;
}>;
