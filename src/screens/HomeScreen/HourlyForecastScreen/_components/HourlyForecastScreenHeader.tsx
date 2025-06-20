import HourlyForecastsGraphSection from '@screens/HomeScreen/_components/forecastsGraphSection/HourlyForecastsGraphSection';
import HomeScreenHeaderWrapper from '@screens/HomeScreen/_components/homeScreenHeaderWrapper/HomeScreenHeaderWrapper';

import type { HourlyForecastsGraphSectionProps } from '@screens/HomeScreen/_components/forecastsGraphSection/HourlyForecastsGraphSection.type';
import type { HomeScreenHeaderWrapperProps } from '@screens/HomeScreen/_components/homeScreenHeaderWrapper/HomeScreenHeaderWrapper.type';

type HourlyForecastScreenHeaderProps = Omit<HomeScreenHeaderWrapperProps, 'className'> &
  Pick<HourlyForecastsGraphSectionProps, 'selectedIndex' | 'onSelectedIndexChange'>;

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
      <HourlyForecastsGraphSection
        className="pt-5"
        selectedIndex={selectedIndex}
        onSelectedIndexChange={onSelectedIndexChange}
        hideHeader
      />
    </HomeScreenHeaderWrapper>
  );
}
