import { useState } from 'react';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import type { SharedValue } from 'react-native-reanimated';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';

import LocationHeader from '@screens/HomeScreen/_components/weatherInfoHeader/LocationHeader';
import {
  WEATHER_HEADER_HEIGHT,
  WEATHER_HEADER_HEIGHT_SCALE,
  WEATHER_HEADER_ICON_SIZE_SCALE,
} from '@screens/HomeScreen/_components/weatherInfoHeader/WeatherInfoHeader.const';
import WeatherInfoHeaderIcon from '@screens/HomeScreen/_components/weatherInfoHeader/WeatherInfoHeaderIcon';
import WeatherInfoHeaderSummary from '@screens/HomeScreen/_components/weatherInfoHeader/WeatherInfoHeaderSummary';
import WeatherInfoHeaderTempSection from '@screens/HomeScreen/_components/weatherInfoHeader/WeatherInfoHeaderTempSection';

import type { ForecastsStoreState } from '@store/forecastsStore/useForecastsStore.type';

// 목 데이터: useForecastsStore(state => state.current);
const current: ForecastsStoreState['current'] = {
  dt: 1684929490,
  sunrise: 1684926645,
  sunset: 1684977332,
  temp: 292.55,
  feels_like: 292.87,
  pressure: 1014,
  humidity: 89,
  dew_point: 290.69,
  uvi: 0.16,
  clouds: 53,
  visibility: 10000,
  wind_speed: 3.13,
  wind_deg: 93,
  wind_gust: 6.71,
  weather: [
    {
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04d',
    },
  ],
  pm25: 15,
  pm10: 20,
};

// 목 데이터: useForecastsStore(state => state.daily);
const daily: ForecastsStoreState['daily'] = new Array(8).fill({
  dt: 1684951200,
  sunrise: 1684926645,
  sunset: 1684977332,
  moonrise: 1684941060,
  moonset: 1684905480,
  moon_phase: 0.16,
  summary: 'Expect a day of partly cloudy with rain',
  temp: {
    day: 299.03,
    min: 290.69,
    max: 300.35,
    night: 291.45,
    eve: 297.51,
    morn: 292.55,
  },
  feels_like: {
    day: 299.21,
    night: 291.37,
    eve: 297.86,
    morn: 292.87,
  },
  pressure: 1016,
  humidity: 59,
  dew_point: 290.48,
  wind_speed: 3.98,
  wind_deg: 76,
  wind_gust: 8.92,
  weather: [
    {
      id: 500,
      main: 'Rain',
      description: 'light rain',
      icon: '10d',
    },
  ],
  clouds: 92,
  pop: 0.47,
  rain: 0.15,
  uvi: 9.23,
});

type WeatherInfoHeaderProps = Omit<ViewProps, 'className'> & {
  scrollValue: SharedValue<number>;
};

const MAX_SCROLL_VALUE = WEATHER_HEADER_HEIGHT_SCALE - WEATHER_HEADER_HEIGHT;

/**
 * 현재 위치 날씨 정보를 보여주는 컴포넌트
 * @jinhok96 25.06.04
 */
export default function WeatherInfoHeader({ scrollValue, ...props }: WeatherInfoHeaderProps) {
  const [containerWidth, setContainerWidth] = useState(1);

  // Temp Container Style
  const animatedTempContainerStyle = useAnimatedStyle(() => {
    const newValue = Math.min(scrollValue.value, MAX_SCROLL_VALUE);

    const paddingTop = interpolate(newValue, [0, MAX_SCROLL_VALUE], [WEATHER_HEADER_ICON_SIZE_SCALE, 0]);

    return { paddingTop };
  });

  if (!current || !daily) return <></>;

  return (
    <View
      {...props}
      className="pt-safe absolute top-0 z-10 bg-morning transition-[max-height]"
    >
      <LocationHeader />
      <View className="px-5 pb-7 pt-5">
        <Animated.View
          className="relative flex gap-2"
          style={animatedTempContainerStyle}
          onLayout={e => {
            const newWidth = Math.floor(e.nativeEvent.layout.width * 100) * 0.01;
            if (newWidth) setContainerWidth(newWidth);
          }}
        >
          {/* 날씨 아이콘 */}
          <WeatherInfoHeaderIcon
            scrollValue={scrollValue}
            containerWidth={containerWidth}
          />
          {/* 기온 */}
          <WeatherInfoHeaderTempSection
            scrollValue={scrollValue}
            containerWidth={containerWidth}
          />
          {/* 요약 */}
          <WeatherInfoHeaderSummary
            scrollValue={scrollValue}
            containerWidth={containerWidth}
          />
        </Animated.View>
      </View>
    </View>
  );
}
