import { useState } from 'react';

import TestSection from '@components/TestSection';
import { HOME_NAVIGATION_TEST_ID_LIST } from '@navigation/home/HomeNavigation.const';
import HomeScreenWrapper from '@screens/HomeScreen/_components/HomeScreenWrapper';
import DailyForecastScreenHeader from '@screens/HomeScreen/DailyForecastScreen/_components/DailyForecastScreenHeader';

import type { ForecastsGraphSelectedIndex } from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraphSectionWrapper.type';

export default function DailyForecastScreen() {
  const [selectedIndex, setSelectedIndex] = useState<ForecastsGraphSelectedIndex>();

  return (
    <HomeScreenWrapper testID={HOME_NAVIGATION_TEST_ID_LIST.DailyForecast}>
      <DailyForecastScreenHeader
        selectedIndex={selectedIndex}
        onSelectedIndexChange={setSelectedIndex}
      />
      <TestSection />
    </HomeScreenWrapper>
  );
}
