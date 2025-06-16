import DailyForecastsGraphSection from '@screens/HomeScreen/_components/forecastsGraphSection/DailyForecastsGraphSection';
import HomeScreenHeaderWrapper from '@screens/HomeScreen/_components/homeScreenHeaderWrapper/HomeScreenHeaderWrapper';

import type { DailyForecastsGraphSectionProps } from '@screens/HomeScreen/_components/forecastsGraphSection/DailyForecastsGraphSection.type';
import type { HomeScreenHeaderWrapperProps } from '@screens/HomeScreen/_components/homeScreenHeaderWrapper/HomeScreenHeaderWrapper.type';

type DailyForecastScreenHeaderProps = Omit<HomeScreenHeaderWrapperProps, 'className'> &
  Pick<DailyForecastsGraphSectionProps, 'selectedIndex' | 'onSelectedIndexChange'>;

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
      <DailyForecastsGraphSection
        className="pt-5"
        selectedIndex={selectedIndex}
        onSelectedIndexChange={onSelectedIndexChange}
        hideHeader
      />
    </HomeScreenHeaderWrapper>
  );
}
