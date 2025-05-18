import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import {
  INIT_LOCATION_STORE_STATE,
  LOCATION_STORE_ERROR_MESSAGE,
  LOCATION_STORE_STATE_RECENT_LOCATION_LIST_MAX_LEN,
} from '@store/locationStore/useLocationStore.const';
import { settingStore } from '@store/settingStore/useSettingStore';

import type { LocationStore, LocationStoreState } from '@store/locationStore/useLocationStore.type';
import type { StateCreator } from 'zustand';

/**
 * 위치 스토어
 * @ setCurrentLocation - 현재 위치 설정
 * @ addRecentLocation - 최근 위치 목록 맨 앞에 새로운 위치 추가
 * @ removeRecentLocation - 최근 위치 목록에서 특정 원소 제거
 * @ removeAllRecentLocation - 최근 위치 목록 전체 제거
 * @ addFavoriteLocation - 즐겨찾기 위치 목록 맨 앞에 새로운 위치 추가
 * @ updateFavoriteLocationListOrder - 즐겨찾기 위치 목록 순서 변경
 * @ removeFavoriteLocation - 즐겨찾기 위치 목록에서 특정 원소 제거
 * @ removeAllFavoriteLocation - 즐겨찾기 위치 목록 전체 제거
 * @jinhok96 25.05.14
 */
const locationStoreCreator: StateCreator<LocationStore, [['zustand/immer', never]]> = set => ({
  ...INIT_LOCATION_STORE_STATE,
  // currentLocation
  setCurrentLocation: currentLocation => set({ currentLocation }),

  // recentLocationList
  addRecentLocation: location =>
    set(state => {
      // 중복 id 제거
      const filteredList = state.recentLocationList.filter(item => item.id !== location.id);

      return {
        ...state,
        recentLocationList: [location, ...filteredList].slice(0, LOCATION_STORE_STATE_RECENT_LOCATION_LIST_MAX_LEN),
      };
    }),
  removeRecentLocation: index =>
    set(state => ({ recentLocationList: state.recentLocationList.filter((_, i) => i !== index) })),
  removeAllRecentLocation: () => set({ recentLocationList: [] }),

  // favoriteLocationList
  addFavoriteLocation: location =>
    set(state => {
      const { lang } = settingStore.getState();

      // 최대 길이 제한
      if (state.favoriteLocationList.length >= LOCATION_STORE_STATE_RECENT_LOCATION_LIST_MAX_LEN) {
        throw new Error(LOCATION_STORE_ERROR_MESSAGE.favoriteLocationListFull[lang]);
      }
      // 중복 이름 제한
      if (state.favoriteLocationList.some(item => item.name === location.name)) {
        throw new Error(LOCATION_STORE_ERROR_MESSAGE.favoriteLocationNameDuplication[lang]);
      }
      // 중복 id 제한
      if (state.favoriteLocationList.some(item => item.id === location.id)) {
        throw new Error(LOCATION_STORE_ERROR_MESSAGE.favoriteLocationIdDuplication[lang]);
      }

      state.favoriteLocationList.unshift(location);
    }),
  updateFavoriteLocationListOrder: locationList => set({ favoriteLocationList: locationList }),
  removeFavoriteLocation: index =>
    set(state => ({ favoriteLocationList: state.favoriteLocationList.filter((_, i) => i !== index) })),
  removeAllFavoriteLocation: () => set({ favoriteLocationList: [] }),
});

export const useLocationStore = create<LocationStore>()(
  devtools(
    persist<LocationStore, [['zustand/devtools', never]], [['zustand/immer', never]], LocationStoreState>(
      immer(locationStoreCreator),
      {
        name: 'locationStore',
        storage: createJSONStorage(() => AsyncStorage),
        partialize: state => ({
          currentLocation: state.currentLocation,
          recentLocationList: state.recentLocationList,
          favoriteLocationList: state.favoriteLocationList,
        }),
      },
    ),
  ),
);

export const locationStore = useLocationStore;
