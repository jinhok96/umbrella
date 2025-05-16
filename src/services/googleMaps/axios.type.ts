export type GooglePlacesServiceError = {
  code: number;
  message: string;
  status: string;
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
