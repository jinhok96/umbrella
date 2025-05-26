import { ANIMATION_DURATION } from '@libs/constants/duration.const';
import StyledHeader from '@navigation/components/styledHeader/StyledHeader';
import { StyledHeaderBackButton } from '@navigation/components/styledHeader/StyledHeaderBackButton';
import StyledHeaderButton from '@navigation/components/styledHeader/StyledHeaderButton';
import StyledHeaderTitle from '@navigation/components/styledHeader/StyledHeaderTitle';
import { SETTING_NAVIGATION_ROUTE_NAME_LIST, SettingStack } from '@navigation/SettingNavigation.const';
import InfoScreen from '@screens/SettingScreen/InfoScreen/InfoScreen';
import InquiryScreen from '@screens/SettingScreen/InquiryScreen/InquiryScreen';
import LicenseScreen from '@screens/SettingScreen/LicenseScreen/LicenseScreen';
import SetDefaultLocationScreen from '@screens/SettingScreen/SetDefaultLocationScreen/SetDefaultLocationScreen';
import SetLangScreen from '@screens/SettingScreen/SetLangScreen/SetLangScreen';
import SetThemeScreen from '@screens/SettingScreen/SetThemeScreen/SetThemeScreen';
import SettingMenuScreen from '@screens/SettingScreen/SettingMenuScreen/SettingMenuScreen';
import SetUnitsScreen from '@screens/SettingScreen/SetUnitsScreen/SetUnitsScreen';

import type { NativeStackHeaderProps } from '@react-navigation/native-stack';

function SettingHeader({ options }: NativeStackHeaderProps) {
  return (
    <StyledHeader>
      <StyledHeaderBackButton />
      <StyledHeaderTitle className="text-text-01">{options.title}</StyledHeaderTitle>
      <StyledHeaderButton />
    </StyledHeader>
  );
}

export function SettingNavigation() {
  return (
    <SettingStack.Navigator
      screenOptions={{
        animation: 'default',
        animationDuration: ANIMATION_DURATION,
        headerShown: true,
        header: props => <SettingHeader {...props} />,
      }}
    >
      <SettingStack.Screen
        name={SETTING_NAVIGATION_ROUTE_NAME_LIST.SettingMenu}
        component={SettingMenuScreen}
        options={{
          title: '설정',
        }}
      />
      <SettingStack.Screen
        name={SETTING_NAVIGATION_ROUTE_NAME_LIST.SetTheme}
        component={SetThemeScreen}
      />
      <SettingStack.Screen
        name={SETTING_NAVIGATION_ROUTE_NAME_LIST.SetLang}
        component={SetLangScreen}
      />
      <SettingStack.Screen
        name={SETTING_NAVIGATION_ROUTE_NAME_LIST.SetUnits}
        component={SetUnitsScreen}
      />
      <SettingStack.Screen
        name={SETTING_NAVIGATION_ROUTE_NAME_LIST.SetDefaultLocation}
        component={SetDefaultLocationScreen}
      />
      <SettingStack.Screen
        name={SETTING_NAVIGATION_ROUTE_NAME_LIST.License}
        component={LicenseScreen}
      />
      <SettingStack.Screen
        name={SETTING_NAVIGATION_ROUTE_NAME_LIST.Info}
        component={InfoScreen}
      />
      <SettingStack.Screen
        name={SETTING_NAVIGATION_ROUTE_NAME_LIST.Inquiry}
        component={InquiryScreen}
      />
    </SettingStack.Navigator>
  );
}
