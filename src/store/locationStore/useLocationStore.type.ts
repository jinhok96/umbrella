import type { LocalizedText } from '@libs/utils/localize/localize.type';

export type Location = {
  id: string; // 위치 id (Google Places API에 등록된 id)
  name: string; // 위치 이름
  address: LocalizedText; // 행정구역 주소 '~동/군/구, ~시, 국가' (ex) '광진구, 서울특별시, 대한민국')
  lat: number; // 위도
  lon: number; // 경도
};

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
