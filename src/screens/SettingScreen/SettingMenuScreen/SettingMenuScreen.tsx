import { Pressable, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { SETTING_NAVIGATION_TEST_ID_LIST } from '@navigation/SettingNavigation.const';

export default function SettingMenuScreen() {
  const { navigate } = useNavigation();

  return (
    <View
      testID={SETTING_NAVIGATION_TEST_ID_LIST.SettingMenu}
      className="flex-1 items-center justify-center"
    >
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
    </View>
  );
}
