import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GlobalStackHeader from '@navigation/_components/styledHeader/GlobalStackHeader';
import HomeNavigation from '@navigation/home/HomeNavigation';
import { ROOT_NAVIGATION_LABEL_LIST, ROOT_NAVIGATION_ROUTE_NAME_LIST } from '@navigation/root/RootNavigation.const';
import { SettingNavigation } from '@navigation/setting/SettingNavigation';
import LocationScreen from '@screens/LocationScreen/LocationScreen';
import ModalScreen from '@screens/ModalScreen/ModalScreen/ModalScreen';
import { useSettingStore } from '@store/settingStore/useSettingStore';

const RootStack = createNativeStackNavigator();

export function RootNavigation() {
  const lang = useSettingStore(state => state.lang);

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade_from_bottom',
      }}
    >
      <RootStack.Group>
        <RootStack.Screen
          name={ROOT_NAVIGATION_ROUTE_NAME_LIST.Home}
          component={HomeNavigation}
          options={{
            animation: 'default',
          }}
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
      </RootStack.Group>
      <RootStack.Group screenOptions={{ presentation: 'formSheet' }}>
        <RootStack.Screen
          name={ROOT_NAVIGATION_ROUTE_NAME_LIST.Modal}
          component={ModalScreen}
          options={{
            sheetAllowedDetents: [1, 1],
            sheetElevation: 0,
          }}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}
