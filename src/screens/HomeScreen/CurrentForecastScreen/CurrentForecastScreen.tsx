import { useState } from 'react';
import { ScrollView, View } from 'react-native';

import TestSection from '@components/TestSection';
import { HOME_NAVIGATION_TEST_ID_LIST } from '@navigation/home/HomeNavigation.const';
import HomeScreenWrapper from '@screens/HomeScreen/_components/HomeScreenWrapper';
import ChecklistSection from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSection';
import DailyForecastsGraphSection from '@screens/HomeScreen/CurrentForecastScreen/_components/forecastsGraphSection/DailyForecastsGraphSection';
import HourlyForecastsGraphSection from '@screens/HomeScreen/CurrentForecastScreen/_components/forecastsGraphSection/HourlyForecastsGraphSection';
import StatusCardSection from '@screens/HomeScreen/CurrentForecastScreen/_components/statusCardSection/StatusCardSection';
import WeatherInfoHeader from '@screens/HomeScreen/CurrentForecastScreen/_components/weatherInfoHeader/WeatherInfoHeader';

import type { ForecastsGraphSelectedIndex } from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraphSectionWrapper.type';

export default function CurrentForecastScreen() {
  const [hourlySelectedIndex, setHourlySelectedIndex] = useState<ForecastsGraphSelectedIndex>(0);
  const [dailySelectedIndex, setDailySelectedIndex] = useState<ForecastsGraphSelectedIndex>(0);

  return (
    <View className="relative flex-1">
      <WeatherInfoHeader />
      <HomeScreenWrapper testID={HOME_NAVIGATION_TEST_ID_LIST.CurrentForecast}>
        <ScrollView className="flex-1 p-5">
          <View className="mb-safe-offset-8 flex-1 gap-3">
            <ChecklistSection />
            <HourlyForecastsGraphSection
              selectedIndex={hourlySelectedIndex}
              onSelectedIndexChange={index => setHourlySelectedIndex(index)}
            />
            <StatusCardSection />
            <DailyForecastsGraphSection
              selectedIndex={dailySelectedIndex}
              onSelectedIndexChange={setDailySelectedIndex}
            />
            <TestSection />
          </View>
        </ScrollView>
      </HomeScreenWrapper>
    </View>
  );
}
