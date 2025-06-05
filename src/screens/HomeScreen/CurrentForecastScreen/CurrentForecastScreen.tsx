import { Pressable, ScrollView, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import TestSection from '@components/TestSection';
import { HOME_NAVIGATION_TEST_ID_LIST } from '@navigation/home/HomeNavigation.const';
import HomeScreenWrapper from '@screens/HomeScreen/_components/HomeScreenWrapper';
import WeatherInfoHeader from '@screens/HomeScreen/CurrentForecastScreen/_components/weatherInfoHeader/WeatherInfoHeader';

export default function CurrentForecastScreen() {
  const { navigate } = useNavigation();

  return (
    <View className="relative flex-1">
      <WeatherInfoHeader />
      <HomeScreenWrapper testID={HOME_NAVIGATION_TEST_ID_LIST.CurrentForecast}>
        <ScrollView className="flex-1 p-5">
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
        </ScrollView>
      </HomeScreenWrapper>
    </View>
  );
}
