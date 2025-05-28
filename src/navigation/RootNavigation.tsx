import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GlobalStackHeader from '@navigation/_components/styledHeader/GlobalStackHeader';
import HomeNavigation from '@navigation/HomeNavigation';
import { ROOT_NAVIGATION_LABEL_LIST, ROOT_NAVIGATION_ROUTE_NAME_LIST } from '@navigation/RootNavigation.const';
import { SettingNavigation } from '@navigation/SettingNavigation';
import LocationScreen from '@screens/LocationScreen/LocationScreen';
import { useSettingStore } from '@store/settingStore/useSettingStore';

const RootStack = createNativeStackNavigator();

export function RootNavigation() {
  const lang = useSettingStore(state => state.lang);

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'default',
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
          animation: 'fade_from_bottom',
        }}
      />
      <RootStack.Screen
        name={ROOT_NAVIGATION_ROUTE_NAME_LIST.Setting}
        component={SettingNavigation}
        options={{
          animation: 'fade_from_bottom',
        }}
      />
    </RootStack.Navigator>
  );
}
