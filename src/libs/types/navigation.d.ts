import type { GlobalRootStackParamList } from '@libs/types/navigation.type';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends GlobalRootStackParamList {}
  }
}
