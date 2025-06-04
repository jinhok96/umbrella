import { useState } from 'react';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import type { SharedValue } from 'react-native-reanimated';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';

import MontserratText from '@components/fontText/MontserratText';
import PretendardText from '@components/fontText/PretendardText';
import WeatherIcon from '@components/icon/WeatherIcon';
import LocationHeader from '@screens/HomeScreen/_components/weatherInfoHeader/LocationHeader';
import {
  CURRENT_TEMP_SIZE,
  SCALE_CURRENT_TEMP_SIZE,
  SCALE_SUMMARY_SIZE,
  SCALE_WEATHER_HEADER_HEIGHT,
  SCALE_WEATHER_HEADER_ICON_SIZE,
  SUMMARY_SIZE,
  WEATHER_HEADER_HEIGHT,
  WEATHER_HEADER_ICON_SIZE,
} from '@screens/HomeScreen/_components/weatherInfoHeader/WeatherInfoHeader.const';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { LocalizedTextMap } from '@libs/utils/localize/localize.type';
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

const MAX_SCROLL_VALUE = SCALE_WEATHER_HEADER_HEIGHT - WEATHER_HEADER_HEIGHT;

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

/**
 * 현재 위치 날씨 정보를 보여주는 컴포넌트
 * @jinhok96 25.06.03
 */
