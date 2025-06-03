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
  MAX_CURRENT_TEMP_SIZE,
  MAX_SUMMARY_SIZE,
  MAX_WEATHER_HEADER_HEIGHT,
  MAX_WEATHER_HEADER_ICON_SIZE,
  MIN_CURRENT_TEMP_SIZE,
  MIN_SUMMARY_SIZE,
  MIN_WEATHER_HEADER_HEIGHT,
  MIN_WEATHER_HEADER_ICON_SIZE,
} from '@screens/HomeScreen/_components/weatherInfoHeader/WeatherInfoHeader.const';

type WeatherInfoHeaderProps = Omit<ViewProps, 'className'> & {
  scrollValue: SharedValue<number>;
};

const MAX_SCROLL_VALUE = MAX_WEATHER_HEADER_HEIGHT - MIN_WEATHER_HEADER_HEIGHT;

/**
 * 현재 위치 날씨 정보를 보여주는 컴포넌트
 * @jinhok96 25.06.03
 */
export default function WeatherInfoHeader({ scrollValue, ...props }: WeatherInfoHeaderProps) {
  const [tempSectionContainerWidth, setTempSectionContainerWidth] = useState(0);
  const [weatherIconWidth, setWeatherIconWidth] = useState(0);
  const [tempSectionWidth, setTempSectionWidth] = useState(0);
  const [summaryWidth, setSummaryWidth] = useState(0);

  // Temp Container Style
  const animatedTempContainerStyle = useAnimatedStyle(() => {
    const newValue = Math.min(scrollValue.value, MAX_SCROLL_VALUE);

    const paddingTop = interpolate(newValue, [0, MAX_SCROLL_VALUE], [MAX_WEATHER_HEADER_ICON_SIZE, 0]);

    return { paddingTop };
  });

  // Weather Icon Scale Style
  const animatedWeatherIconScaleStyle = useAnimatedStyle(() => {
    const newValue = Math.min(scrollValue.value, MAX_SCROLL_VALUE);

    const scale = interpolate(
      newValue,
      [0, MAX_SCROLL_VALUE],
      [MAX_WEATHER_HEADER_ICON_SIZE / MIN_WEATHER_HEADER_ICON_SIZE, 1],
    );

    return { transform: [{ scale }] };
  });

  // Weather Icon Position Style
  const animatedWeatherIconPositionStyle = useAnimatedStyle(() => {
    const newValue = Math.min(scrollValue.value, MAX_SCROLL_VALUE);

    const offset = 5;

    const translateX = interpolate(
      newValue,
      [0, MAX_SCROLL_VALUE],
      [
        -(
          (tempSectionContainerWidth - weatherIconWidth - offset) / 2 -
          (MAX_WEATHER_HEADER_ICON_SIZE - MIN_WEATHER_HEADER_ICON_SIZE)
        ),
        0,
      ],
    );

    const paddingTop = interpolate(newValue, [0, MAX_SCROLL_VALUE], [20, 0]);

    return { translateX, paddingTop };
  });

  // Temp Scale Style
  const animatedTempScaleStyle = useAnimatedStyle(() => {
    const newValue = Math.min(scrollValue.value, MAX_SCROLL_VALUE);

    const scale = interpolate(newValue, [0, MAX_SCROLL_VALUE], [MAX_CURRENT_TEMP_SIZE / MIN_CURRENT_TEMP_SIZE, 1]);

    return { transform: [{ scale }] };
  });

  // Temp Position Style
  const animatedTempPositionStyle = useAnimatedStyle(() => {
    const newValue = Math.min(scrollValue.value, MAX_SCROLL_VALUE);

    const offset = 4;

    const translateX = interpolate(
      newValue,
      [0, MAX_SCROLL_VALUE],
      [
        (tempSectionContainerWidth - tempSectionWidth) / 2 -
          (MAX_CURRENT_TEMP_SIZE - MIN_CURRENT_TEMP_SIZE) * 2 -
          offset,
        0,
      ],
    );

    const padding = interpolate(
      newValue,
      [0, MAX_SCROLL_VALUE],
      [(MAX_CURRENT_TEMP_SIZE - MIN_CURRENT_TEMP_SIZE) / 2, 0],
    );

    return { translateX, padding };
  });

  // Summary Scale Style
  const animatedSummaryScaleStyle = useAnimatedStyle(() => {
    const newValue = Math.min(scrollValue.value, MAX_SCROLL_VALUE);

    const scale = interpolate(newValue, [0, MAX_SCROLL_VALUE], [MAX_SUMMARY_SIZE / MIN_SUMMARY_SIZE, 1]);

    return { transform: [{ scale }] };
  });

  // Summary Position Style
  const animatedSummaryPositionStyle = useAnimatedStyle(() => {
    const newValue = Math.min(scrollValue.value, MAX_SCROLL_VALUE);

    const translateX = interpolate(
      newValue,
      [0, MAX_SCROLL_VALUE],
      [(tempSectionContainerWidth - summaryWidth) / 2, 0],
    );

    const marginBottom = interpolate(newValue, [0, MAX_SCROLL_VALUE], [MAX_SUMMARY_SIZE / MIN_SUMMARY_SIZE, 0]);

    return { translateX, marginBottom };
  });

  return (
    <View
      {...props}
      className="pt-safe absolute top-0 z-10 bg-morning transition-[max-height]"
    >
      <LocationHeader />
      <View className="px-5 pb-7 pt-5">
        <Animated.View
          className="relative flex gap-2"
          onLayout={e => setTempSectionContainerWidth(e.nativeEvent.layout.width)}
          style={animatedTempContainerStyle}
        >
          {/* 날씨 아이콘 */}
          <Animated.View className="absolute right-0 top-0">
            <Animated.View style={animatedWeatherIconScaleStyle}>
              <Animated.View style={animatedWeatherIconPositionStyle}>
                <View
                  style={{ width: MIN_WEATHER_HEADER_ICON_SIZE, height: MIN_WEATHER_HEADER_ICON_SIZE }}
                  onLayout={e => setWeatherIconWidth(e.nativeEvent.layout.width)}
                >
                  <WeatherIcon icon="02d" />
                </View>
              </Animated.View>
            </Animated.View>
          </Animated.View>
          {/* 기온 */}
          <View className="flex flex-row">
            <Animated.View style={animatedTempScaleStyle}>
              <Animated.View
                className="flex flex-row items-center gap-3 px-1"
                onLayout={e => setTempSectionWidth(e.nativeEvent.layout.width)}
                style={animatedTempPositionStyle}
              >
                <MontserratText
                  typo="title-1"
                  className="text-white"
                >
                  18°
                </MontserratText>
                <View className="flex flex-row items-center gap-2">
                  <View className="flex flex-row items-center gap-1">
                    <PretendardText
                      typo="caption-3"
                      className="pb-[0.1875rem] text-white"
                    >
                      최저
                    </PretendardText>
                    <MontserratText
                      typo="caption-3"
                      className="text-white"
                    >
                      8°
                    </MontserratText>
                  </View>
                  <View className="h-3 border-r border-white opacity-40" />
                  <View className="flex flex-row items-center gap-1">
                    <PretendardText
                      typo="caption-3"
                      className="pb-[0.1875rem] text-white"
                    >
                      최고
                    </PretendardText>
                    <MontserratText
                      typo="caption-3"
                      className="text-white"
                    >
                      20°
                    </MontserratText>
                  </View>
                </View>
              </Animated.View>
            </Animated.View>
          </View>
          {/* 요약 */}
          <Animated.View
            className="flex flex-row"
            style={animatedSummaryScaleStyle}
          >
            <PretendardText
              animate
              typo="body-1"
              className="rounded-xl bg-weather-summary px-4 py-2 text-white"
              style={animatedSummaryPositionStyle}
              onLayout={e => setSummaryWidth(e.nativeEvent.layout.width)}
            >
              오늘 오후 4시에 비가 올 예정이에요!
            </PretendardText>
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
}
