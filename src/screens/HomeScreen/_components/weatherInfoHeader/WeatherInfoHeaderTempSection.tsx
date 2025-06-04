import { useRef } from 'react';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';

import MontserratText from '@components/fontText/MontserratText';
import PretendardText from '@components/fontText/PretendardText';
import {
  CURRENT_TEMP_SIZE,
  CURRENT_TEMP_SIZE_SCALE,
  MAX_SCROLL_VALUE,
} from '@screens/HomeScreen/_components/weatherInfoHeader/WeatherInfoHeader.const';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { LocalizedTextMap } from '@libs/utils/localize/localize.type';
import type { WeatherInfoHeaderProps } from '@screens/HomeScreen/_components/weatherInfoHeader/WeatherInfoHeader.type';
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

const TEXT_LIST: LocalizedTextMap<'low' | 'high'> = {
  low: {
    en: 'Low',
    ko: '최저',
  },
  high: {
    en: 'High',
    ko: '최고',
  },
};

type WeatherInfoHeaderTempSectionProps = Omit<ViewProps, 'className'> &
  Pick<WeatherInfoHeaderProps, 'scrollValue'> & {
    containerWidth: number;
  };

/**
 * `WeatherInfoHeader` 오늘 기온 정보 컴포넌트
 * @jinhok96 25.06.04
 */
export default function WeatherInfoHeaderTempSection({
  scrollValue,
  containerWidth,
  ...props
}: WeatherInfoHeaderTempSectionProps) {
  const lang = useSettingStore(state => state.lang);
  const width = useRef(1);
  const height = useRef(1);

  const maxScale =
    Math.round(
      Math.min(Math.max((CURRENT_TEMP_SIZE_SCALE / CURRENT_TEMP_SIZE) * 0.8, 1), containerWidth / width.current) * 100,
    ) * 0.01;

  // Position Style
  const animatedPositionStyle = useAnimatedStyle(() => {
    const scaleWidthOffset = width.current * (maxScale - 1) * 0.5;
    const scaleHeightOffset = height.current * (maxScale - 1) * 0.5;
    const centerOffset = (containerWidth - maxScale * width.current) * 0.5;

    const translateX = interpolate(
      scrollValue.value,
      [0, MAX_SCROLL_VALUE],
      [scaleWidthOffset + centerOffset, 0],
      'clamp',
    );
    const paddingY = interpolate(scrollValue.value, [0, MAX_SCROLL_VALUE], [scaleHeightOffset, 0], 'clamp');

    return { translateX, paddingTop: paddingY, paddingBottom: paddingY };
  });

  // Scale Style
  const animatedScaleStyle = useAnimatedStyle(() => {
    const scale = interpolate(scrollValue.value, [0, MAX_SCROLL_VALUE], [maxScale, 1], 'clamp');

    return { transform: [{ scale }] };
  });

  if (!current || !daily) return <></>;

  return (
    <View
      {...props}
      className="flex flex-row"
    >
      <Animated.View style={animatedPositionStyle}>
        <Animated.View
          className="flex flex-row items-center gap-3 px-1"
          style={animatedScaleStyle}
          onLayout={e => {
            const newWidth = Math.floor(e.nativeEvent.layout.width * 100) * 0.01;
            const newHeight = Math.floor(e.nativeEvent.layout.height * 100) * 0.01;
            if (newWidth) width.current = newWidth;
            if (newHeight) height.current = newHeight;
          }}
        >
          <MontserratText
            typo="title-1"
            className="text-white"
          >
            {current.temp}°
          </MontserratText>
          <View className="flex flex-row items-center gap-2">
            <View className="flex flex-row items-center gap-1">
              <PretendardText
                typo="caption-3"
                className="text-white"
              >
                {TEXT_LIST.low[lang]}
              </PretendardText>
              <MontserratText
                typo="caption-3"
                className="text-white"
              >
                {daily[0].temp.min}°
              </MontserratText>
            </View>
            <View className="h-3 border-r border-white opacity-40" />
            <View className="flex flex-row items-center gap-1">
              <PretendardText
                typo="caption-3"
                className="text-white"
              >
                {TEXT_LIST.high[lang]}
              </PretendardText>
              <MontserratText
                typo="caption-3"
                className="text-white"
              >
                {daily[0].temp.max}°
              </MontserratText>
            </View>
          </View>
        </Animated.View>
      </Animated.View>
    </View>
  );
}
