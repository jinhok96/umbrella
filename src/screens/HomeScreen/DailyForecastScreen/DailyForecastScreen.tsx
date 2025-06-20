import { View } from 'react-native';

import { useForecastScreen } from '@hooks/useForecastScreen';
import { HOME_NAVIGATION_TEST_ID_LIST } from '@navigation/home/HomeNavigation.const';
import HomeScreenWrapper from '@screens/HomeScreen/_components/HomeScreenWrapper';
import DailyForecastScreenHeader from '@screens/HomeScreen/DailyForecastScreen/_components/DailyForecastScreenHeader';
import DailyForecastScreenWeatherDetailCardSection from '@screens/HomeScreen/DailyForecastScreen/_components/DailyForecastScreenWeatherDetailCardSection';

import type { ForecastsStoreState } from '@store/forecastsStore/useForecastsStore.type';

export default function DailyForecastScreen() {
  const { selectedIndex, detailCardSectionRef, handleSelectedIndexChange } =
    useForecastScreen<NonNullable<ForecastsStoreState['daily']>[number]>('daily');

  return (
    <View className="flex-1">
      <DailyForecastScreenHeader selectedIndex={selectedIndex} />
      <HomeScreenWrapper testID={HOME_NAVIGATION_TEST_ID_LIST.DailyForecast}>
        <DailyForecastScreenWeatherDetailCardSection
          selectedIndex={selectedIndex}
          onSelectedIndexChange={handleSelectedIndexChange}
          ref={detailCardSectionRef}
        />
      </HomeScreenWrapper>
    </View>
  );
}
