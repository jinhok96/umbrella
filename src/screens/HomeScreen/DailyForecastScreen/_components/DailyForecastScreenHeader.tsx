import { View } from 'react-native';

import HomeScreenHeaderWrapper from '@screens/HomeScreen/_components/homeScreenHeaderWrapper/HomeScreenHeaderWrapper';
import DailyForecastsGraphSection from '@screens/HomeScreen/CurrentForecastScreen/_components/forecastsGraphSection/DailyForecastsGraphSection';

import type { ForecastsGraphSectionWrapperProps } from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraphSectionWrapper.type';
import type { HomeScreenHeaderWrapperProps } from '@screens/HomeScreen/_components/homeScreenHeaderWrapper/HomeScreenHeaderWrapper.type';

type DailyForecastScreenHeaderProps = Omit<HomeScreenHeaderWrapperProps, 'className'> &
  Pick<ForecastsGraphSectionWrapperProps, 'selectedIndex' | 'onSelectedIndexChange'>;

/**
 * DailyForecastScreen의 그래프 헤더
 * @jinhok96 25.06.11
 */
export default function DailyForecastScreenHeader({
  selectedIndex,
  onSelectedIndexChange,
  ...props
}: DailyForecastScreenHeaderProps) {
  return (
    <HomeScreenHeaderWrapper
      {...props}
      className="bg-background-02"
    >
      <View className="pt-5">
        <DailyForecastsGraphSection
          selectedIndex={selectedIndex}
          onSelectedIndexChange={onSelectedIndexChange}
          hideHeader
        />
      </View>
    </HomeScreenHeaderWrapper>
  );
}
