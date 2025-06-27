import type { LocalizedTextMap } from '@libs/utils/localize/localize.type';
import type { LocationStoreState } from '@store/locationStore/useLocationStore.type';

export const INIT_LOCATION_STORE_STATE: LocationStoreState = {
  currentLocation: {
    id: 'ChIJF1KqL7SifDURLPj1o6Lw_jM',
    name: '서울시청',
    address: '대한민국 서울특별시',
    lat: 37.566472,
    lon: 126.977973,
  },
  recentLocationList: [
    {
      id: 'ChIJF1KqL7SifDURLPj1o6Lw_jM',
      name: '서울시청',
      address: '대한민국 서울특별시',
      lat: 37.566472,
      lon: 126.977973,
    },
    {
      id: 'ChIJF1KqL7SifDURLPj1o6Lw_jM_r1',
      name: '최근 1',
      address: '대한민국 서울특별시',
      lat: 37.566472,
      lon: 126.977973,
    },
    {
      id: 'ChIJF1KqL7SifDURLPj1o6Lw_jM_r2',
      name: '최근 2',
      address: '대한민국 서울특별시',
      lat: 37.566472,
      lon: 126.977973,
    },
    {
      id: 'ChIJF1KqL7SifDURLPj1o6Lw_jM_r3',
      name: '최근 3',
      address: '대한민국 서울특별시',
      lat: 37.566472,
      lon: 126.977973,
    },
  ],
  favoriteLocationList: [
    {
      id: 'ChIJF1KqL7SifDURLPj1o6Lw_jM',
      name: '서울시청',
      address: '대한민국 서울특별시',
      lat: 37.566472,
      lon: 126.977973,
    },
    {
      id: 'ChIJF1KqL7SifDURLPj1o6Lw_jM_f1',
      name: '즐겨찾기 1',
      address: '대한민국 서울특별시',
      lat: 37.566472,
      lon: 126.977973,
    },
    {
      id: 'ChIJF1KqL7SifDURLPj1o6Lw_jM_f2',
      name: '즐겨찾기 2',
      address: '대한민국 서울특별시',
      lat: 37.566472,
      lon: 126.977973,
    },
    {
      id: 'ChIJF1KqL7SifDURLPj1o6Lw_jM_f3',
      name: '즐겨찾기 3',
      address: '대한민국 서울특별시',
      lat: 37.566472,
      lon: 126.977973,
    },
  ],
};

/**
 * recentLocationList, favoriteLocationList 최대 길이
 * @jinhok96 25.05.13
 */
export const LOCATION_STORE_STATE_RECENT_LOCATION_LIST_MAX_LEN = 20;
export const LOCATION_STORE_STATE_FAVORITE_LOCATION_LIST_MAX_LEN = 20;

type LocationStoreErrorStatus = LocalizedTextMap<
  | 'favoriteLocationListFull'
  | 'favoriteLocationNameEmpty'
  | 'favoriteLocationNameDuplication'
  | 'favoriteLocationIdDuplication'
>;

/**
 * LocationStore 에러 메세지
 * @jinhok96 25.06.24
 */
export const LOCATION_STORE_ERROR_MESSAGE: LocationStoreErrorStatus = {
  // favoriteLocationList
  favoriteLocationListFull: {
    en: 'Favorite location list is full.',
    ko: '저장한 위치 목록이 꽉 찼습니다.',
  },
  favoriteLocationNameEmpty: {
    en: 'Favorite location name is empty.',
    ko: '저장한 위치 이름이 비어있습니다.',
  },
  favoriteLocationNameDuplication: {
    en: 'The name already exists in favorite location list.',
    ko: '저장한 위치 목록에 이미 있는 이름입니다.',
  },
  favoriteLocationIdDuplication: {
    en: 'The location already exists in favorite location list.',
    ko: '저장한 위치 목록에 이미 있습니다.',
  },
};
