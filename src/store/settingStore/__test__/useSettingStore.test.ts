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
};

const NEW_STATE: SettingStoreState = {
  theme: 'dark',
  units: 'imperial',
  lang: 'en',
};

/**
 * useSettingStore 테스트
 * @jinhok96 25.05.12
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

  test('액션: setUnit', () => {
    const { result } = renderHook(() => useSettingStore());
    expect(result.current).toMatchObject(INIT_STATE);

    const newState = NEW_STATE.units;
    const newResult: SettingStoreState = { ...INIT_STATE, units: newState };

    act(() => {
      result.current.setUnit(newState);
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

  test('훅을 사용하지 않고 직접 스토어 접근 테스트', () => {
    const state = settingStore.getState();
    expect(state).toMatchObject(INIT_STATE);

    const newState = NEW_STATE.theme;

    act(() => {
      settingStore.getState().setTheme(newState);
    });

    expect(settingStore.getState().theme).toBe(newState);
  });
});
