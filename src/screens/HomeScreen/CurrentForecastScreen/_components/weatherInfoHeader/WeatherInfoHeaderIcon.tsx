import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import WeatherIcon from '@components/icon/WeatherIcon';
import { useForecastsStore } from '@store/forecastsStore/useForecastsStore';

type WeatherInfoHeaderIconProps = Omit<ViewProps, 'className'>;

/**
 * `WeatherInfoHeader` 날씨 아이콘 컴포넌트
 * @jinhok96 25.06.05
 */
export default function WeatherInfoHeaderIcon({ ...props }: WeatherInfoHeaderIconProps) {
  const current = useForecastsStore(state => state.current);

  if (!current) return <></>;

  return (
    <View
      {...props}
      className="size-[5.25rem]"
    >
      <WeatherIcon icon={current?.weather[0].icon} />
    </View>
  );
}
