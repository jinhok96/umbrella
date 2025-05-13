/**
 * @jest-environment jsdom
 */
import { act } from 'react';

import { renderHook } from '@testing-library/react';

import { locationStore, useLocationStore } from '@store/locationStore/useLocationStore';
import {
  LOCATION_STORE_ERROR_MESSAGE,
  LOCATION_STORE_STATE_FAVORITE_LOCATION_LIST_MAX_LEN,
  LOCATION_STORE_STATE_RECENT_LOCATION_LIST_MAX_LEN,
} from '@store/locationStore/useLocationStore.const';
import { settingStore } from '@store/settingStore/useSettingStore';

import type { Location, LocationStoreState } from '@store/locationStore/useLocationStore.type';

const LOCATION_MOCK_DATA: Record<number, Location> = {
  0: {
    name: Math.random().toString(),
    address: {
      en: Math.random().toString(),
      kr: Math.random().toString(),
    },
    lat: Math.random(),
    lon: Math.random(),
  },
  1: {
    name: Math.random().toString(),
    address: {
      en: Math.random().toString(),
      kr: Math.random().toString(),
    },
    lat: Math.random(),
    lon: Math.random(),
  },
};

const INIT_STATE: LocationStoreState = {
  currentLocation: null,
  recentLocationList: [],
  favoriteLocationList: [],
};

const NEW_STATE: LocationStoreState = {
  currentLocation: LOCATION_MOCK_DATA[0],
  recentLocationList: [LOCATION_MOCK_DATA[0]],
  favoriteLocationList: [LOCATION_MOCK_DATA[0]],
};

/**
 * useLocationStore 테스트
 * @jinhok96 25.05.13
 */
