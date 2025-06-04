import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';

import WeatherIcon from '@components/icon/WeatherIcon';
import {
  MAX_SCROLL_VALUE,
  WEATHER_HEADER_ICON_SIZE,
  WEATHER_HEADER_ICON_SIZE_SCALE,
} from '@screens/HomeScreen/_components/weatherInfoHeader/WeatherInfoHeader.const';

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

type WeatherInfoHeaderIconProps = Omit<ViewProps, 'className'> &
  Pick<WeatherInfoHeaderProps, 'scrollValue'> & {
    containerWidth: number;
  };

/**
 * `WeatherInfoHeader` 날씨 아이콘 컴포넌트
 * @jinhok96 25.06.04
 */
export default function WeatherInfoHeaderIcon({ scrollValue, containerWidth, ...props }: WeatherInfoHeaderIconProps) {
  const maxScale = Math.round((WEATHER_HEADER_ICON_SIZE_SCALE / WEATHER_HEADER_ICON_SIZE) * 100) * 0.01;

  // Position Style
  const animatedPositionStyle = useAnimatedStyle(() => {
    const newValue = Math.min(scrollValue.value, MAX_SCROLL_VALUE);

    const scaleWidthOffset = -(WEATHER_HEADER_ICON_SIZE * (maxScale - 1)) * 0.5;
    const scaleHeightOffset = WEATHER_HEADER_ICON_SIZE * (maxScale - 1) * 0.5;
    const centerOffset = -(containerWidth - maxScale * WEATHER_HEADER_ICON_SIZE) * 0.5;

    const translateX = interpolate(newValue, [0, MAX_SCROLL_VALUE], [scaleWidthOffset + centerOffset, 0]);
    const paddingTop = interpolate(newValue, [0, MAX_SCROLL_VALUE], [scaleHeightOffset, 0]);

    return { translateX, paddingTop };
  });

  // Scale Style
  const animatedScaleStyle = useAnimatedStyle(() => {
    const newValue = Math.min(scrollValue.value, MAX_SCROLL_VALUE);

    const scale = interpolate(newValue, [0, MAX_SCROLL_VALUE], [maxScale, 1]);

    return { transform: [{ scale }] };
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
