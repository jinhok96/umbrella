import { useState } from 'react';
import { Pressable, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import SearchInput from '@components/textField/SearchInput';
import { ROOT_NAVIGATION_TEST_ID_LIST } from '@navigation/RootNavigation.const';
import LocationScreenWrapper from '@screens/LocationScreen/_components/LocationScreenWrapper';

export default function LocationScreen() {
  const { navigate } = useNavigation();
  const [text, onChangeText] = useState('');

  return (
    <LocationScreenWrapper testID={ROOT_NAVIGATION_TEST_ID_LIST.Location}>
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
    </LocationScreenWrapper>
  );
}
