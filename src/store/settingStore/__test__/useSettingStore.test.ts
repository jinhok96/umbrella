/**
 * @jest-environment jsdom
 */
import { act } from 'react';

import { renderHook } from '@testing-library/react';

import { settingStore, useSettingStore } from '@store/settingStore/useSettingStore';

import type { SettingStoreState } from '@store/settingStore/useSettingStore.type';

const INIT_STATE: SettingStoreState = {
  theme: 'light',
  units: 'metric',
  lang: 'kr',
  defaultLocationMode: 'current',
  locationPermission: false,
  fontSizeAccessibility: 'normal',
  highContrastAccessibility: false,
};

const NEW_STATE: SettingStoreState = {
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
    settingStore.setState(INIT_STATE);
  });

  test('초기 상태 확인', () => {
    const { result } = renderHook(() => useSettingStore());
    expect(result.current).toMatchObject(INIT_STATE);
  });

  test('훅을 사용하지 않고 직접 스토어 접근 테스트', () => {
    const state = settingStore.getState();
    expect(state).toMatchObject(INIT_STATE);

    const newState = NEW_STATE.theme;

    act(() => {
      settingStore.getState().setTheme(newState);
    });

    expect(settingStore.getState().theme).toBe(newState);
  });

  test('액션: setTheme', () => {
    const { result } = renderHook(() => useSettingStore());
    expect(result.current).toMatchObject(INIT_STATE);

    const newState = NEW_STATE.theme;
    const newResult: SettingStoreState = { ...INIT_STATE, theme: newState };

    act(() => {
      result.current.setTheme(newState);
    });

    expect(result.current).toMatchObject(newResult);
  });

  test('액션: setUnits', () => {
    const { result } = renderHook(() => useSettingStore());
    expect(result.current).toMatchObject(INIT_STATE);

    const newState = NEW_STATE.units;
    const newResult: SettingStoreState = { ...INIT_STATE, units: newState };

    act(() => {
      result.current.setUnits(newState);
    });

    expect(result.current).toMatchObject(newResult);
  });

  test('액션: setLang', () => {
    const { result } = renderHook(() => useSettingStore());
    expect(result.current).toMatchObject(INIT_STATE);

    const newState = NEW_STATE.lang;
    const newResult: SettingStoreState = { ...INIT_STATE, lang: newState };

    act(() => {
      result.current.setLang(newState);
    });

    expect(result.current).toMatchObject(newResult);
  });

  test('액션: setDefaultLocationMode', () => {
    const { result } = renderHook(() => useSettingStore());
    expect(result.current).toMatchObject(INIT_STATE);

    const newState = NEW_STATE.defaultLocationMode;
    const newResult: SettingStoreState = { ...INIT_STATE, defaultLocationMode: newState };

    act(() => {
      result.current.setDefaultLocationMode(newState);
    });

    expect(result.current).toMatchObject(newResult);
  });

  test('액션: setLocationPermission', () => {
    const { result } = renderHook(() => useSettingStore());
    expect(result.current).toMatchObject(INIT_STATE);

    const newState = NEW_STATE.locationPermission;
    const newResult: SettingStoreState = { ...INIT_STATE, locationPermission: newState };

    act(() => {
      result.current.setLocationPermission(newState);
    });

    expect(result.current).toMatchObject(newResult);
  });

  test('액션: setFontSizeAccessibility', () => {
    const { result } = renderHook(() => useSettingStore());
    expect(result.current).toMatchObject(INIT_STATE);

    const newState = NEW_STATE.fontSizeAccessibility;
    const newResult: SettingStoreState = { ...INIT_STATE, fontSizeAccessibility: newState };

    act(() => {
      result.current.setFontSizeAccessibility(newState);
    });

    expect(result.current).toMatchObject(newResult);
  });

  test('액션: setHighContrastAccessibility', () => {
    const { result } = renderHook(() => useSettingStore());
    expect(result.current).toMatchObject(INIT_STATE);

    const newState = NEW_STATE.highContrastAccessibility;
    const newResult: SettingStoreState = { ...INIT_STATE, highContrastAccessibility: newState };

    act(() => {
      result.current.setHighContrastAccessibility(newState);
    });

    expect(result.current).toMatchObject(newResult);
  });
});
