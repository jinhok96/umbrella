import { Pressable, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { SETTING_NAVIGATION_TEST_ID_LIST } from '@navigation/setting/SettingNavigation.const';
import SettingScreenWrapper from '@screens/SettingScreen/_components/SettingScreenWrapper';

export default function SettingMenuScreen() {
  const { navigate } = useNavigation();

  return (
    <SettingScreenWrapper testID={SETTING_NAVIGATION_TEST_ID_LIST.SettingMenu}>
      <Text>SettingMenuScreen</Text>
      <Pressable
        onPress={() => {
          navigate('Home');
        }}
      >
        <Text>HomeScreen</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigate('Location');
        }}
      >
        <Text>LocationScreen</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigate('Setting');
        }}
      >
        <Text>SettingScreen</Text>
      </Pressable>
    </SettingScreenWrapper>
  );
}
