import { ANIMATION_DURATION } from '@libs/constants/duration.const';
import GlobalStackHeader from '@navigation/components/styledHeader/GlobalStackHeader';
import {
  SETTING_NAVIGATION_LABEL_LIST,
  SETTING_NAVIGATION_ROUTE_NAME_LIST,
  SettingStack,
} from '@navigation/SettingNavigation.const';
import InfoScreen from '@screens/SettingScreen/InfoScreen/InfoScreen';
import InquiryScreen from '@screens/SettingScreen/InquiryScreen/InquiryScreen';
import LicenseScreen from '@screens/SettingScreen/LicenseScreen/LicenseScreen';
import SetDefaultLocationScreen from '@screens/SettingScreen/SetDefaultLocationScreen/SetDefaultLocationScreen';
import SetLangScreen from '@screens/SettingScreen/SetLangScreen/SetLangScreen';
import SetThemeScreen from '@screens/SettingScreen/SetThemeScreen/SetThemeScreen';
import SettingMenuScreen from '@screens/SettingScreen/SettingMenuScreen/SettingMenuScreen';
import SetUnitsScreen from '@screens/SettingScreen/SetUnitsScreen/SetUnitsScreen';
import { useSettingStore } from '@store/settingStore/useSettingStore';

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
        name={SETTING_NAVIGATION_ROUTE_NAME_LIST.SettingMenu}
        component={SettingMenuScreen}
        options={{
          title: SETTING_NAVIGATION_LABEL_LIST.SettingMenu[lang],
        }}
      />
      <SettingStack.Screen
        name={SETTING_NAVIGATION_ROUTE_NAME_LIST.SetTheme}
        component={SetThemeScreen}
        options={{
          title: SETTING_NAVIGATION_LABEL_LIST.SetTheme[lang],
        }}
      />
      <SettingStack.Screen
        name={SETTING_NAVIGATION_ROUTE_NAME_LIST.SetLang}
        component={SetLangScreen}
        options={{
          title: SETTING_NAVIGATION_LABEL_LIST.SetLang[lang],
        }}
      />
      <SettingStack.Screen
        name={SETTING_NAVIGATION_ROUTE_NAME_LIST.SetUnits}
        component={SetUnitsScreen}
        options={{
          title: SETTING_NAVIGATION_LABEL_LIST.SetUnits[lang],
        }}
      />
      <SettingStack.Screen
        name={SETTING_NAVIGATION_ROUTE_NAME_LIST.SetDefaultLocation}
        component={SetDefaultLocationScreen}
        options={{
          title: SETTING_NAVIGATION_LABEL_LIST.SetDefaultLocation[lang],
        }}
      />
      <SettingStack.Screen
        name={SETTING_NAVIGATION_ROUTE_NAME_LIST.License}
        component={LicenseScreen}
        options={{
          title: SETTING_NAVIGATION_LABEL_LIST.License[lang],
        }}
      />
      <SettingStack.Screen
        name={SETTING_NAVIGATION_ROUTE_NAME_LIST.Info}
        component={InfoScreen}
        options={{
          title: SETTING_NAVIGATION_LABEL_LIST.Info[lang],
        }}
      />
      <SettingStack.Screen
        name={SETTING_NAVIGATION_ROUTE_NAME_LIST.Inquiry}
        component={InquiryScreen}
        options={{
          title: SETTING_NAVIGATION_LABEL_LIST.Inquiry[lang],
        }}
      />
    </SettingStack.Navigator>
  );
}
