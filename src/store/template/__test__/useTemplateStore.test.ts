/**
 * @jest-environment jsdom
 */
import { act } from 'react';

import { renderHook } from '@testing-library/react';

import { templateStore, useTemplateStore } from '@store/template/useTemplateStore';

import type { TemplateStoreState } from '@store/template/useTemplateStore.type';

const INIT_STATE: TemplateStoreState = {
  first: 'first',
  second: 'second',
  third: 'third',
};

const NEW_STATE: TemplateStoreState = {
  first: 'new first',
  second: 'new second',
  third: 'new third',
};

/**
 * useTemplateStore 테스트
 * @jinhok96 25.05.12
 */
describe('useTemplateStore', () => {
  beforeEach(() => {
    // 각 테스트 전에 스토어를 초기 상태로 리셋
    templateStore.setState(INIT_STATE);
  });

  test('초기 상태 확인', () => {
    const { result } = renderHook(() => useTemplateStore());
    expect(result.current).toMatchObject(INIT_STATE);
  });

  test('훅을 사용하지 않고 직접 스토어 접근 테스트', () => {
    const state = templateStore.getState();
    expect(state).toMatchObject(INIT_STATE);

    const newState = NEW_STATE.first;

    act(() => {
      templateStore.getState().setFirst(newState);
    });

    expect(templateStore.getState().first).toBe(newState);
  });

  test('액션: setFirst', () => {
    const { result } = renderHook(() => useTemplateStore());
    expect(result.current).toMatchObject(INIT_STATE);

    const newState = NEW_STATE.first;
    const newResult: TemplateStoreState = { ...INIT_STATE, first: newState };

    act(() => {
      result.current.setFirst(newState);
    });

    expect(result.current).toMatchObject(newResult);
  });

  test('액션: setSecond', () => {
    const { result } = renderHook(() => useTemplateStore());
    expect(result.current).toMatchObject(INIT_STATE);

    const newState = NEW_STATE.second;
    const newResult: TemplateStoreState = { ...INIT_STATE, second: newState };

    act(() => {
      result.current.setSecond(newState);
    });

    expect(result.current).toMatchObject(newResult);
  });

  test('액션: setThird', () => {
    const { result } = renderHook(() => useTemplateStore());
    expect(result.current).toMatchObject(INIT_STATE);

    const newState = NEW_STATE.third;
    const newResult: TemplateStoreState = { ...INIT_STATE, third: newState };

    act(() => {
      result.current.setThird(newState);
    });

    expect(result.current).toMatchObject(newResult);
  });
});
