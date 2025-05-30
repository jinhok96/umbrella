import type { RootStackParamList } from '@libs/types/navigation.type';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
