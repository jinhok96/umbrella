import { act, renderHook } from '@testing-library/react-native';

import { routeStore, useRouteStore } from '@store/routeStore/useRouteStore';
import { INIT_ROUTE_STORE_STATE } from '@store/routeStore/useRouteStore.const';

import type { RouteStoreState } from '@store/routeStore/useRouteStore.type';

type StoreState = RouteStoreState;

const INIT_STATE_MOCK: StoreState = {
  isReady: false,
  currentRouteName: undefined,
};

const NEW_STATE_MOCK: StoreState = {
  isReady: true,
  currentRouteName: 'Home',
};

/**
 * useRouteStore 테스트
 * @jinhok96 25.05.29
 */
describe('useRouteStore', () => {
  const store = routeStore;
  const useStore = useRouteStore;

  beforeEach(() => {
    // 각 테스트 전에 스토어를 초기 상태로 리셋
    store.setState(INIT_STATE_MOCK);
  });

  afterAll(() => {
    // 모든 테스트 완료 후 스토어를 초기 상태로 리셋
    store.setState(INIT_ROUTE_STORE_STATE);
  });

  test('초기 상태 확인', () => {
    const { result } = renderHook(() => useStore());
    expect(result.current).toMatchObject(INIT_STATE_MOCK);
  });

  test('액션: setIsReady', () => {
    const { result } = renderHook(() => useStore());
    expect(result.current).toMatchObject(INIT_STATE_MOCK);

    const newState = NEW_STATE_MOCK.isReady;
    const newResult: StoreState = { ...INIT_STATE_MOCK, isReady: newState };

    act(() => {
      result.current.setIsReady(newState);
    });

    expect(result.current).toMatchObject(newResult);
  });

  test('액션: setCurrentRouteName', () => {
    const { result } = renderHook(() => useStore());
    expect(result.current).toMatchObject(INIT_STATE_MOCK);

    const newState = NEW_STATE_MOCK.currentRouteName;
    const newResult: StoreState = { ...INIT_STATE_MOCK, currentRouteName: newState };

    act(() => {
      result.current.setCurrentRouteName(newState);
    });

    expect(result.current).toMatchObject(newResult);
  });
});
