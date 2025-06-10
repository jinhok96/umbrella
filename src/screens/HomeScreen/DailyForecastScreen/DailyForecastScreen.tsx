import { Text } from 'react-native';

import TestSection from '@components/TestSection';
import { HOME_NAVIGATION_TEST_ID_LIST } from '@navigation/home/HomeNavigation.const';
import HomeScreenWrapper from '@screens/HomeScreen/_components/HomeScreenWrapper';

export default function DailyForecastScreen() {
  return (
    <HomeScreenWrapper testID={HOME_NAVIGATION_TEST_ID_LIST.DailyForecast}>
      <Text>DailyForecastScreen</Text>
      <TestSection />
    </HomeScreenWrapper>
  );
}
