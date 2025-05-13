/**
 * @jest-environment jsdom
 */
import { act } from 'react';

import { renderHook } from '@testing-library/react';

import { templateStore, useTemplateStore } from '@store/template/useTemplateStore';

import type { TemplateStoreState } from '@store/template/useTemplateStore.type';

const INIT_STATE_MOCK: TemplateStoreState = {
  first: 'first',
  second: 'second',
  third: 'third',
};

const NEW_STATE_MOCK: TemplateStoreState = {
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
    templateStore.setState(INIT_STATE_MOCK);
  });

  test('초기 상태 확인', () => {
    const { result } = renderHook(() => useTemplateStore());
    expect(result.current).toMatchObject(INIT_STATE_MOCK);
  });

  test('훅을 사용하지 않고 직접 스토어 접근 테스트', () => {
    const state = templateStore.getState();
    expect(state).toMatchObject(INIT_STATE_MOCK);

    const newState = NEW_STATE_MOCK.first;

    act(() => {
      templateStore.getState().setFirst(newState);
    });

    expect(templateStore.getState().first).toBe(newState);
  });

  test('액션: setFirst', () => {
    const { result } = renderHook(() => useTemplateStore());
    expect(result.current).toMatchObject(INIT_STATE_MOCK);

    const newState = NEW_STATE_MOCK.first;
    const newResult: TemplateStoreState = { ...INIT_STATE_MOCK, first: newState };

    act(() => {
      result.current.setFirst(newState);
    });

    expect(result.current).toMatchObject(newResult);
  });

  test('액션: setSecond', () => {
    const { result } = renderHook(() => useTemplateStore());
    expect(result.current).toMatchObject(INIT_STATE_MOCK);

    const newState = NEW_STATE_MOCK.second;
    const newResult: TemplateStoreState = { ...INIT_STATE_MOCK, second: newState };

    act(() => {
      result.current.setSecond(newState);
    });

    expect(result.current).toMatchObject(newResult);
  });

  test('액션: setThird', () => {
    const { result } = renderHook(() => useTemplateStore());
    expect(result.current).toMatchObject(INIT_STATE_MOCK);

    const newState = NEW_STATE_MOCK.third;
    const newResult: TemplateStoreState = { ...INIT_STATE_MOCK, third: newState };

    act(() => {
      result.current.setThird(newState);
    });

    expect(result.current).toMatchObject(newResult);
  });
});
