import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

import { googleMapsService } from '@services/googleMaps/axios';

import type {
  UseGetPlaceGeocodingParams,
  UseGetReverseGeocodingParams,
  UsePostAutocompleteRegionPayload,
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
    mutationFn: (payload: UsePostAutocompleteRegionPayload) => {
      return googleMapsService.postAutocompleteRegions(payload);
    },
    throwOnError: true,
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
  });
}
