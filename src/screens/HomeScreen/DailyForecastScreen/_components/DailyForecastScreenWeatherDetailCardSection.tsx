import { forwardRef } from 'react';
import type { ViewProps } from 'react-native';
import { FlatList, View } from 'react-native';

import CheckCircleIcon from '@components/icon/CheckCircleIcon';
import LocationIcon from '@components/icon/LocationIcon';
import { formatDateToMMDD, getLocalizedDay } from '@libs/utils/date.util';
import { getDailyAvgTemp } from '@libs/utils/getDailyAvgTemp.util';
import { convertUVIndexToText, convertWindDegToText } from '@libs/utils/weather.util';
import WeatherDetailCard from '@screens/HomeScreen/_components/weatherDetailCard/WeatherDetailCard';
import WeatherDetailCardItem from '@screens/HomeScreen/_components/weatherDetailCard/WeatherDetailCardItem';
import { useForecastsStore } from '@store/forecastsStore/useForecastsStore';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { ForecastsGraphSectionProps } from '@screens/HomeScreen/_components/forecastsGraphSection/wrapper/ForecastsGraphSection.type';
import type { ForecastsStoreState } from '@store/forecastsStore/useForecastsStore.type';

type DailyForecastScreenWeatherDetailCardSectionProps = Omit<ViewProps, 'children' | 'className'> &
  Required<Pick<ForecastsGraphSectionProps, 'selectedIndex' | 'onSelectedIndexChange'>> & {};

export default forwardRef<
  FlatList<NonNullable<ForecastsStoreState['daily']>[number]>,
  DailyForecastScreenWeatherDetailCardSectionProps
>(function DailyForecastScreenWeatherDetailCardSection(
  { selectedIndex, onSelectedIndexChange, ...props }: DailyForecastScreenWeatherDetailCardSectionProps,
  ref,
) {
  const daily = useForecastsStore(state => state.daily);
  const lang = useSettingStore(state => state.lang);

  if (!daily) return <></>;

  return (
    <View
      {...props}
      className="w-full flex-1"
    >
      <FlatList
        ref={ref}
        contentContainerClassName="p-5 pb-12 gap-3"
        data={daily}
        keyExtractor={item => item.dt.toString()}
        initialNumToRender={8}
        renderItem={({ item, index }) => {
          const date = new Date(item.dt * 1000);

          // mainDataProps
          const badgeLabel = formatDateToMMDD(date);
          const mainLabel = getLocalizedDay(date)[lang];
          const mainValue = `${Math.round(getDailyAvgTemp(item.temp.morn, item.temp.day, item.temp.eve, item.temp.night))}°`;
          const firstSubLabel = (
            <View className="size-5 opacity-40">
              <CheckCircleIcon />
            </View>
          );
          const firstSubValue = `${Math.round(item.temp.min)}° ~ ${Math.round(item.temp.max)}°`;
          const secondSubLabel = (
            <View className="size-5 opacity-40">
              <LocationIcon filled />
            </View>
          );
          const secondSubValue = `${Math.round(item.pop * 100)}%`;
          const weatherIconId = item.weather[0].icon;

          // itemProps - value
          const feelsLike = Math.round(
            getDailyAvgTemp(item.feels_like.morn, item.feels_like.day, item.feels_like.eve, item.feels_like.night),
          );
          const humidity = Math.round(item.humidity);
          const clouds = Math.round(item.clouds);
          const uvi = `${convertUVIndexToText(item.uvi)[lang]} (${item.uvi})`;
          const windDeg = convertWindDegToText(item.wind_deg)[lang];
          const windSpeed = Math.round(item.wind_speed * 10) / 10;

          return (
            <WeatherDetailCard
              type="daily"
              isSelected={selectedIndex === index}
              onPress={() => onSelectedIndexChange(index)}
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
            >
              <WeatherDetailCardItem
                label={{ ko: '체감온도', en: 'Feels Like' }}
                value={`${feelsLike}°`}
              />
              <WeatherDetailCardItem
                label={{ ko: '습도', en: 'Humidity' }}
                value={`${humidity}%`}
              />
              <WeatherDetailCardItem
                label={{ ko: '운량', en: 'Cloudiness' }}
                value={`${clouds}%`}
              />
              <WeatherDetailCardItem
                label={{ ko: '바람', en: 'Wind' }}
                value={`${windDeg} ${windSpeed}m/s`}
              />
              <WeatherDetailCardItem
                label={{ ko: '자외선지수', en: 'UV Index' }}
                value={uvi}
              />
            </WeatherDetailCard>
          );
        }}
      />
    </View>
  );
});
