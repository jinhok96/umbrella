import { useState } from 'react';

import TestSection from '@components/TestSection';
import { HOME_NAVIGATION_TEST_ID_LIST } from '@navigation/home/HomeNavigation.const';
import HomeScreenWrapper from '@screens/HomeScreen/_components/HomeScreenWrapper';
import HourlyForecastScreenHeader from '@screens/HomeScreen/HourlyForecastScreen/_components/HourlyForecastScreenHeader';

import type { ForecastsGraphSelectedIndex } from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraphSectionWrapper.type';

export default function HourlyForecastScreen() {
  const [selectedIndex, setSelectedIndex] = useState<ForecastsGraphSelectedIndex>();

  return (
    <HomeScreenWrapper testID={HOME_NAVIGATION_TEST_ID_LIST.HourlyForecast}>
      <HourlyForecastScreenHeader
        selectedIndex={selectedIndex}
        onSelectedIndexChange={setSelectedIndex}
      />
      <TestSection />
    </HomeScreenWrapper>
  );
}
