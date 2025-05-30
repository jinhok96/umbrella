import { Text } from 'react-native';

import { SETTING_NAVIGATION_TEST_ID_LIST } from '@navigation/setting/SettingNavigation.const';
import SettingScreenWrapper from '@screens/SettingScreen/_components/SettingScreenWrapper';

export default function SetThemeScreen() {
  return (
    <SettingScreenWrapper testID={SETTING_NAVIGATION_TEST_ID_LIST.SetTheme}>
      <Text>SetThemeScreen</Text>
    </SettingScreenWrapper>
  );
}
