import { Text } from 'react-native';

import { HOME_NAVIGATION_TEST_ID_LIST } from '@navigation/HomeNavigation.const';
import HomeScreenWrapper from '@screens/HomeScreen/components/HomeScreenWrapper';

export default function DailyForecastScreen() {
  return (
    <HomeScreenWrapper testID={HOME_NAVIGATION_TEST_ID_LIST.DailyForecast}>
      <Text>DailyForecastScreen</Text>
    </HomeScreenWrapper>
  );
}
