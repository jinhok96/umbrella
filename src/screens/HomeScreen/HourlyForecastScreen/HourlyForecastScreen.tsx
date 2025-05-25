import { Text } from 'react-native';

import { HOME_NAVIGATION_TEST_ID_LIST } from '@navigation/HomeNavigation.const';
import HomeScreenWrapper from '@screens/HomeScreen/components/HomeScreenWrapper';

export default function HourlyForecastScreen() {
  return (
    <HomeScreenWrapper testID={HOME_NAVIGATION_TEST_ID_LIST.HourlyForecast}>
      <Text>HourlyForecastScreen</Text>
    </HomeScreenWrapper>
  );
}
