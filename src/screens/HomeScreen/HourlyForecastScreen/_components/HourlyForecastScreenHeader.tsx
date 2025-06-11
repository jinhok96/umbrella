import { View } from 'react-native';

import HomeScreenHeaderWrapper from '@screens/HomeScreen/_components/homeScreenHeaderWrapper/HomeScreenHeaderWrapper';
import HourlyForecastsGraphSection from '@screens/HomeScreen/CurrentForecastScreen/_components/forecastsGraphSection/HourlyForecastsGraphSection';

import type { ForecastsGraphSectionWrapperProps } from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraphSectionWrapper.type';
import type { HomeScreenHeaderWrapperProps } from '@screens/HomeScreen/_components/homeScreenHeaderWrapper/HomeScreenHeaderWrapper.type';

type HourlyForecastScreenHeaderProps = Omit<HomeScreenHeaderWrapperProps, 'className'> &
  Pick<ForecastsGraphSectionWrapperProps, 'selectedIndex' | 'onSelectedIndexChange'>;

/**
 * HourlyForecastScreen의 그래프 헤더
 * @jinhok96 25.06.11
 */
export default function HourlyForecastScreenHeader({
  selectedIndex,
  onSelectedIndexChange,
  ...props
}: HourlyForecastScreenHeaderProps) {
  return (
    <HomeScreenHeaderWrapper
      {...props}
      className="bg-background-02"
    >
      <View className="pt-5">
        <HourlyForecastsGraphSection
          selectedIndex={selectedIndex}
          onSelectedIndexChange={onSelectedIndexChange}
          hideHeader
        />
      </View>
    </HomeScreenHeaderWrapper>
  );
}
