import { useState } from 'react';
import { View } from 'react-native';

import { HOME_NAVIGATION_TEST_ID_LIST } from '@navigation/home/HomeNavigation.const';
import HomeScreenWrapper from '@screens/HomeScreen/_components/HomeScreenWrapper';
import DailyForecastScreenHeader from '@screens/HomeScreen/DailyForecastScreen/_components/DailyForecastScreenHeader';
import DailyForecastScreenWeatherDetailCardSection from '@screens/HomeScreen/DailyForecastScreen/_components/DailyForecastScreenWeatherDetailCardSection';

import type { ForecastsGraphSelectedIndex } from '@screens/HomeScreen/_components/forecastsGraphSection/wrapper/ForecastsGraphSectionWrapper.type';

export default function DailyForecastScreen() {
  const [selectedIndex, setSelectedIndex] = useState<ForecastsGraphSelectedIndex>(null);

  return (
    <View className="flex-1">
      <DailyForecastScreenHeader
        selectedIndex={selectedIndex}
        onSelectedIndexChange={setSelectedIndex}
      />
      <HomeScreenWrapper testID={HOME_NAVIGATION_TEST_ID_LIST.DailyForecast}>
        <DailyForecastScreenWeatherDetailCardSection
          selectedIndex={selectedIndex}
          onSelectedIndexChange={setSelectedIndex}
        />
      </HomeScreenWrapper>
    </View>
  );
}
