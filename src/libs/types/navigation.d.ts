import type { HomeTab } from '@navigation/HomeNavigation.const';
import type { RootStack } from '@navigation/RootNavigation.const';
import type { SettingStack } from '@navigation/SettingNavigation.const';
import type { StaticParamList } from '@react-navigation/native';

type RootStackParamList = StaticParamList<typeof RootStack | typeof HomeTab | typeof SettingStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
