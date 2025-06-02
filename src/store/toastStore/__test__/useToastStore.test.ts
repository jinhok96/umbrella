import { act, renderHook } from '@testing-library/react-native';

import { toastStore, useToastStore } from '@store/toastStore/useToastStore';
import { INIT_TOAST_STORE_STATE } from '@store/toastStore/useToastStore.const';

import type { ToastStoreState } from '@store/toastStore/useToastStore.type';

type StoreState = ToastStoreState;

const TEST_TOAST_PROPS: Omit<StoreState['list'][0], 'id'> = { type: 'default', text: 'test' };
const CURRENT_TIME = 1672531200000;
const TOAST_ID = `toast-${JSON.stringify(TEST_TOAST_PROPS)}-${CURRENT_TIME}`;

const INIT_STATE_MOCK: StoreState = {
  list: [{ ...TEST_TOAST_PROPS, id: 'testId' }],
};

const NEW_STATE_MOCK: StoreState = {
  list: [{ ...TEST_TOAST_PROPS, id: TOAST_ID }],
};

/**
 * useToastStore 테스트
 * @jinhok96 25.06.02
 */
describe('useToastStore', () => {
  const store = toastStore;
  const useStore = useToastStore;

  beforeAll(() => {
    // 원하는 고정 시간 설정
    jest.useFakeTimers();
    jest.setSystemTime(new Date(CURRENT_TIME));
  });

  beforeEach(() => {
    // 각 테스트 전에 스토어를 초기 상태로 리셋
    store.setState(INIT_STATE_MOCK);
  });

  afterAll(() => {
    // 실제 타이머로 복원
    jest.useRealTimers();
    // 모든 테스트 완료 후 스토어를 초기 상태로 리셋
    store.setState(INIT_TOAST_STORE_STATE);
  });

  test('초기 상태 확인', () => {
    const { result } = renderHook(() => useStore());
    expect(result.current).toMatchObject(INIT_STATE_MOCK);
  });

  test('액션: openToast, closeToast', () => {
    const { result } = renderHook(() => useStore());
    expect(result.current).toMatchObject(INIT_STATE_MOCK);

    const newState = NEW_STATE_MOCK.list[0];
    const newResult: StoreState = { list: [...INIT_STATE_MOCK.list, newState] };

    // openToast
    act(() => {
      const newStateWithoutId = { ...newState, id: undefined };
      result.current.openToast(newStateWithoutId);
    });

    expect(result.current).toMatchObject(newResult);

    // closeToast
    act(() => {
      result.current.closeToast(newState.id);
    });

    expect(result.current).toMatchObject(INIT_STATE_MOCK);
  });
});
