import type { RootStack } from '@navigation/RootNavigation.const';
import type { StaticParamList } from '@react-navigation/native';

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
