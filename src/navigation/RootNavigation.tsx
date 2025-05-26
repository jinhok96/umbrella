import { ANIMATION_DURATION } from '@libs/constants/duration.const';
import GlobalStackHeader from '@navigation/components/styledHeader/GlobalStackHeader';
import HomeNavigation from '@navigation/HomeNavigation';
import {
  ROOT_NAVIGATION_LABEL_LIST,
  ROOT_NAVIGATION_ROUTE_NAME_LIST,
  RootStack,
} from '@navigation/RootNavigation.const';
import { SettingNavigation } from '@navigation/SettingNavigation';
import LocationScreen from '@screens/LocationScreen/LocationScreen';
import { useSettingStore } from '@store/settingStore/useSettingStore';

export function RootNavigation() {
  const lang = useSettingStore(state => state.lang);

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'default',
        animationDuration: ANIMATION_DURATION,
      }}
    >
      <RootStack.Screen
        name={ROOT_NAVIGATION_ROUTE_NAME_LIST.Home}
        component={HomeNavigation}
      />
      <RootStack.Screen
        name={ROOT_NAVIGATION_ROUTE_NAME_LIST.Location}
        component={LocationScreen}
        options={{
          headerShown: true,
          header: props => <GlobalStackHeader {...props} />,
          title: ROOT_NAVIGATION_LABEL_LIST.Location[lang],
        }}
      />
      <RootStack.Screen
        name={ROOT_NAVIGATION_ROUTE_NAME_LIST.Setting}
        component={SettingNavigation}
      />
    </RootStack.Navigator>
  );
}
