import { ScrollView, View } from 'react-native';

import TestSection from '@components/TestSection';
import { HOME_NAVIGATION_TEST_ID_LIST } from '@navigation/home/HomeNavigation.const';
import DailyForecastsGraphSection from '@screens/HomeScreen/_components/forecastsGraphSection/DailyForecastsGraphSection';
import HourlyForecastsGraphSection from '@screens/HomeScreen/_components/forecastsGraphSection/HourlyForecastsGraphSection';
import HomeScreenWrapper from '@screens/HomeScreen/_components/HomeScreenWrapper';
import ChecklistSection from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSection';
import StatusCardSection from '@screens/HomeScreen/CurrentForecastScreen/_components/statusCardSection/StatusCardSection';
import WeatherInfoHeader from '@screens/HomeScreen/CurrentForecastScreen/_components/weatherInfoHeader/WeatherInfoHeader';

export default function CurrentForecastScreen() {
  return (
    <View className="flex-1">
      <WeatherInfoHeader />
      <HomeScreenWrapper testID={HOME_NAVIGATION_TEST_ID_LIST.CurrentForecast}>
        <ScrollView className="px-5">
          <View className="flex gap-3 pb-12 pt-5">
            <ChecklistSection />
            <HourlyForecastsGraphSection />
            <StatusCardSection />
            <DailyForecastsGraphSection />
            <TestSection />
          </View>
        </ScrollView>
      </HomeScreenWrapper>
    </View>
  );
}
