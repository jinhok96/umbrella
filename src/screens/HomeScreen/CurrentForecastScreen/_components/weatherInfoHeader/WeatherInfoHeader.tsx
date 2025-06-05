import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import LocationHeader from '@screens/HomeScreen/_components/locationHeader/LocationHeader';
import WeatherInfoHeaderIcon from '@screens/HomeScreen/CurrentForecastScreen/_components/weatherInfoHeader/WeatherInfoHeaderIcon';
import WeatherInfoHeaderSummary from '@screens/HomeScreen/CurrentForecastScreen/_components/weatherInfoHeader/WeatherInfoHeaderSummary';
import WeatherInfoHeaderTempSection from '@screens/HomeScreen/CurrentForecastScreen/_components/weatherInfoHeader/WeatherInfoHeaderTempSection';

type WeatherInfoHeaderProps = Omit<ViewProps, 'className'>;

/**
 * 현재 위치 날씨 정보를 보여주는 컴포넌트
 * @jinhok96 25.06.05
 */
export default function WeatherInfoHeader({ ...props }: WeatherInfoHeaderProps) {
  return (
    <View
      {...props}
      className="pt-safe bg-morning transition-[max-height]"
    >
      <LocationHeader />
      <View className="flex flex-row justify-between gap-2 px-5 pb-7 pt-5">
        <View className="flex gap-1">
          {/* 기온 */}
          <WeatherInfoHeaderTempSection />
          {/* 요약 */}
          <WeatherInfoHeaderSummary />
        </View>
        {/* 날씨 아이콘 */}
        <WeatherInfoHeaderIcon />
      </View>
    </View>
  );
}
