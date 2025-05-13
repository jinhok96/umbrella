import type { LocalizedText } from '@libs/utils/localize/localize.type';

export type Location = {
  name: string; // 위치 이름
  address: LocalizedText; // 행정구역 주소 '~동/군/구, ~시, 국가' (ex) '광진구, 서울특별시, 대한민국')
  lat: number; // 위도
  lon: number; // 경도
};

/**
 * 위치 스토어 상태
 * @ currentLocation - 현재 위치; Location | null
 * @ recentLocationList - 최근 본 위치 목록; Location[]
 * @ favoriteLocationList - 즐겨찾기 위치 목록; Location[]
 * @jinhok96 25.05.13
 */
export type LocationStoreState = {
  currentLocation: Location | null;
  recentLocationList: Location[];
  favoriteLocationList: Location[];
};

export type LocationStoreActions = {
  // currentLocation
  setCurrentLocation: (location: Location) => void;

  // recentLocationList
  addRecentLocation: (location: Location) => void;
  removeRecentLocation: (index: number) => void;
  removeAllRecentLocation: () => void;

  // favoriteLocationList
  addFavoriteLocation: (location: Location) => void;
  updateFavoriteLocationListOrder: (locationList: Location[]) => void;
  removeFavoriteLocation: (index: number) => void;
  removeAllFavoriteLocation: () => void;
};

export type LocationStore = LocationStoreState & LocationStoreActions;
