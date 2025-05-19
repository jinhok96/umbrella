import { act } from 'react';

import { renderHook } from '@testing-library/react';

import { settingStore, useSettingStore } from '@store/settingStore/useSettingStore';
import { INIT_SETTING_STORE_STATE } from '@store/settingStore/useSettingStore.const';

import type { SettingStoreState } from '@store/settingStore/useSettingStore.type';

type StoreState = SettingStoreState;

const INIT_STATE_MOCK: StoreState = {
  theme: 'light',
  units: 'metric',
  lang: 'ko',
  defaultLocationMode: 'current',
  locationPermission: false,
  fontSize: 'normal',
};

const NEW_STATE_MOCK: StoreState = {
  theme: 'dark',
  units: 'imperial',
  lang: 'en',
  defaultLocationMode: 'recent',
  locationPermission: true,
  fontSize: 'large',
};

/**
 * useSettingStore 테스트
 * @jinhok96 25.05.18
 */
describe('useSettingStore', () => {
  const store = settingStore;
  const useStore = useSettingStore;

  beforeEach(() => {
    // 각 테스트 전에 스토어를 초기 상태로 리셋
    store.setState(INIT_STATE_MOCK);
  });

  afterAll(() => {
    // 모든 테스트 완료 후 스토어를 초기 상태로 리셋
    store.setState(INIT_SETTING_STORE_STATE);
  });

  test('초기 상태 확인', () => {
    const { result } = renderHook(() => useStore());
    expect(result.current).toMatchObject(INIT_STATE_MOCK);
  });

  test('훅을 사용하지 않고 직접 스토어 접근 테스트', () => {
    expect(store.getState()).toMatchObject(INIT_STATE_MOCK);

    const newState = NEW_STATE_MOCK.theme;

    act(() => {
      store.getState().setTheme(newState);
    });

    expect(store.getState().theme).toBe(newState);
  });

  test('액션: setTheme', () => {
    const { result } = renderHook(() => useStore());
    expect(result.current).toMatchObject(INIT_STATE_MOCK);

    const newState = NEW_STATE_MOCK.theme;
    const newResult: StoreState = { ...INIT_STATE_MOCK, theme: newState };

    act(() => {
      result.current.setTheme(newState);
    });

    expect(result.current).toMatchObject(newResult);
  });

  test('액션: setUnits', () => {
    const { result } = renderHook(() => useStore());
    expect(result.current).toMatchObject(INIT_STATE_MOCK);

    const newState = NEW_STATE_MOCK.units;
    const newResult: StoreState = { ...INIT_STATE_MOCK, units: newState };

    act(() => {
      result.current.setUnits(newState);
    });

    expect(result.current).toMatchObject(newResult);
  });

  test('액션: setLang', () => {
    const { result } = renderHook(() => useStore());
    expect(result.current).toMatchObject(INIT_STATE_MOCK);

    const newState = NEW_STATE_MOCK.lang;
    const newResult: StoreState = { ...INIT_STATE_MOCK, lang: newState };

    act(() => {
      result.current.setLang(newState);
    });

    expect(result.current).toMatchObject(newResult);
  });

  test('액션: setDefaultLocationMode', () => {
    const { result } = renderHook(() => useStore());
    expect(result.current).toMatchObject(INIT_STATE_MOCK);

    const newState = NEW_STATE_MOCK.defaultLocationMode;
    const newResult: StoreState = { ...INIT_STATE_MOCK, defaultLocationMode: newState };

    act(() => {
      result.current.setDefaultLocationMode(newState);
    });

    expect(result.current).toMatchObject(newResult);
  });

  test('액션: setLocationPermission', () => {
    const { result } = renderHook(() => useStore());
    expect(result.current).toMatchObject(INIT_STATE_MOCK);

    const newState = NEW_STATE_MOCK.locationPermission;
    const newResult: StoreState = { ...INIT_STATE_MOCK, locationPermission: newState };

    act(() => {
      result.current.setLocationPermission(newState);
    });

    expect(result.current).toMatchObject(newResult);
  });

  test('액션: setFontSize', () => {
    const { result } = renderHook(() => useStore());
    expect(result.current).toMatchObject(INIT_STATE_MOCK);

    const newState = NEW_STATE_MOCK.fontSize;
    const newResult: StoreState = { ...INIT_STATE_MOCK, fontSize: newState };

    act(() => {
      result.current.setFontSize(newState);
    });

    expect(result.current).toMatchObject(newResult);
  });
});
