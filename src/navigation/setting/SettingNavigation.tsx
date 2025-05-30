import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ANIMATION_DURATION } from '@libs/constants/duration.const';
import GlobalStackHeader from '@navigation/_components/styledHeader/GlobalStackHeader';
import { SETTING_NAVIGATION_LABEL_LIST } from '@navigation/setting/SettingNavigation.const';
import InfoScreen from '@screens/SettingScreen/InfoScreen/InfoScreen';
import InquiryScreen from '@screens/SettingScreen/InquiryScreen/InquiryScreen';
import LicenseScreen from '@screens/SettingScreen/LicenseScreen/LicenseScreen';
import SetDefaultLocationScreen from '@screens/SettingScreen/SetDefaultLocationScreen/SetDefaultLocationScreen';
import SetLangScreen from '@screens/SettingScreen/SetLangScreen/SetLangScreen';
import SetThemeScreen from '@screens/SettingScreen/SetThemeScreen/SetThemeScreen';
import SettingMenuScreen from '@screens/SettingScreen/SettingMenuScreen/SettingMenuScreen';
import SetUnitsScreen from '@screens/SettingScreen/SetUnitsScreen/SetUnitsScreen';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { SettingStackParamList } from '@navigation/setting/SettingNavigation.type';

const SettingStack = createNativeStackNavigator<SettingStackParamList>();

export function SettingNavigation() {
  const lang = useSettingStore(state => state.lang);

  return (
    <SettingStack.Navigator
      screenOptions={{
        animation: 'default',
        animationDuration: ANIMATION_DURATION,
        headerShown: true,
        header: props => <GlobalStackHeader {...props} />,
      }}
    >
      <SettingStack.Screen
        name="SettingMenu"
        component={SettingMenuScreen}
        options={{
          title: SETTING_NAVIGATION_LABEL_LIST.SettingMenu[lang],
        }}
      />
      <SettingStack.Screen
        name="SetTheme"
        component={SetThemeScreen}
        options={{
          title: SETTING_NAVIGATION_LABEL_LIST.SetTheme[lang],
        }}
      />
      <SettingStack.Screen
        name="SetLang"
        component={SetLangScreen}
        options={{
          title: SETTING_NAVIGATION_LABEL_LIST.SetLang[lang],
        }}
      />
      <SettingStack.Screen
        name="SetUnits"
        component={SetUnitsScreen}
        options={{
          title: SETTING_NAVIGATION_LABEL_LIST.SetUnits[lang],
        }}
      />
      <SettingStack.Screen
        name="SetDefaultLocation"
        component={SetDefaultLocationScreen}
        options={{
          title: SETTING_NAVIGATION_LABEL_LIST.SetDefaultLocation[lang],
        }}
      />
      <SettingStack.Screen
        name="License"
        component={LicenseScreen}
        options={{
          title: SETTING_NAVIGATION_LABEL_LIST.License[lang],
        }}
      />
      <SettingStack.Screen
        name="Info"
        component={InfoScreen}
        options={{
          title: SETTING_NAVIGATION_LABEL_LIST.Info[lang],
        }}
      />
      <SettingStack.Screen
        name="Inquiry"
        component={InquiryScreen}
        options={{
          title: SETTING_NAVIGATION_LABEL_LIST.Inquiry[lang],
        }}
      />
    </SettingStack.Navigator>
  );
}
