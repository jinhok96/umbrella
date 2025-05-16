import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

import { WEATHER_GC_TIME, WEATHER_STALE_TIME } from '@libs/constants/time.const';
import { googleMapsService } from '@services/googleMaps/axios';

import type {
  UseGetAirQualityHourlyForecastsParams,
  UseGetAutocompleteRegionParams,
  UseGetCurrentAirQualityParams,
  UseGetPlaceGeocodingParams,
  UseGetReverseGeocodingParams,
} from '@services/googleMaps/query.type';

/**
 * 행정 구역 검색 자동완성
 * @payload `{ input }`
 * @returns `{ placeId, text, types }`
 * @jinhok96 25.05.16
 */
export function usePostAutocompleteRegions() {
  return useMutation({
    mutationKey: ['usePostAutocompleteRegions'],
    mutationFn: (payload: UseGetAutocompleteRegionParams) => {
      // @ts-expect-error 나중에 없앨 훅
      return googleMapsService.postAutocompleteRegions(payload);
    },
    throwOnError: true,
  });
}

export function useGetAutocompleteRegions(params: UseGetAutocompleteRegionParams) {
  return useSuspenseQuery({
    queryKey: ['useGetAutocompleteRegions', JSON.stringify(params)],
    queryFn: () => {
      const { input } = params;
      if (!input) return null;
      return googleMapsService.postAutocompleteRegions({ input });
    },
    staleTime: Infinity,
    gcTime: Infinity,
  });
}

/**
 * 장소 id로 행정 구역 위치 찾기
 * @param placeId string; 장소 id
 * @returns `{ placeId, formattedAddress, location, types }`
 * @jinhok96 25.05.16
 */
export function useGetPlaceGeocoding(params: UseGetPlaceGeocodingParams) {
  return useSuspenseQuery({
    queryKey: ['useGetPlaceGeocoding', JSON.stringify(params)],
    queryFn: () => {
      const { placeId } = params;
      if (!placeId) return null;
      return googleMapsService.getPlaceGeocoding({ placeId });
    },
    staleTime: Infinity,
    gcTime: Infinity,
  });
}

/**
 * 좌표로 가장 가까운 행정 구역 찾기
 * @param lat number; 위도
 * @param lon number; 경도
 * @returns `{ placeId, formattedAddress, location, types }`
 * @jinhok96 25.05.16
 */
export function useGetReverseGeocoding(params: UseGetReverseGeocodingParams) {
  return useSuspenseQuery({
    queryKey: ['useGetReverseGeocoding', JSON.stringify(params)],
    queryFn: () => {
      const { lat, lon } = params;
      if (!lat && lat !== 0) return null;
      if (!lon && lon !== 0) return null;
      return googleMapsService.getReverseGeocoding({ lat, lon });
    },
    staleTime: Infinity,
    gcTime: Infinity,
  });
}

/**
 * 현재 미세먼지 정보
 * @param lat number; 위도
 * @param lon number; 경도
 * @returns `{ dateTime, pm25, pm10 }`
 * @jinhok96 25.05.16
 */
export function usePostCurrentAirQuality() {
  return useMutation({
    mutationKey: ['usePostCurrentAirQuality'],
    mutationFn: (payload: UseGetCurrentAirQualityParams) => {
      // @ts-expect-error 나중에 없앨 훅
      return googleMapsService.postCurrentAirQuality(payload);
    },
    throwOnError: true,
  });
}

export function useGetCurrentAirQuality(params: UseGetCurrentAirQualityParams) {
  return useSuspenseQuery({
    queryKey: ['useGetCurrentAirQuality', JSON.stringify(params)],
    queryFn: () => {
      const { lat, lon } = params;
      if (!lat && lat !== 0) return null;
      if (!lon && lon !== 0) return null;
      return googleMapsService.postCurrentAirQuality({ lat, lon });
    },
    staleTime: WEATHER_STALE_TIME,
    gcTime: WEATHER_GC_TIME,
  });
}

/**
 * 미세먼지 시간별 예보
 * @param lat number; 위도
 * @param lon number; 경도
 * @returns `{ dateTime, pm25, pm10 }`
 * @jinhok96 25.05.16
 */
export function useGetAirQualityHourlyForecasts(params: UseGetAirQualityHourlyForecastsParams) {
  return useSuspenseQuery({
    queryKey: ['useGetAirQualityHourlyForecasts', JSON.stringify(params)],
    queryFn: () => {
      const { lat, lon } = params;
      if (!lat && lat !== 0) return null;
      if (!lon && lon !== 0) return null;
      return googleMapsService.postAirQualityHourlyForecasts({ lat, lon });
    },
    staleTime: WEATHER_STALE_TIME,
    gcTime: WEATHER_GC_TIME,
  });
}
