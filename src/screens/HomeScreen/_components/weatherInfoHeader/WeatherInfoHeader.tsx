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
  MAX_WEATHER_HEADER_HEIGHT,
  MAX_WEATHER_HEADER_ICON_SIZE,
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

    const paddingTop = Math.floor(interpolate(newValue, [0, MAX_SCROLL_VALUE], [MAX_WEATHER_HEADER_ICON_SIZE, 0]));

    return { paddingTop };
  });

  // Weather Icon Style
  const animatedWeatherIconStyle = useAnimatedStyle(() => {
    const newValue = Math.min(scrollValue.value, MAX_SCROLL_VALUE);

    const size = Math.floor(
      interpolate(newValue, [0, MAX_SCROLL_VALUE], [MAX_WEATHER_HEADER_ICON_SIZE, MIN_WEATHER_HEADER_ICON_SIZE]),
    );
    const translateX = Math.floor(
      interpolate(
        newValue,
        [0, MAX_SCROLL_VALUE],
        [(tempSectionContainerWidth - weatherIconWidth) / 2, tempSectionContainerWidth - weatherIconWidth],
      ),
    );

    return { width: size, height: size, translateX };
  });

  // Temp Section Style
  const animatedTempSectionStyle = useAnimatedStyle(() => {
    const newValue = Math.min(scrollValue.value, MAX_SCROLL_VALUE);

    const translateX = Math.floor(
      interpolate(newValue, [0, MAX_SCROLL_VALUE], [(tempSectionContainerWidth - tempSectionWidth) / 2, 0]),
    );

    return { translateX };
  });

  // Current Temp Style
  const animatedCurrentTempStyle = useAnimatedStyle(() => {
    const newValue = Math.min(scrollValue.value, MAX_SCROLL_VALUE);

    const fontSize = Math.floor(interpolate(newValue, [0, MAX_SCROLL_VALUE], [52, 32]));

    return { fontSize };
  });

  // Summary Style
  const animatedSummaryStyle = useAnimatedStyle(() => {
    const newValue = Math.min(scrollValue.value, MAX_SCROLL_VALUE);

    const fontSize = Math.floor(interpolate(newValue, [0, MAX_SCROLL_VALUE], [16, 14]));
    const translateX = Math.floor(
      interpolate(newValue, [0, MAX_SCROLL_VALUE], [(tempSectionContainerWidth - summaryWidth) / 2, 0]),
    );

    return { fontSize, translateX };
  });

  return (
    <View
      {...props}
      className="pt-safe absolute top-0 z-10 bg-morning transition-[max-height]"
    >
      <LocationHeader />
      <View className="px-5 pb-7 pt-5">
        <Animated.View
          className="relative"
          onLayout={e => setTempSectionContainerWidth(e.nativeEvent.layout.width)}
          style={animatedTempContainerStyle}
        >
          {/* 날씨 아이콘 */}
          <Animated.View
            className="absolute top-0"
            onLayout={e => setWeatherIconWidth(e.nativeEvent.layout.width)}
            style={animatedWeatherIconStyle}
          >
            <WeatherIcon icon="02d" />
          </Animated.View>
          {/* 기온 */}
          <View className="flex flex-row">
            <Animated.View
              className="flex flex-row items-center gap-3 px-1"
              onLayout={e => setTempSectionWidth(e.nativeEvent.layout.width)}
              style={animatedTempSectionStyle}
            >
              <MontserratText
                animate
                typo="title-1"
                className="text-white"
                style={animatedCurrentTempStyle}
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
          </View>
          {/* 요약 */}
          <View className="flex flex-row">
            <PretendardText
              animate
              typo="body-1"
              className="rounded-xl bg-weather-summary px-4 py-2 text-white"
              style={animatedSummaryStyle}
              onLayout={e => setSummaryWidth(e.nativeEvent.layout.width)}
            >
              오늘 오후 4시에 비가 올 예정이에요!
            </PretendardText>
          </View>
        </Animated.View>
      </View>
    </View>
  );
}
