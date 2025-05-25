import React from 'react';

import { ANIMATION_DURATION } from '@libs/constants/duration.const';
import HomeNavigation from '@navigation/HomeNavigation';
import { ROOT_NAVIGATION_ROUTE_NAME_LIST, RootStack } from '@navigation/RootNavigation.const';
import LocationScreen from '@screens/LocationScreen/LocationScreen';
import InfoScreen from '@screens/SettingScreen/InfoScreen/InfoScreen';
import InquiryScreen from '@screens/SettingScreen/InquiryScreen/InquiryScreen';
import LicenseScreen from '@screens/SettingScreen/LicenseScreen/LicenseScreen';
import SetDefaultLocationScreen from '@screens/SettingScreen/SetDefaultLocationScreen/SetDefaultLocationScreen';
import SetLangScreen from '@screens/SettingScreen/SetLangScreen/SetLangScreen';
import SetThemeScreen from '@screens/SettingScreen/SetThemeScreen/SetThemeScreen';
import SettingScreen from '@screens/SettingScreen/SettingScreen';
import SetUnitsScreen from '@screens/SettingScreen/SetUnitsScreen/SetUnitsScreen';

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
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name={ROOT_NAVIGATION_ROUTE_NAME_LIST.Location}
        component={LocationScreen}
        options={{ title: '위치' }}
      />
      <RootStack.Screen
        name={ROOT_NAVIGATION_ROUTE_NAME_LIST.Setting}
        component={SettingScreen}
        options={{ title: '설정' }}
      />
      <RootStack.Screen
        name={ROOT_NAVIGATION_ROUTE_NAME_LIST.SetTheme}
        component={SetThemeScreen}
        options={{ title: '테마' }}
      />
      <RootStack.Screen
        name={ROOT_NAVIGATION_ROUTE_NAME_LIST.SetLang}
        component={SetLangScreen}
        options={{ title: '언어' }}
      />
      <RootStack.Screen
        name={ROOT_NAVIGATION_ROUTE_NAME_LIST.SetUnits}
        component={SetUnitsScreen}
        options={{ title: '단위' }}
      />
      <RootStack.Screen
        name={ROOT_NAVIGATION_ROUTE_NAME_LIST.SetDefaultLocation}
        component={SetDefaultLocationScreen}
        options={{ title: '기본 위치' }}
      />
      <RootStack.Screen
        name={ROOT_NAVIGATION_ROUTE_NAME_LIST.Info}
        component={InfoScreen}
        options={{ title: '정보' }}
      />
      <RootStack.Screen
        name={ROOT_NAVIGATION_ROUTE_NAME_LIST.Inquiry}
        component={InquiryScreen}
        options={{ title: '문의' }}
      />
      <RootStack.Screen
        name={ROOT_NAVIGATION_ROUTE_NAME_LIST.License}
        component={LicenseScreen}
        options={{ title: '라이센스' }}
      />
    </RootStack.Navigator>
  );
}
