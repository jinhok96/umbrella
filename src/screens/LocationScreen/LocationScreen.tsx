import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import SearchInput from '@components/textField/SearchInput';
import { ROOT_NAVIGATION_TEST_ID_LIST } from '@navigation/RootNavigation.const';

export default function LocationScreen() {
  const { navigate } = useNavigation();
  const [text, onChangeText] = useState('');

  return (
    <View
      testID={ROOT_NAVIGATION_TEST_ID_LIST.Location}
      className="flex-1 p-5"
    >
      <Text>LocationScreen</Text>
      <SearchInput
        value={text}
        onChangeText={onChangeText}
      />
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
