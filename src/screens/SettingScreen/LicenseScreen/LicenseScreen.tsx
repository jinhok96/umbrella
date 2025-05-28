import { Text } from 'react-native';

import { SETTING_NAVIGATION_TEST_ID_LIST } from '@navigation/SettingNavigation.const';
import SettingScreenWrapper from '@screens/SettingScreen/_components/SettingScreenWrapper';

export default function LicenseScreen() {
  return (
    <SettingScreenWrapper testID={SETTING_NAVIGATION_TEST_ID_LIST.License}>
      <Text>LicenseScreen</Text>
    </SettingScreenWrapper>
  );
}
