import { Pressable, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { ROOT_NAVIGATION_TEST_ID_LIST } from '@navigation/RootNavigation.const';

export default function LocationScreen() {
  const { navigate } = useNavigation();

  return (
    <View
      testID={ROOT_NAVIGATION_TEST_ID_LIST.Location}
      className="flex-1 items-center justify-center"
    >
      <Text>LocationScreen</Text>
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