describe('useLocationStore', () => {
  beforeEach(() => {
    // 각 테스트 전에 스토어를 초기 상태로 리셋
    locationStore.setState(INIT_STATE);
  });

  const ErrorMessage = LOCATION_STORE_ERROR_MESSAGE;

  test('초기 상태 확인', () => {
    const { result } = renderHook(() => useLocationStore());
    expect(result.current).toMatchObject(INIT_STATE);
  });

  test('훅을 사용하지 않고 직접 스토어 접근 테스트', () => {
    const state = locationStore.getState();
    expect(state).toMatchObject(INIT_STATE);

    const newState = NEW_STATE.currentLocation;

    act(() => {
      if (!newState) throw new Error('newState is null');
      locationStore.getState().setCurrentLocation(newState);
    });

    expect(locationStore.getState().currentLocation).toBe(newState);
  });

  test('액션: setCurrentLocation', () => {
    const { result } = renderHook(() => useLocationStore());
    expect(result.current).toMatchObject(INIT_STATE);

    const newState = NEW_STATE.currentLocation;
    const newResult: LocationStoreState = { ...INIT_STATE, currentLocation: newState };

    act(() => {
      if (!newState) throw new Error('newState is null');
      result.current.setCurrentLocation(newState);
    });

    expect(result.current).toMatchObject(newResult);
  });

  test('액션: addRecentLocation', () => {
    const { result } = renderHook(() => useLocationStore());
    expect(result.current).toMatchObject(INIT_STATE);

    // 빈 배열에 요소 추가 테스트
    const firstLocation = LOCATION_MOCK_DATA[0];
    act(() => {
      result.current.addRecentLocation(firstLocation);
    });
    expect(result.current).toMatchObject({ ...INIT_STATE, recentLocationList: [firstLocation] });

    // 기존 배열에 새로운 요소 추가 테스트
    const secondLocation = LOCATION_MOCK_DATA[1];
    act(() => {
      result.current.addRecentLocation(secondLocation);
    });
    expect(result.current).toMatchObject({ ...INIT_STATE, recentLocationList: [secondLocation, firstLocation] });

    // 기존 배열에 중복 요소 추가 테스트
    act(() => {
      result.current.addRecentLocation(firstLocation);
    });
    expect(result.current).toMatchObject({ ...INIT_STATE, recentLocationList: [firstLocation, secondLocation] });

    // 꽉 찬 배열에 요소 추가 테스트
    const fullLen = LOCATION_STORE_STATE_RECENT_LOCATION_LIST_MAX_LEN;
    const fullRecentLocationList = Array.from({ length: fullLen }, () => firstLocation);
    act(() => {
      locationStore.setState({ ...INIT_STATE, recentLocationList: fullRecentLocationList });
    });
    expect(result.current.recentLocationList.length).toBe(fullLen);
    expect(result.current).toMatchObject({ ...INIT_STATE, recentLocationList: fullRecentLocationList });

    act(() => {
      result.current.addRecentLocation(secondLocation);
    });
    const updatedFullRecentLocationList = [secondLocation, ...fullRecentLocationList].slice(0, fullLen);
    expect(result.current.recentLocationList.length).toBe(fullLen);
    expect(result.current).toMatchObject({ ...INIT_STATE, recentLocationList: updatedFullRecentLocationList });
  });

  test('액션: removeRecentLocation', () => {
    const { result } = renderHook(() => useLocationStore());
    expect(result.current).toMatchObject(INIT_STATE);

    const recentLocationList = [LOCATION_MOCK_DATA[0], LOCATION_MOCK_DATA[1]];
    act(() => {
      locationStore.setState({ ...INIT_STATE, recentLocationList });
    });
    expect(result.current.recentLocationList).toMatchObject(recentLocationList);

    const removeIdx = 0;
    const updatedRecentLocationList = recentLocationList.filter((_, i) => i !== removeIdx);
    act(() => {
      result.current.removeRecentLocation(removeIdx);
    });
    expect(result.current.recentLocationList).toMatchObject(updatedRecentLocationList);
  });

  test('액션: removeAllRecentLocation', () => {
    const { result } = renderHook(() => useLocationStore());
    expect(result.current).toMatchObject(INIT_STATE);

    const recentLocationList = [LOCATION_MOCK_DATA[0], LOCATION_MOCK_DATA[1]];
    act(() => {
      locationStore.setState({ ...INIT_STATE, recentLocationList });
    });
    expect(result.current.recentLocationList).toMatchObject(recentLocationList);

    act(() => {
      result.current.removeAllRecentLocation();
    });
    expect(result.current.recentLocationList).toEqual([]);
  });

  test('액션: addFavoriteLocation', () => {
    const { lang } = settingStore.getState();
    const { result } = renderHook(() => useLocationStore());
    expect(result.current).toMatchObject(INIT_STATE);

    // 빈 배열에 요소 추가 테스트
    const firstLocation = LOCATION_MOCK_DATA[0];
    act(() => {
      result.current.addFavoriteLocation(firstLocation);
    });
    expect(result.current).toMatchObject({ ...INIT_STATE, favoriteLocationList: [firstLocation] });

    // 기존 배열에 새로운 요소 추가 테스트
    const secondLocation = LOCATION_MOCK_DATA[1];
    act(() => {
      result.current.addFavoriteLocation(secondLocation);
    });
    expect(result.current).toMatchObject({ ...INIT_STATE, favoriteLocationList: [secondLocation, firstLocation] });

    // 기존 배열에 중복 이름 요소 추가 테스트
    const sameNameLocation: Location = {
      name: result.current.favoriteLocationList[0].name, // 중복
      address: {
        en: Math.random().toString(),
        kr: Math.random().toString(),
      },
      lat: Math.random(),
      lon: Math.random(),
    };
    expect(() => result.current.addFavoriteLocation(sameNameLocation)).toThrowError(
      new Error(ErrorMessage.favoriteLocationNameDuplication[lang]),
    );

    // 기존 배열에 중복 좌표 요소 추가 테스트
    const sameCoordLocation: Location = {
      name: Math.random().toString(),
      address: {
        en: Math.random().toString(),
        kr: Math.random().toString(),
      },
      lat: result.current.favoriteLocationList[0].lat, // 중복
      lon: result.current.favoriteLocationList[0].lon, // 중복
    };
    expect(() => result.current.addFavoriteLocation(sameCoordLocation)).toThrowError(
      new Error(ErrorMessage.favoriteLocationCoordDuplication[lang]),
    );

    // 꽉 찬 배열에 요소 추가 테스트
    const fullLen = LOCATION_STORE_STATE_FAVORITE_LOCATION_LIST_MAX_LEN;
    const fullFavoriteLocationList = Array.from({ length: fullLen }, () => firstLocation);
    act(() => {
      locationStore.setState({ ...INIT_STATE, favoriteLocationList: fullFavoriteLocationList });
    });
    expect(result.current.favoriteLocationList.length).toBe(fullLen);
    expect(result.current).toMatchObject({ ...INIT_STATE, favoriteLocationList: fullFavoriteLocationList });

    expect(() => result.current.addFavoriteLocation(secondLocation)).toThrowError(
      new Error(ErrorMessage.favoriteLocationListFull[lang]),
    );
  });
});
