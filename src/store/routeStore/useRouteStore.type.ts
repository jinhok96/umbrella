import type { RouteName } from '@libs/types/navigation.type';

/**
 * 앱 라우트 상태 스토어
 * @ isReady - 라우트가 준비되었는지 여부
 * @ currentRouteName - 현재 라우트 이름
 * @jinhok96 25.05.29
 */
export type RouteStoreState = {
  isReady: boolean;
  currentRouteName?: RouteName;
};

export type RouteStoreActions = {
  setIsReady: (state: RouteStoreState['isReady']) => void;
  setCurrentRouteName: (state: RouteStoreState['currentRouteName']) => void;
};

export type RouteStore = RouteStoreState & RouteStoreActions;
