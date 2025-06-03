import { useEffect, useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useInView } from 'react-native-use-in-view';

import TestSection from '@components/TestSection';
import { HOME_NAVIGATION_TEST_ID_LIST } from '@navigation/home/HomeNavigation.const';
import HomeScreenWrapper from '@screens/HomeScreen/_components/HomeScreenWrapper';
import WeatherInfoHeader from '@screens/HomeScreen/_components/weatherInfoHeader/WeatherInfoHeader';

function ObserverView({ threshold, onViewChange }: { threshold: number; onViewChange: (inView: boolean) => void }) {
  const { ref, inView } = useInView({
    initialInView: true,
    threshold,
  });

  useEffect(() => {
    onViewChange(inView);
  }, [inView]);

  return (
    <View
      className="border"
      ref={ref}
    />
  );
}

export default function CurrentForecastScreen() {
  const { navigate } = useNavigation();
  const weatherInfoHeaderRef = useRef<View>(null);
  const [threshold, setThreshold] = useState(0);
  const [inView, onViewChange] = useState(true);

  console.log('inView', inView);

  useEffect(() => {
    weatherInfoHeaderRef.current?.measureInWindow((_x, _y, _width, height) => {
      const newHeight = Math.floor(height) - 20;
      setThreshold(newHeight * -1);
    });
  }, []);

  return (
    <>
      <View ref={weatherInfoHeaderRef}>
        <WeatherInfoHeader />
      </View>
      <HomeScreenWrapper testID={HOME_NAVIGATION_TEST_ID_LIST.CurrentForecast}>
        <ObserverView
          threshold={threshold}
          onViewChange={onViewChange}
        />
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
    </>
  );
}
