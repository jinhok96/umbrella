import { create } from 'zustand';

import { INIT_ROUTE_STORE_STATE } from '@store/routeStore/useRouteStore.const';

import type { RouteStore } from '@store/routeStore/useRouteStore.type';
import type { StateCreator } from 'zustand';

/**
 * 라우터 스토어
 * @ isReady - 라우트가 준비되었는지 여부
 * @ currentRouteName - 현재 라우트 이름
 * @ setIsReady - 라우트 준비 상태 설정
 * @ setCurrentRouteName - 현재 라우트 이름 설정
 * @jinhok96 25.05.29
 */
const routeStoreCreator: StateCreator<RouteStore> = set => ({
  ...INIT_ROUTE_STORE_STATE,
  setIsReady: isReady => set({ isReady }),
  setCurrentRouteName: currentRouteName => set({ currentRouteName }),
});

export const useRouteStore = create<RouteStore>()(routeStoreCreator);
export const routeStore = useRouteStore;
