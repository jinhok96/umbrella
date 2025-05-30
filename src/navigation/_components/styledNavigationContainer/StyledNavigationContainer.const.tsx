import { createNavigationContainerRef } from '@react-navigation/native';

import type { GlobalRootStackParamList } from '@libs/types/navigation.type';

/**
 * `useNavigation`을 사용할 수 없는 곳에서 사용하는 `NavigationContainerRef`
 * @jinhok96 25.05.30
 */
export const navigationRef = createNavigationContainerRef<GlobalRootStackParamList>();
