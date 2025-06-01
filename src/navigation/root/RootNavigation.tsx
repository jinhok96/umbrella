import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { enableFreeze } from 'react-native-screens';

import GlobalStackHeader from '@navigation/_components/styledHeader/GlobalStackHeader';
import HomeNavigation from '@navigation/home/HomeNavigation';
import { ROOT_NAVIGATION_LABEL_LIST } from '@navigation/root/RootNavigation.const';
import { SettingNavigation } from '@navigation/setting/SettingNavigation';
import LocationScreen from '@screens/LocationScreen/LocationScreen';
import ModalScreen from '@screens/ModalScreen/ModalScreen/ModalScreen';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { RootStackParamList } from '@navigation/root/RootNavigation.type';

enableFreeze(true);

const RootStack = createNativeStackNavigator<RootStackParamList>();

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
          name="Home"
          component={HomeNavigation}
          options={{
            animation: 'default',
          }}
        />
        <RootStack.Screen
          name="Location"
          component={LocationScreen}
          options={{
            headerShown: true,
            header: props => <GlobalStackHeader {...props} />,
            title: ROOT_NAVIGATION_LABEL_LIST.Location[lang],
          }}
        />
        <RootStack.Screen
          name="Setting"
          component={SettingNavigation}
        />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ presentation: 'transparentModal' }}>
        <RootStack.Screen
          name="Modal"
          component={ModalScreen}
          options={{
            animation: 'fade',
          }}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}
