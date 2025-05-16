import Config from 'react-native-config';

import { getLocalISOString } from '@libs/utils/date.util';
import HttpClient from '@services/httpClient/httpClient';
import { httpClientError } from '@services/httpClient/httpClient.util';
import { settingStore } from '@store/settingStore/useSettingStore';

import type {
  GeocodingResult,
  GetPlaceGeocodingParams,
  GetPlaceGeocodingRawResponse,
  GetPlaceGeocodingResponse,
  GetReverseGeocodingParams,
  GetReverseGeocodingRawResponse,
  GetReverseGeocodingResponse,
  GoogleMapsAirQualityServiceError,
  GoogleMapsServiceError,
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

type PostCurrentAirQualityFullPayload = {
  location: { latitude: number; longitude: number };
  languageCode: 'ko' | 'en'; // IETF BCP-47 언어 코드 / ko, en은 앱 언어 코드(ISO 639-1)와 동일
  extraComputations: ['POLLUTANT_CONCENTRATION'];
};

type PostAirQualityHourlyForecastsFullPayload = {
  location: { latitude: number; longitude: number };
  period: { startTime: string; endTime: string };
  languageCode: 'ko' | 'en'; // IETF BCP-47 언어 코드 / ko, en은 앱 언어 코드(ISO 639-1)와 동일
  extraComputations: ['POLLUTANT_CONCENTRATION'];
  pageToken?: string;
};

function throwError(error: unknown): void {
  const { data, statusText } = httpClientError<GoogleMapsServiceError>(error);
  if (data?.message) throw new Error(data.message);
  throw new Error(statusText);
}

function throwAirQualityError(error: unknown): void {
  console.log('error', error);
  const { data, statusText } = httpClientError<GoogleMapsAirQualityServiceError>(error);
  if (data?.error.message) throw new Error(data.error.message);
  throw new Error(statusText);
}

/**
 * Air Quality API 공통 payload
 * @returns `{ languageCode, extraComputations }`
 */
function getAirQualityCommonPayload(): {
  languageCode: 'ko' | 'en'; // IETF BCP-47 언어 코드 / ko, en은 앱 언어 코드(ISO 639-1)와 동일
  extraComputations: ['POLLUTANT_CONCENTRATION'];
} {
  const { lang } = settingStore.getState();
  return {
    languageCode: lang,
    extraComputations: ['POLLUTANT_CONCENTRATION'],
  };
}

const GOOGLE_MAPS_PLACES_API_BASE_URL = Config.GOOGLE_MAPS_PLACES_API_BASE_URL || '';
const GOOGLE_MAPS_GEOCODING_API_BASE_URL = Config.GOOGLE_MAPS_GEOCODING_API_BASE_URL || '';
const GOOGLE_MAPS_AIR_QUALITY_API_BASE_URL = Config.GOOGLE_MAPS_AIR_QUALITY_API_BASE_URL || '';
const GOOGLE_MAPS_API_KEY = Config.GOOGLE_MAPS_API_KEY || '';

/**
 * Google Maps Places API 인스턴스
 *
 * headers에 X-Goog-Api-Key(API 키) 주입
 * @jinhok96 25.05.15
 */
const placesAxiosInstance = new HttpClient(GOOGLE_MAPS_PLACES_API_BASE_URL, {
  headers: {
    common: {
      'X-Goog-Api-Key': GOOGLE_MAPS_API_KEY,
    },
  },
});

/**
 * Google Maps Geocoding API 인스턴스
 *
 * headers에 X-Goog-Api-Key(API 키) 주입
 * @jinhok96 25.05.15
 */
const geocodingAxiosInstance = new HttpClient(GOOGLE_MAPS_GEOCODING_API_BASE_URL, {
  headers: {
    common: {
      'X-Goog-Api-Key': GOOGLE_MAPS_API_KEY,
    },
  },
});

/**
 * Google Maps Geocoding API 인스턴스
 * @jinhok96 25.05.16
 */
const airQualityAxiosInstance = new HttpClient(GOOGLE_MAPS_AIR_QUALITY_API_BASE_URL);

/**
 * GeocodingResult를 포함하는 데이터에서 GeocodingResult만 반환하는 함수
 * @param data GeocodingResult를 포함하는 데이터
 * @returns GeocodingResult만 포함된 데이터
 * @jinhok96 25.05.16
 */
function filterGeocodingResult(data: GeocodingResult & Record<string, unknown>) {
  return {
    placeId: data.placeId.replace('-', ''),
    formattedAddress: data.formattedAddress,
    location: data.location,
    types: data.types,
  };
}

/**
 * Google Maps API 서비스
 * @jinhok96 25.05.16
 */
export const googleMapsService = {
  postAutocompleteRegions: async (
    payload: PostAutocompleteRegionsPayload,
  ): Promise<PickedAxiosResponse<PostAutocompleteRegionsResponse | null> | undefined> => {
    try {
      const { lang } = settingStore.getState();

      const fullPayload: PostAutocompleteRegionsPayload & {
        languageCode: 'ko' | 'en'; // IETF BCP-47 언어 코드 / ko, en은 앱 언어 코드(ISO 639-1)와 동일
        includedPrimaryTypes: '(regions)' | '(cities)' | Array<'locality' | 'sublocality' | 'geocode'>; // 지역 또는 구역 (ex: 동네, 우편번호) 필터링 (https://developers.google.com/maps/documentation/places/web-service/place-autocomplete?hl=ko#includedPrimaryTypes)
      } = {
        ...payload,
        languageCode: lang,
        includedPrimaryTypes: ['locality', 'sublocality', 'geocode'],
      };

      const response = await placesAxiosInstance.post<PostAutocompleteRegionsRawResponse>(
        '/v1/places:autocomplete',
        fullPayload,
        {
          headers: {
            'X-Goog-FieldMask':
              'suggestions.placePrediction.placeId,suggestions.placePrediction.text,suggestions.placePrediction.types',
          },
        },
      );

      if (!response.data?.suggestions) {
        const nullDataResponse: PickedAxiosResponse<null> = { ...response, data: null };
        return nullDataResponse;
      }

      const filteredResponseData: PostAutocompleteRegionsResponse = response.data?.suggestions.map(item => ({
        placeId: item.placePrediction.placeId,
        text: item.placePrediction.text.text,
        types: item.placePrediction.types,
      }));

      const updatedResponse: PickedAxiosResponse<PostAutocompleteRegionsResponse | null> = {
        ...response,
        data: filteredResponseData,
      };

      return updatedResponse;
    } catch (error) {
      throwError(error);
    }
  },
  getPlaceGeocoding: async (
    params: GetPlaceGeocodingParams,
  ): Promise<PickedAxiosResponse<GetPlaceGeocodingResponse | null> | undefined> => {
    try {
      const response = await geocodingAxiosInstance.get<GetPlaceGeocodingRawResponse>(
        `/v4beta/geocode/places/${params.placeId}`,
      );

      if (!response.data?.formattedAddress) {
        const nullDataResponse: PickedAxiosResponse<null> = { ...response, data: null };
        return nullDataResponse;
      }

      const updatedResponse: PickedAxiosResponse<GetPlaceGeocodingResponse | null> = {
        ...response,
        data: filterGeocodingResult(response.data),
      };

      return updatedResponse;
    } catch (error) {
      throwError(error);
    }
  },
  getReverseGeocoding: async (
    params: GetReverseGeocodingParams,
  ): Promise<PickedAxiosResponse<GetReverseGeocodingResponse | null> | undefined> => {
    try {
      const response = await geocodingAxiosInstance.get<GetReverseGeocodingRawResponse>(
        `/v4beta/geocode/location/${params.lat},${params.lon}`,
      );

      if (!response.data?.results) {
        const nullDataResponse: PickedAxiosResponse<null> = { ...response, data: null };
        return nullDataResponse;
      }

      /**
       * results에서 행정구역 필터링한 뒤 가장 작은 행정구역(첫번째 요소) 반환
       * @jinhok96 25.05.15
       */
      const filteredResponseDataResult = response.data?.results
        .filter(item => {
          if (item.types.includes('sublocality_level_4')) return false;
          if (!item.types.includes('sublocality')) return false;
          return true;
        })
        .slice(0, 1);

      const updatedResponse: PickedAxiosResponse<GetReverseGeocodingResponse | null> = {
        ...response,
        data: filterGeocodingResult(filteredResponseDataResult[0]),
      };

      return updatedResponse;
    } catch (error) {
      throwError(error);
    }
  },
  postCurrentAirQuality: async (
    payload: PostCurrentAirQualityPayload,
  ): Promise<PickedAxiosResponse<PostCurrentAirQualityResponse | null> | undefined> => {
    try {
      const fullPayload: PostCurrentAirQualityFullPayload = {
        location: { latitude: payload.lat, longitude: payload.lon },
        ...getAirQualityCommonPayload(),
      };

      const response = await airQualityAxiosInstance.post<PostCurrentAirQualityRawResponse>(
        `/v1/currentConditions:lookup?key=${GOOGLE_MAPS_API_KEY}`,
        fullPayload,
      );

      if (!response.data?.pollutants.length) {
        const nullDataResponse: PickedAxiosResponse<null> = { ...response, data: null };
        return nullDataResponse;
      }

      const filteredResponseData: PostCurrentAirQualityResponse = {
        dateTime: response.data?.dateTime,
        pm25: response.data?.pollutants.find(item => item.code === 'pm25')?.concentration.value,
        pm10: response.data?.pollutants.find(item => item.code === 'pm10')?.concentration.value,
      };

      const updatedResponse: PickedAxiosResponse<PostCurrentAirQualityResponse | null> = {
        ...response,
        data: filteredResponseData,
      };

      return updatedResponse;
    } catch (error) {
      throwAirQualityError(error);
    }
  },
  postAirQualityHourlyForecasts: async (
    payload: PostAirQualityHourlyForecastsPayload,
  ): Promise<PickedAxiosResponse<PostAirQualityHourlyForecastsResponse | null> | undefined> => {
    try {
      // 48시간 예보
      const startTime = getLocalISOString(1);
      const endTime = getLocalISOString(48);

      const fullPayload: PostAirQualityHourlyForecastsFullPayload = {
        location: { latitude: payload.lat, longitude: payload.lon },
        period: { startTime, endTime },
        ...getAirQualityCommonPayload(),
      };

      // 전체 데이터
      const allResponseData: PostAirQualityHourlyForecastsResponse = [];
      let nextPageToken: string | undefined;
      let latestResponseWithoutData: PickedAxiosResponse<null> | undefined;

      // 모든 페이지 데이터 가져오기
      do {
        const nextPayload = nextPageToken ? { ...fullPayload, pageToken: nextPageToken } : fullPayload;
        // 이 로직에서 반복문 내 await 사용이 필수이므로 eslint 룰 비활성화
        // eslint-disable-next-line no-await-in-loop
        const response = await airQualityAxiosInstance.post<PostAirQualityHourlyForecastsRawResponse>(
          `/v1/forecast:lookup?key=${GOOGLE_MAPS_API_KEY}`,
          nextPayload,
        );

        if (!response.data?.hourlyForecasts.length) {
          const nullDataResponse: PickedAxiosResponse<null> = { ...response, data: null };
          return nullDataResponse;
        }

        const filteredResponseData: PostAirQualityHourlyForecastsResponse = response.data.hourlyForecasts.map(
          forecast => ({
            dateTime: forecast.dateTime,
            pm25: forecast.pollutants.find(item => item.code === 'pm25')?.concentration.value,
            pm10: forecast.pollutants.find(item => item.code === 'pm10')?.concentration.value,
          }),
        );

        // 전체 데이터에 현재 페이지 데이터 추가
        allResponseData.push(...filteredResponseData);
        // headers, status, statusText를 최신 response로 업데이트
        latestResponseWithoutData = { ...response, data: null };
        // nextPageToken 업데이트
        nextPageToken = response.data?.nextPageToken || undefined;
      } while (nextPageToken);

      const updatedResponse: PickedAxiosResponse<PostAirQualityHourlyForecastsResponse | null> = {
        ...latestResponseWithoutData,
        data: allResponseData,
      };

      return updatedResponse;
    } catch (error) {
      throwAirQualityError(error);
    }
  },
};

export {
  placesAxiosInstance as googleMapsPlacesServiceAxiosInstance,
  geocodingAxiosInstance as googleMapsGeocodingServiceAxiosInstance,
  airQualityAxiosInstance as googleMapsAirQualityServiceAxiosInstance,
};
