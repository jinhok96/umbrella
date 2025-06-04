import { useState } from 'react';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import type { SharedValue } from 'react-native-reanimated';
import Animated, { interpolate, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import LocationHeader from '@screens/HomeScreen/_components/weatherInfoHeader/LocationHeader';
import {
  WEATHER_HEADER_HEIGHT,
  WEATHER_HEADER_HEIGHT_SCALE,
  WEATHER_HEADER_ICON_SIZE_SCALE,
  WEATHER_INFO_HEADER_ANIMATION_DURATION,
} from '@screens/HomeScreen/_components/weatherInfoHeader/WeatherInfoHeader.const';
import WeatherInfoHeaderIcon from '@screens/HomeScreen/_components/weatherInfoHeader/WeatherInfoHeaderIcon';
import WeatherInfoHeaderSummary from '@screens/HomeScreen/_components/weatherInfoHeader/WeatherInfoHeaderSummary';
import WeatherInfoHeaderTempSection from '@screens/HomeScreen/_components/weatherInfoHeader/WeatherInfoHeaderTempSection';

type WeatherInfoHeaderProps = Omit<ViewProps, 'className'> & {
  scrollValue: SharedValue<number>;
};

/**
 * 현재 위치 날씨 정보를 보여주는 컴포넌트
 * @jinhok96 25.06.04
 */
export default function WeatherInfoHeader({ scrollValue, ...props }: WeatherInfoHeaderProps) {
  const [containerWidth, setContainerWidth] = useState(1);

  const MAX_SCROLL_VALUE = WEATHER_HEADER_HEIGHT_SCALE - WEATHER_HEADER_HEIGHT;

  // Temp Container Style
  const animatedTempContainerStyle = useAnimatedStyle(() => {
    const paddingTop = interpolate(
      scrollValue.value,
      [0, MAX_SCROLL_VALUE],
      [WEATHER_HEADER_ICON_SIZE_SCALE, 0],
      'clamp',
    );

    return {
      paddingTop: withTiming(paddingTop, {
        duration: WEATHER_INFO_HEADER_ANIMATION_DURATION,
      }),
    };
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
          style={animatedTempContainerStyle}
          onLayout={e => {
            const newWidth = e.nativeEvent.layout.width;
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
