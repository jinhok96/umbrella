import { useSuspenseQuery } from '@tanstack/react-query';

import { WEATHER_GC_TIME, WEATHER_STALE_TIME } from '@libs/constants/time.const';
import { getLocalISOString } from '@libs/utils/date.util';
import { googleMapsService } from '@services/googleMaps/axios';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type {
  CommonAirQualityPayload,
  CommonAutocompleteRegionsPayload,
  PostAirQualityHourlyForecastsPayload,
  PostCurrentAirQualityPayload,
} from '@services/googleMaps/axios.type';
import type {
  UseGetAirQualityHourlyForecastsParams,
  UseGetAutocompleteRegionParams,
  UseGetCurrentAirQualityParams,
  UseGetPlaceGeocodingParams,
  UseGetReverseGeocodingParams,
} from '@services/googleMaps/query.type';

/**
 * Air Quality 공통 payload
 * @returns `{ extraComputations }`
 */
function getCommonAirQualityPayload(): Pick<CommonAirQualityPayload, 'extraComputations'> {
  return {
    extraComputations: ['POLLUTANT_CONCENTRATION'],
  };
}

/**
 * 행정 구역 검색 자동완성
 * @payload `{ input }`
 * @returns `{ placeId, text, types }`
 * @jinhok96 25.05.20
 */
export function useGetAutocompleteRegions(params: UseGetAutocompleteRegionParams) {
  const lang = useSettingStore(state => state.lang);

  const commonPayload: CommonAutocompleteRegionsPayload = {
    languageCode: lang,
    includedPrimaryTypes: ['locality', 'sublocality', 'geocode'],
  };

  return useSuspenseQuery({
    queryKey: ['useGetAutocompleteRegions', JSON.stringify(params), JSON.stringify(commonPayload)],
    queryFn: () => {
      const { input } = params;
      if (!input) return null;

      const fullPayload = { ...commonPayload, input };
      return googleMapsService.postAutocompleteRegions(fullPayload);
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
 * @returns `{ dateTime, pm25, pm10, o3 }`
 * @jinhok96 25.06.06
 */
export function useGetCurrentAirQuality(params: UseGetCurrentAirQualityParams) {
  const lang = useSettingStore(state => state.lang);

  const commonPayload: Omit<PostCurrentAirQualityPayload, 'location'> = {
    languageCode: lang,
    ...getCommonAirQualityPayload(),
  };

  return useSuspenseQuery({
    queryKey: ['useGetCurrentAirQuality', JSON.stringify(params), JSON.stringify(commonPayload)],
    queryFn: () => {
      const { lat, lon } = params;
      if (!lat && lat !== 0) return null;
      if (!lon && lon !== 0) return null;

      const fullPayload = { ...commonPayload, location: { latitude: lat, longitude: lon } };
      return googleMapsService.postCurrentAirQuality(fullPayload);
    },
    staleTime: WEATHER_STALE_TIME,
    gcTime: WEATHER_GC_TIME,
  });
}

/**
 * 미세먼지 48시간 예보
 * @param lat number; 위도
 * @param lon number; 경도
 * @returns `[{ dateTime, pm25, pm10, o3 }]`
 * @jinhok96 25.06.06
 */
export function useGetAirQualityHourlyForecasts(params: UseGetAirQualityHourlyForecastsParams) {
  const lang = useSettingStore(state => state.lang);

  // 48시간 예보
  const startTime = getLocalISOString({ hourOffset: 1 });
  const endTime = getLocalISOString({ hourOffset: 48 });

  const commonPayload: Omit<PostAirQualityHourlyForecastsPayload, 'location'> = {
    period: { startTime, endTime },
    languageCode: lang,
    ...getCommonAirQualityPayload(),
  };

  return useSuspenseQuery({
    queryKey: ['useGetAirQualityHourlyForecasts', JSON.stringify(params), JSON.stringify(commonPayload)],
    queryFn: () => {
      const { lat, lon } = params;
      if (!lat && lat !== 0) return null;
      if (!lon && lon !== 0) return null;

      const fullPayload = { ...commonPayload, location: { latitude: lat, longitude: lon } };
      return googleMapsService.postAirQualityHourlyForecasts(fullPayload);
    },
    staleTime: WEATHER_STALE_TIME,
    gcTime: WEATHER_GC_TIME,
  });
}
