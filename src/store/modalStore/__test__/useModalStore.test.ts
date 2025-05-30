import { renderHook } from '@testing-library/react-native';

import { modalStore, useModalStore } from '@store/modalStore/useModalStore';
import { INIT_MODAL_STORE_STATE } from '@store/modalStore/useModalStore.const';

import type { ModalStoreState } from '@store/modalStore/useModalStore.type';

type StoreState = ModalStoreState;

const INIT_STATE_MOCK: StoreState = {
  onCancel: null,
  onSubmitBeforeClose: null,
};

// const NEW_STATE_MOCK: StoreState = {
//   onCancel: () => {},
//   onSubmit: () => {},
// };

/**
 * useModalStore 테스트
 * @jinhok96 25.05.30
 */
describe('useModalStore', () => {
  const store = modalStore;
  const useStore = useModalStore;

  beforeEach(() => {
    // 각 테스트 전에 스토어를 초기 상태로 리셋
    store.setState(INIT_STATE_MOCK);
  });

  afterAll(() => {
    // 모든 테스트 완료 후 스토어를 초기 상태로 리셋
    store.setState(INIT_MODAL_STORE_STATE);
  });

  test('초기 상태 확인', () => {
    const { result } = renderHook(() => useStore());
    expect(result.current).toMatchObject(INIT_STATE_MOCK);
  });

  test('액션: openModal', () => {
    // openModal 시 모달 스크린으로 이동하고 prop을 잘 전달하는지 테스트
  });

  test('액션: closeModal', () => {
    // closeModal 시 이전 스크린으로 이동 테스트
  });
});
