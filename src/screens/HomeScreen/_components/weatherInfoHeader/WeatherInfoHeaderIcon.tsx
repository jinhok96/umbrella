import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import Animated, { interpolate, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import WeatherIcon from '@components/icon/WeatherIcon';
import {
  MAX_SCROLL_VALUE,
  WEATHER_HEADER_ICON_SIZE,
  WEATHER_HEADER_ICON_SIZE_SCALE,
  WEATHER_INFO_HEADER_ANIMATION_DURATION,
} from '@screens/HomeScreen/_components/weatherInfoHeader/WeatherInfoHeader.const';

import type { WeatherInfoHeaderProps } from '@screens/HomeScreen/_components/weatherInfoHeader/WeatherInfoHeader.type';
import type { ForecastsStoreState } from '@store/forecastsStore/useForecastsStore.type';

// 목 데이터: useForecastsStore(state => state.current);
const current: ForecastsStoreState['current'] = {
  dt: 1684929490,
  sunrise: 1684926645,
  sunset: 1684977364,
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

type WeatherInfoHeaderIconProps = Omit<ViewProps, 'className'> &
  Pick<WeatherInfoHeaderProps, 'scrollValue'> & {
    containerWidth: number;
  };

const maxScale = WEATHER_HEADER_ICON_SIZE_SCALE / WEATHER_HEADER_ICON_SIZE;

/**
 * `WeatherInfoHeader` 날씨 아이콘 컴포넌트
 * @jinhok96 25.06.04
 */
export default function WeatherInfoHeaderIcon({ scrollValue, containerWidth, ...props }: WeatherInfoHeaderIconProps) {
  // Position Style
  const animatedPositionStyle = useAnimatedStyle(() => {
    const scaleWidthOffset = -(WEATHER_HEADER_ICON_SIZE * (maxScale - 1)) * 0.5;
    const scaleHeightOffset = WEATHER_HEADER_ICON_SIZE * (maxScale - 1) * 0.5;
    const centerOffset = -(containerWidth - maxScale * WEATHER_HEADER_ICON_SIZE) * 0.5;

    const translateX = interpolate(
      scrollValue.value,
      [0, MAX_SCROLL_VALUE],
      [scaleWidthOffset + centerOffset, 0],
      'clamp',
    );
    const paddingTop = interpolate(scrollValue.value, [0, MAX_SCROLL_VALUE], [scaleHeightOffset, 0], 'clamp');

    return {
      translateX: withTiming(translateX, {
        duration: WEATHER_INFO_HEADER_ANIMATION_DURATION,
      }),
      paddingTop: withTiming(paddingTop, {
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

  if (!current) return <></>;

  return (
    <View
      {...props}
      className="absolute right-0 top-0"
    >
      <Animated.View style={animatedPositionStyle}>
        <Animated.View style={animatedScaleStyle}>
          <View style={{ width: WEATHER_HEADER_ICON_SIZE, height: WEATHER_HEADER_ICON_SIZE }}>
            <WeatherIcon icon={current?.weather[0].icon} />
          </View>
        </Animated.View>
      </Animated.View>
    </View>
  );
}
