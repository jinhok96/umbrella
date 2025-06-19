import { View } from 'react-native';

import { useForecastScreen } from '@hooks/useForecastScreen';
import { HOME_NAVIGATION_TEST_ID_LIST } from '@navigation/home/HomeNavigation.const';
import HomeScreenWrapper from '@screens/HomeScreen/_components/HomeScreenWrapper';
import HourlyForecastScreenHeader from '@screens/HomeScreen/HourlyForecastScreen/_components/HourlyForecastScreenHeader';
import HourlyForecastScreenWeatherDetailCardSection from '@screens/HomeScreen/HourlyForecastScreen/_components/HourlyForecastScreenWeatherDetailCardSection';

import type { ForecastsStoreState } from '@store/forecastsStore/useForecastsStore.type';

export default function HourlyForecastScreen() {
  const {
    selectedIndex,
    detailCardSectionRef,
    handleSelectedIndexChange,
    handleScrollDetailCardSectionToSelectedIndex,
  } = useForecastScreen<NonNullable<ForecastsStoreState['hourly']>[number]>('hourly');

  return (
    <View className="flex-1">
      <HourlyForecastScreenHeader
        selectedIndex={selectedIndex}
        onSelectedIndexChange={index => {
          handleSelectedIndexChange(index);
          handleScrollDetailCardSectionToSelectedIndex(index);
        }}
      />
      <HomeScreenWrapper testID={HOME_NAVIGATION_TEST_ID_LIST.HourlyForecast}>
        <HourlyForecastScreenWeatherDetailCardSection
          selectedIndex={selectedIndex}
          onSelectedIndexChange={handleSelectedIndexChange}
          ref={detailCardSectionRef}
        />
      </HomeScreenWrapper>
    </View>
  );
}
