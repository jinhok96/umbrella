import { ANIMATION_DURATION } from '@libs/constants/duration.const';
import HomeNavigation from '@navigation/HomeNavigation';
import { ROOT_NAVIGATION_ROUTE_NAME_LIST, RootStack } from '@navigation/RootNavigation.const';
import { SettingNavigation } from '@navigation/SettingNavigation';
import LocationScreen from '@screens/LocationScreen/LocationScreen';

export function RootNavigation() {
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
      />
      <RootStack.Screen
        name={ROOT_NAVIGATION_ROUTE_NAME_LIST.Setting}
        component={SettingNavigation}
      />
    </RootStack.Navigator>
  );
}
