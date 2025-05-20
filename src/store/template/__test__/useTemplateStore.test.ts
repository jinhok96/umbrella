import { act, renderHook } from '@testing-library/react-native';

import { templateStore, useTemplateStore } from '@store/template/useTemplateStore';
import { INIT_TEMPLATE_STORE_STATE } from '@store/template/useTemplateStore.const';

import type { TemplateStoreState } from '@store/template/useTemplateStore.type';

type StoreState = TemplateStoreState;

const INIT_STATE_MOCK: StoreState = {
  first: 'first',
  second: 'second',
  third: 'third',
};

const NEW_STATE_MOCK: StoreState = {
  first: 'new first',
  second: 'new second',
  third: 'new third',
};

/**
 * useStore 테스트
 * @jinhok96 25.05.20
 */
describe('useStore', () => {
  const store = templateStore;
  const useStore = useTemplateStore;

  beforeEach(() => {
    // 각 테스트 전에 스토어를 초기 상태로 리셋
    store.setState(INIT_STATE_MOCK);
  });

  afterAll(() => {
    // 모든 테스트 완료 후 스토어를 초기 상태로 리셋
    store.setState(INIT_TEMPLATE_STORE_STATE);
  });

  test('초기 상태 확인', () => {
    const { result } = renderHook(() => useStore());
    expect(result.current).toMatchObject(INIT_STATE_MOCK);
  });

  test('훅을 사용하지 않고 직접 스토어 접근 테스트', () => {
    expect(store.getState()).toMatchObject(INIT_STATE_MOCK);

    const newState = NEW_STATE_MOCK.first;

    act(() => {
      store.getState().setFirst(newState);
    });

    expect(store.getState().first).toBe(newState);
  });

  test('액션: setFirst', () => {
    const { result } = renderHook(() => useStore());
    expect(result.current).toMatchObject(INIT_STATE_MOCK);

    const newState = NEW_STATE_MOCK.first;
    const newResult: StoreState = { ...INIT_STATE_MOCK, first: newState };

    act(() => {
      result.current.setFirst(newState);
    });

    expect(result.current).toMatchObject(newResult);
  });

  test('액션: setSecond', () => {
    const { result } = renderHook(() => useStore());
    expect(result.current).toMatchObject(INIT_STATE_MOCK);

    const newState = NEW_STATE_MOCK.second;
    const newResult: StoreState = { ...INIT_STATE_MOCK, second: newState };

    act(() => {
      result.current.setSecond(newState);
    });

    expect(result.current).toMatchObject(newResult);
  });

  test('액션: setThird', () => {
    const { result } = renderHook(() => useStore());
    expect(result.current).toMatchObject(INIT_STATE_MOCK);

    const newState = NEW_STATE_MOCK.third;
    const newResult: StoreState = { ...INIT_STATE_MOCK, third: newState };

    act(() => {
      result.current.setThird(newState);
    });

    expect(result.current).toMatchObject(newResult);
  });
});
