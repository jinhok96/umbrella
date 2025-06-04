import { Pressable, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Animated, { clamp, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import TestSection from '@components/TestSection';
import { HOME_NAVIGATION_TEST_ID_LIST } from '@navigation/home/HomeNavigation.const';
import HomeScreenWrapper from '@screens/HomeScreen/_components/HomeScreenWrapper';
import WeatherInfoHeader from '@screens/HomeScreen/_components/weatherInfoHeader/WeatherInfoHeader';
import {
  MAX_SCROLL_VALUE,
  WEATHER_HEADER_HEIGHT_SCALE,
} from '@screens/HomeScreen/_components/weatherInfoHeader/WeatherInfoHeader.const';

export default function CurrentForecastScreen() {
  const { navigate } = useNavigation();
  const insets = useSafeAreaInsets();

  // 현재 스크롤의 위치
  const scrollValue = useSharedValue(0);

  // 스크롤 이벤트에 따라 scrollValue 값을 업데이트
  const handleScroll = useAnimatedScrollHandler({
    onScroll: e => {
      scrollValue.value = clamp(e.contentOffset.y, 0, MAX_SCROLL_VALUE);
    },
  });

  return (
    <View className="relative flex-1">
      <WeatherInfoHeader scrollValue={scrollValue} />
      <HomeScreenWrapper testID={HOME_NAVIGATION_TEST_ID_LIST.CurrentForecast}>
        <Animated.ScrollView
          className="flex-1"
          onScroll={handleScroll}
        >
          <View style={{ paddingTop: WEATHER_HEADER_HEIGHT_SCALE + insets.top }}>
            <View className="flex-1 p-5">
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
            </View>
          </View>
        </Animated.ScrollView>
      </HomeScreenWrapper>
    </View>
  );
}
