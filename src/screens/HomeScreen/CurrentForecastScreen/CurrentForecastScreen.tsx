import { Pressable, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import TestSection from '@components/TestSection';
import { HOME_NAVIGATION_TEST_ID_LIST } from '@navigation/HomeNavigation.const';
import HomeScreenWrapper from '@screens/HomeScreen/_components/HomeScreenWrapper';

export default function CurrentForecastScreen() {
  const { navigate } = useNavigation();

  return (
    <HomeScreenWrapper testID={HOME_NAVIGATION_TEST_ID_LIST.CurrentForecast}>
      <Text>CurrentForecastScreen</Text>
      <TestSection />
      <Pressable
        onPress={() => {
          navigate('Home');
        }}
      >
        <Text>CurrentForecastScreen</Text>
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
    </HomeScreenWrapper>
  );
}
