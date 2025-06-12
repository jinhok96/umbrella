import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import { formatDateToMMDD, getLocalizedDay } from '@libs/utils/date.util';
import { getDailyAvgTemp } from '@libs/utils/getDailyAvgTemp.util';
import WeatherDetailCard from '@screens/HomeScreen/_components/weatherDetailCard/WeatherDetailCard';
import { useForecastsStore } from '@store/forecastsStore/useForecastsStore';

import type { LocalizedText } from '@libs/utils/localize/localize.type';
import type { ForecastsGraphSectionProps } from '@screens/HomeScreen/_components/forecastsGraphSection/wrapper/ForecastsGraphSection.type';

type DailyForecastScreenWeatherDetailCardSectionProps = Omit<ViewProps, 'children' | 'className'> &
  Required<Pick<ForecastsGraphSectionProps, 'selectedIndex' | 'onSelectedIndexChange'>> & {};

export default function DailyForecastScreenWeatherDetailCardSection({
  selectedIndex,
  onSelectedIndexChange,
  ...props
}: DailyForecastScreenWeatherDetailCardSectionProps) {
  const daily = useForecastsStore(state => state.daily);

  // 라벨 클릭 시 selectedIndex 업데이트
  const handleSelectedIndexUpdate = (index: number) => {
    const isSelectedIndexEmpty = !selectedIndex && selectedIndex !== 0;
    if (isSelectedIndexEmpty || selectedIndex !== index) return onSelectedIndexChange?.(index);
    onSelectedIndexChange?.(null);
  };

  if (!daily) return <></>;

  return (
    <View
      {...props}
      className="flex w-full gap-3"
    >
      {daily.map((item, index) => {
        const date = new Date(item.dt * 1000);
        const badgeLabel = formatDateToMMDD(date);
        const mainLabel: LocalizedText = getLocalizedDay(date);
        const mainValue = `${Math.round(getDailyAvgTemp(item.temp.morn, item.temp.day, item.temp.eve, item.temp.night))}°`;
        const firstSubLabel: LocalizedText = {
          ko: '최저',
          en: 'Low',
        };
        const firstSubValue = `${Math.round(item.temp.min)}°`;
        const secondSubLabel: LocalizedText = {
          ko: '최고',
          en: 'High',
        };
        const secondSubValue = `${Math.round(item.temp.max)}°`;
        const weatherIconId = item.weather[0].icon;

        return (
          <WeatherDetailCard
            key={item.dt}
            isSelected={selectedIndex === index}
            onPress={() => handleSelectedIndexUpdate(index)}
            mainDataProps={{
              badgeLabel,
              mainLabel,
              mainValue,
              firstSubLabel,
              firstSubValue,
              secondSubLabel,
              secondSubValue,
              weatherIconId,
            }}
          />
        );
      })}
    </View>
  );
}
