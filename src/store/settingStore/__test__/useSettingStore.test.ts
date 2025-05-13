/**
 * @jest-environment jsdom
 */
import { act } from 'react';

import { renderHook } from '@testing-library/react';

import { settingStore, useSettingStore } from '@store/settingStore/useSettingStore';

import type { SettingStoreState } from '@store/settingStore/useSettingStore.type';

const INIT_STATE_MOCK: SettingStoreState = {
  theme: 'light',
  units: 'metric',
  lang: 'kr',
  defaultLocationMode: 'current',
  locationPermission: false,
  fontSizeAccessibility: 'normal',
  highContrastAccessibility: false,
};

const NEW_STATE_MOCK: SettingStoreState = {
  theme: 'dark',
  units: 'imperial',
  lang: 'en',
  defaultLocationMode: 'recent',
  locationPermission: true,
  fontSizeAccessibility: 'large',
  highContrastAccessibility: true,
};

/**
 * useSettingStore 테스트
 * @jinhok96 25.05.13
 */
describe('useSettingStore', () => {
  beforeEach(() => {
    // 각 테스트 전에 스토어를 초기 상태로 리셋
    settingStore.setState(INIT_STATE_MOCK);
  });

  test('초기 상태 확인', () => {
    const { result } = renderHook(() => useSettingStore());
    expect(result.current).toMatchObject(INIT_STATE_MOCK);
  });

  test('훅을 사용하지 않고 직접 스토어 접근 테스트', () => {
    const state = settingStore.getState();
    expect(state).toMatchObject(INIT_STATE_MOCK);

    const newState = NEW_STATE_MOCK.theme;

    act(() => {
      settingStore.getState().setTheme(newState);
    });

    expect(settingStore.getState().theme).toBe(newState);
  });

  test('액션: setTheme', () => {
    const { result } = renderHook(() => useSettingStore());
    expect(result.current).toMatchObject(INIT_STATE_MOCK);

    const newState = NEW_STATE_MOCK.theme;
    const newResult: SettingStoreState = { ...INIT_STATE_MOCK, theme: newState };

    act(() => {
      result.current.setTheme(newState);
    });

    expect(result.current).toMatchObject(newResult);
  });

  test('액션: setUnits', () => {
    const { result } = renderHook(() => useSettingStore());
    expect(result.current).toMatchObject(INIT_STATE_MOCK);

    const newState = NEW_STATE_MOCK.units;
    const newResult: SettingStoreState = { ...INIT_STATE_MOCK, units: newState };

    act(() => {
      result.current.setUnits(newState);
    });

    expect(result.current).toMatchObject(newResult);
  });

  test('액션: setLang', () => {
    const { result } = renderHook(() => useSettingStore());
    expect(result.current).toMatchObject(INIT_STATE_MOCK);

    const newState = NEW_STATE_MOCK.lang;
    const newResult: SettingStoreState = { ...INIT_STATE_MOCK, lang: newState };

    act(() => {
      result.current.setLang(newState);
    });

    expect(result.current).toMatchObject(newResult);
  });

  test('액션: setDefaultLocationMode', () => {
    const { result } = renderHook(() => useSettingStore());
    expect(result.current).toMatchObject(INIT_STATE_MOCK);

    const newState = NEW_STATE_MOCK.defaultLocationMode;
    const newResult: SettingStoreState = { ...INIT_STATE_MOCK, defaultLocationMode: newState };

    act(() => {
      result.current.setDefaultLocationMode(newState);
    });

    expect(result.current).toMatchObject(newResult);
  });

  test('액션: setLocationPermission', () => {
    const { result } = renderHook(() => useSettingStore());
    expect(result.current).toMatchObject(INIT_STATE_MOCK);

    const newState = NEW_STATE_MOCK.locationPermission;
    const newResult: SettingStoreState = { ...INIT_STATE_MOCK, locationPermission: newState };

    act(() => {
      result.current.setLocationPermission(newState);
    });

    expect(result.current).toMatchObject(newResult);
  });

  test('액션: setFontSizeAccessibility', () => {
    const { result } = renderHook(() => useSettingStore());
    expect(result.current).toMatchObject(INIT_STATE_MOCK);

    const newState = NEW_STATE_MOCK.fontSizeAccessibility;
    const newResult: SettingStoreState = { ...INIT_STATE_MOCK, fontSizeAccessibility: newState };

    act(() => {
      result.current.setFontSizeAccessibility(newState);
    });

    expect(result.current).toMatchObject(newResult);
  });

  test('액션: setHighContrastAccessibility', () => {
    const { result } = renderHook(() => useSettingStore());
    expect(result.current).toMatchObject(INIT_STATE_MOCK);

    const newState = NEW_STATE_MOCK.highContrastAccessibility;
    const newResult: SettingStoreState = { ...INIT_STATE_MOCK, highContrastAccessibility: newState };

    act(() => {
      result.current.setHighContrastAccessibility(newState);
    });

    expect(result.current).toMatchObject(newResult);
  });
});
