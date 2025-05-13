import type { LocalizedTextMap } from '@libs/utils/localize/localize.type';
import type { LocationStoreState } from '@store/locationStore/useLocationStore.type';

export const INIT_LOCATION_STORE_STATE: LocationStoreState = {
  currentLocation: null,
  recentLocationList: [],
  favoriteLocationList: [],
};

/**
 * recentLocationList, favoriteLocationList 최대 길이
 * @jinhok96 25.05.13
 */
export const LOCATION_STORE_STATE_RECENT_LOCATION_LIST_MAX_LEN = 20;
export const LOCATION_STORE_STATE_FAVORITE_LOCATION_LIST_MAX_LEN = 100;

type LocationStoreErrorStatus = LocalizedTextMap<
  'favoriteLocationListFull' | 'favoriteLocationNameDuplication' | 'favoriteLocationCoordDuplication'
>;

/**
 * LocationStore 에러 메세지
 * @jinhok96 25.05.13
 */
export const LOCATION_STORE_ERROR_MESSAGE: LocationStoreErrorStatus = {
  // favoriteLocationList
  favoriteLocationListFull: {
    en: 'Favorite location list is full.',
    kr: '즐겨찾기 위치 목록이 꽉 찼습니다.',
  },
  favoriteLocationNameDuplication: {
    en: 'The name already exists in favorite location list.',
    kr: '즐겨찾기 위치 목록에 이미 있는 이름입니다.',
  },
  favoriteLocationCoordDuplication: {
    en: 'The location already exists in favorite location list.',
    kr: '즐겨찾기 위치 목록에 이미 있는 위치입니다.',
  },
};
