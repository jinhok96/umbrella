import { ScrollView, View } from 'react-native';

import TestSection from '@components/TestSection';
import { HOME_NAVIGATION_TEST_ID_LIST } from '@navigation/home/HomeNavigation.const';
import HomeScreenWrapper from '@screens/HomeScreen/_components/HomeScreenWrapper';
import ChecklistSection from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSection';
import HourlyForecastsGraphSection from '@screens/HomeScreen/CurrentForecastScreen/_components/forecastsGraphSection/HourlyForecastsGraphSection';
import StatusCardSection from '@screens/HomeScreen/CurrentForecastScreen/_components/statusCardSection/StatusCardSection';
import WeatherInfoHeader from '@screens/HomeScreen/CurrentForecastScreen/_components/weatherInfoHeader/WeatherInfoHeader';

export default function CurrentForecastScreen() {
  return (
    <View className="relative flex-1">
      <WeatherInfoHeader />
      <HomeScreenWrapper testID={HOME_NAVIGATION_TEST_ID_LIST.CurrentForecast}>
        <ScrollView className="flex-1 p-5">
          <View className="mb-safe-offset-8 flex-1 gap-3">
            <ChecklistSection />
            <StatusCardSection />
            <HourlyForecastsGraphSection />
            <TestSection />
          </View>
        </ScrollView>
      </HomeScreenWrapper>
    </View>
  );
}
