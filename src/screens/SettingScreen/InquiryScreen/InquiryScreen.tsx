import { Text } from 'react-native';

import { SETTING_NAVIGATION_TEST_ID_LIST } from '@navigation/setting/SettingNavigation.const';
import SettingScreenWrapper from '@screens/SettingScreen/_components/SettingScreenWrapper';

export default function InquiryScreen() {
  return (
    <SettingScreenWrapper testID={SETTING_NAVIGATION_TEST_ID_LIST.Inquiry}>
      <Text>InquiryScreen</Text>
    </SettingScreenWrapper>
  );
}
