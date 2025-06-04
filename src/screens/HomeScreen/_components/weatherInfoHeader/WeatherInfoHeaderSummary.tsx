import { useRef } from 'react';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import Animated, { interpolate, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import PretendardText from '@components/fontText/PretendardText';
import {
  MAX_SCROLL_VALUE,
  SUMMARY_SIZE,
  SUMMARY_SIZE_SCALE,
  WEATHER_INFO_HEADER_ANIMATION_DURATION,
} from '@screens/HomeScreen/_components/weatherInfoHeader/WeatherInfoHeader.const';

import type { WeatherInfoHeaderProps } from '@screens/HomeScreen/_components/weatherInfoHeader/WeatherInfoHeader.type';

type WeatherInfoHeaderTempSectionProps = Omit<ViewProps, 'className'> &
  Pick<WeatherInfoHeaderProps, 'scrollValue'> & {
    containerWidth: number;
  };

/**
 * `WeatherInfoHeader` 오늘 날씨 요약 컴포넌트
 * @jinhok96 25.06.04
 */
export default function WeatherInfoHeaderSummary({
  scrollValue,
  containerWidth,
  ...props
}: WeatherInfoHeaderTempSectionProps) {
  const width = useRef(1);
  const height = useRef(1);

  const maxScale = Math.min(SUMMARY_SIZE_SCALE / SUMMARY_SIZE, containerWidth / width.current);

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
    const marginBottom = interpolate(scrollValue.value, [0, MAX_SCROLL_VALUE], [scaleHeightOffset, 0], 'clamp');

    return {
      translateX: withTiming(translateX, {
        duration: WEATHER_INFO_HEADER_ANIMATION_DURATION,
      }),
      marginBottom: withTiming(marginBottom, {
        duration: WEATHER_INFO_HEADER_ANIMATION_DURATION,
      }),
    };
  });

  // Scale Style
  const animatedScaleStyle = useAnimatedStyle(() => {
    const scale = interpolate(scrollValue.value, [0, MAX_SCROLL_VALUE], [maxScale, 1], 'clamp');

    return {
      transform: [
        {
          scale: withTiming(scale, {
            duration: WEATHER_INFO_HEADER_ANIMATION_DURATION,
          }),
        },
      ],
    };
  });

  return (
    <View
      {...props}
      className="flex flex-row"
    >
      <Animated.View style={animatedPositionStyle}>
        <PretendardText
          animate
          typo="body-1"
          className="rounded-xl bg-weather-summary px-4 py-2 text-white"
          style={animatedScaleStyle}
          onLayout={e => {
            const newWidth = Math.floor(e.nativeEvent.layout.width * 100) * 0.01;
            const newHeight = Math.floor(e.nativeEvent.layout.height * 100) * 0.01;
            if (newWidth) width.current = newWidth;
            if (newHeight) height.current = newHeight;
          }}
        >
          오늘 오후 4시에 비가 올 예정이에요!
        </PretendardText>
      </Animated.View>
    </View>
  );
}
