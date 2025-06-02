import type { RouteName } from '@libs/types/navigation.type';

export type RouteStoreState = {
  isReady: boolean;
  currentRouteName?: RouteName;
};

export type RouteStoreActions = {
  setIsReady: (state: RouteStoreState['isReady']) => void;
  setCurrentRouteName: (state: RouteStoreState['currentRouteName']) => void;
};

export type RouteStore = RouteStoreState & RouteStoreActions;