export default function WeatherInfoHeader({ scrollValue, ...props }: WeatherInfoHeaderProps) {
  const lang = useSettingStore(state => state.lang);
  const [containerWidth, setContainerWidth] = useState(1);
  const [tempSectionWidth, setTempSectionWidth] = useState(1);
  const [tempSectionHeight, setTempSectionHeight] = useState(1);
  const [summaryWidth, setSummaryWidth] = useState(1);
  const [summaryHeight, setSummaryHeight] = useState(1);

  // Temp Container Style
  const animatedTempContainerStyle = useAnimatedStyle(() => {
    const newValue = Math.min(scrollValue.value, MAX_SCROLL_VALUE);

    const paddingTop = interpolate(newValue, [0, MAX_SCROLL_VALUE], [SCALE_WEATHER_HEADER_ICON_SIZE, 0]);

    return { paddingTop };
  });

  const iconScale = Math.round((SCALE_WEATHER_HEADER_ICON_SIZE / WEATHER_HEADER_ICON_SIZE) * 100) * 0.01;

  // Weather Icon Position Style
  const animatedWeatherIconPositionStyle = useAnimatedStyle(() => {
    const newValue = Math.min(scrollValue.value, MAX_SCROLL_VALUE);

    const scaleWidthOffset = -(WEATHER_HEADER_ICON_SIZE * (iconScale - 1)) / 2;
    const scaleHeightOffset = (WEATHER_HEADER_ICON_SIZE * (iconScale - 1)) / 2;
    const centerOffset = -(containerWidth - iconScale * WEATHER_HEADER_ICON_SIZE) / 2;

    const translateX = interpolate(newValue, [0, MAX_SCROLL_VALUE], [scaleWidthOffset + centerOffset, 0]);
    const paddingTop = interpolate(newValue, [0, MAX_SCROLL_VALUE], [scaleHeightOffset, 0]);

    return { translateX, paddingTop };
  });

  // Weather Icon Scale Style
  const animatedWeatherIconScaleStyle = useAnimatedStyle(() => {
    const newValue = Math.min(scrollValue.value, MAX_SCROLL_VALUE);

    const scale = interpolate(newValue, [0, MAX_SCROLL_VALUE], [iconScale, 1]);

    return { transform: [{ scale }] };
  });

  const tempScale =
    Math.round(Math.min(SCALE_CURRENT_TEMP_SIZE / CURRENT_TEMP_SIZE, containerWidth / tempSectionWidth) * 100) * 0.01;

  // Temp Position Style
  const animatedTempPositionStyle = useAnimatedStyle(() => {
    const newValue = Math.min(scrollValue.value, MAX_SCROLL_VALUE);

    const scaleWidthOffset = (tempSectionWidth * (tempScale - 1)) / 2;
    const scaleHeightOffset = (tempSectionHeight * (tempScale - 1)) / 2;
    const centerOffset = (containerWidth - tempScale * tempSectionWidth) / 2;

    const translateX = interpolate(newValue, [0, MAX_SCROLL_VALUE], [scaleWidthOffset + centerOffset, 0]);
    const paddingY = interpolate(newValue, [0, MAX_SCROLL_VALUE], [scaleHeightOffset, 0]);

    return { translateX, paddingTop: paddingY, paddingBottom: paddingY };
  });

  // Temp Scale Style
  const animatedTempScaleStyle = useAnimatedStyle(() => {
    const newValue = Math.min(scrollValue.value, MAX_SCROLL_VALUE);

    const scale = interpolate(newValue, [0, MAX_SCROLL_VALUE], [tempScale, 1]);

    return { transform: [{ scale }] };
  });

  const summaryScale =
    Math.round(Math.min(SCALE_SUMMARY_SIZE / SUMMARY_SIZE, containerWidth / summaryWidth) * 100) * 0.01;

  // Summary Position Style
  const animatedSummaryPositionStyle = useAnimatedStyle(() => {
    const newValue = Math.min(scrollValue.value, MAX_SCROLL_VALUE);

    const scaleWidthOffset = (summaryWidth * (summaryScale - 1)) / 2;
    const scaleHeightOffset = (summaryHeight * (summaryScale - 1)) / 2;
    const centerOffset = (containerWidth - summaryScale * summaryWidth) / 2;

    const translateX = interpolate(newValue, [0, MAX_SCROLL_VALUE], [scaleWidthOffset + centerOffset, 0]);
    const marginBottom = interpolate(newValue, [0, MAX_SCROLL_VALUE], [scaleHeightOffset, 0]);

    return { translateX, marginBottom };
  });

  // Summary Scale Style
  const animatedSummaryScaleStyle = useAnimatedStyle(() => {
    const newValue = Math.min(scrollValue.value, MAX_SCROLL_VALUE);

    const scale = interpolate(newValue, [0, MAX_SCROLL_VALUE], [summaryScale, 1]);

    return { transform: [{ scale }] };
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
            const newWidth = Math.floor(e.nativeEvent.layout.width);
            if (newWidth) setContainerWidth(newWidth);
          }}
        >
          {/* 날씨 아이콘 */}
          <View className="absolute right-0 top-0">
            <Animated.View style={animatedWeatherIconPositionStyle}>
              <Animated.View style={animatedWeatherIconScaleStyle}>
                <View style={{ width: WEATHER_HEADER_ICON_SIZE, height: WEATHER_HEADER_ICON_SIZE }}>
                  <WeatherIcon icon={current?.weather[0].icon} />
                </View>
              </Animated.View>
            </Animated.View>
          </View>
          {/* 기온 */}
          <View className="flex flex-row">
            <Animated.View style={animatedTempPositionStyle}>
              <Animated.View
                className="flex flex-row items-center gap-3 px-1"
                style={animatedTempScaleStyle}
                onLayout={e => {
                  const newWidth = Math.floor(e.nativeEvent.layout.width);
                  const newHeight = Math.floor(e.nativeEvent.layout.height);
                  if (newWidth) setTempSectionWidth(newWidth);
                  if (newHeight) setTempSectionHeight(newHeight);
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
          {/* 요약 */}
          <View className="flex flex-row">
            <Animated.View style={animatedSummaryPositionStyle}>
              <Animated.View
                className="rounded-xl bg-weather-summary px-4 py-2"
                style={animatedSummaryScaleStyle}
                onLayout={e => {
                  const newWidth = Math.floor(e.nativeEvent.layout.width);
                  const newHeight = Math.floor(e.nativeEvent.layout.height);
                  if (newWidth) setSummaryWidth(newWidth);
                  if (newHeight) setSummaryHeight(newHeight);
                }}
              >
                <PretendardText
                  typo="body-1"
                  className="text-white"
                >
                  오늘 오후 4시에 비가 올 예정이에요!
                </PretendardText>
              </Animated.View>
            </Animated.View>
          </View>
        </Animated.View>
      </View>
    </View>
  );
}
