import { useRef } from 'react';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import Animated, { interpolate, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import MontserratText from '@components/fontText/MontserratText';
import PretendardText from '@components/fontText/PretendardText';
import {
  CURRENT_TEMP_SIZE,
  CURRENT_TEMP_SIZE_SCALE,
  MAX_SCROLL_VALUE,
  WEATHER_INFO_HEADER_ANIMATION_DURATION,
} from '@screens/HomeScreen/_components/weatherInfoHeader/WeatherInfoHeader.const';
import { useForecastsStore } from '@store/forecastsStore/useForecastsStore';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { LocalizedTextMap } from '@libs/utils/localize/localize.type';
import type { WeatherInfoHeaderProps } from '@screens/HomeScreen/_components/weatherInfoHeader/WeatherInfoHeader.type';

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
  const current = useForecastsStore(state => state.current);
  const daily = useForecastsStore(state => state.daily);
  const lang = useSettingStore(state => state.lang);
  const width = useRef(1);
  const height = useRef(1);

  const maxScale = Math.min(
    Math.max((CURRENT_TEMP_SIZE_SCALE / CURRENT_TEMP_SIZE) * 0.8, 1),
    containerWidth / width.current,
  );

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

    return {
      translateX: withTiming(translateX, {
        duration: WEATHER_INFO_HEADER_ANIMATION_DURATION,
      }),
      paddingTop: withTiming(paddingY, {
        duration: WEATHER_INFO_HEADER_ANIMATION_DURATION,
      }),
      paddingBottom: withTiming(paddingY, {
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
