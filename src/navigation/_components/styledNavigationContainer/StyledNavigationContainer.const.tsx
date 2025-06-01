import { StackActions, createNavigationContainerRef } from '@react-navigation/native';

import type { GlobalRootStackParamList } from '@libs/types/navigation.type';

/**
 * `useNavigation`을 사용할 수 없는 곳에서 사용하는 `NavigationContainerRef`
 * @jinhok96 25.05.30
 */
export const navigationRef = createNavigationContainerRef<GlobalRootStackParamList>();

const navigate = <RouteName extends keyof GlobalRootStackParamList, ParamList extends GlobalRootStackParamList>(
  ...args: RouteName extends unknown
    ? undefined extends ParamList[RouteName]
      ? [
          screen: RouteName,
          params?: ParamList[RouteName],
          options?: {
            merge?: boolean;
            pop?: boolean;
          },
        ]
      : [
          screen: RouteName,
          params: ParamList[RouteName],
          options?: {
            merge?: boolean;
            pop?: boolean;
          },
        ]
    : never
) => {
  if (!navigationRef.isReady()) return;
  // @ts-expect-error navigate 원본 타입을 그대로 가져와서 문제 없는 타입 오류
  navigationRef.navigate(...args);
};

const pop = () => {
  if (!navigationRef.isReady()) return;
  if (!navigationRef.canGoBack()) return;
  navigationRef.dispatch(StackActions.pop());
};

export const navigationActions = {
  navigate,
  pop,
};
