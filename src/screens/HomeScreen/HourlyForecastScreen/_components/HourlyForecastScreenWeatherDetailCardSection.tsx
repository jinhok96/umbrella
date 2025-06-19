import { forwardRef, useCallback } from 'react';
import type { ViewProps } from 'react-native';
import { FlatList, View } from 'react-native';

import CheckCircleIcon from '@components/icon/CheckCircleIcon';
import LocationIcon from '@components/icon/LocationIcon';
import { formatDateToHHMM, formatDateToMMDD, getLocalizedDay } from '@libs/utils/date.util';
import { convertUVIndexToText, convertWindDegToText } from '@libs/utils/weather.util';
import WeatherDetailCard from '@screens/HomeScreen/_components/weatherDetailCard/WeatherDetailCard';
import WeatherDetailCardItem from '@screens/HomeScreen/_components/weatherDetailCard/WeatherDetailCardItem';
import { useForecastsStore } from '@store/forecastsStore/useForecastsStore';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { LocalizedText } from '@libs/utils/localize/localize.type';
import type { ForecastsGraphSectionProps } from '@screens/HomeScreen/_components/forecastsGraphSection/wrapper/ForecastsGraphSection.type';
import type { ForecastsStoreState } from '@store/forecastsStore/useForecastsStore.type';

type HourlyForecastScreenWeatherDetailCardSectionProps = Omit<ViewProps, 'children' | 'className'> &
  Required<Pick<ForecastsGraphSectionProps, 'selectedIndex' | 'onSelectedIndexChange'>> & {};

export default forwardRef<
  FlatList<NonNullable<ForecastsStoreState['hourly']>[number]>,
  HourlyForecastScreenWeatherDetailCardSectionProps
>(function HourlyForecastScreenWeatherDetailCardSection(
  // eslint-disable-next-line react/prop-types
  { selectedIndex, onSelectedIndexChange, ...props }: HourlyForecastScreenWeatherDetailCardSectionProps,
  ref,
) {
  const hourly = useForecastsStore(state => state.hourly);
  const lang = useSettingStore(state => state.lang);

  const renderItem = useCallback(
    ({ item, index }: { item: NonNullable<ForecastsStoreState['hourly']>[number]; index: number }) => {
      const date = new Date(item.dt * 1000);

      // label
      const labelMMDD = formatDateToMMDD(date);
      const labelDay = getLocalizedDay(date);
      const labelDate: LocalizedText = {
        ko: `${labelMMDD} • ${labelDay.ko}`,
        en: `${labelMMDD} • ${labelDay.en}`,
      };
      const label: string | LocalizedText | undefined =
        index === 0 ? { ko: '오늘', en: 'Today' } : date.getHours() === 0 ? labelDate : undefined;

      // mainDataProps
      const badgeLabel = formatDateToHHMM(date);
      const mainValue = `${Math.round(item.temp)}°`;
      const firstSubLabel = (
        <View className="size-5 opacity-40">
          <CheckCircleIcon />
        </View>
      );
      const firstSubValue = `${Math.round(item.feels_like)}°`;
      const secondSubLabel = (
        <View className="size-5 opacity-40">
          <LocationIcon filled />
        </View>
      );
      const secondSubValue = `${Math.round(item.pop * 100)}%`;
      const weatherIconId = item.weather[0].icon;

      // itemProps - value
      const humidity = Math.round(item.humidity);
      const clouds = Math.round(item.clouds);
      const uvi = `${convertUVIndexToText(item.uvi)[lang]} (${item.uvi})`;
      const windDeg = convertWindDegToText(item.wind_deg)[lang];
      const windSpeed = Math.round(item.wind_speed * 10) / 10;
      const pm10 = item.pm10 && Math.round(item.pm10);
      const pm25 = item.pm25 && Math.round(item.pm25);
      const o3 = item.o3 && Math.round(item.o3 * 100) / 100;

      return (
        <WeatherDetailCard
          type="hourly"
          isSelected={selectedIndex === index}
          onPress={() => onSelectedIndexChange(index)}
          label={label}
          className={label && index !== 0 ? 'pt-1' : undefined}
          mainDataProps={{
            badgeLabel,
            mainValue,
            firstSubLabel,
            firstSubValue,
            secondSubLabel,
            secondSubValue,
            weatherIconId,
          }}
        >
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
          <WeatherDetailCardItem
            label={{ ko: '미세먼지', en: 'PM 10' }}
            value={`${pm10}㎍/㎥`}
          />
          <WeatherDetailCardItem
            label={{ ko: '초미세먼지', en: 'PM 2.5' }}
            value={`${pm25}㎍/㎥`}
          />
          <WeatherDetailCardItem
            label={{ ko: '오존', en: 'Ozone' }}
            value={`${o3}ppm`}
          />
        </WeatherDetailCard>
      );
    },
    [selectedIndex, onSelectedIndexChange, lang],
  );

  if (!hourly) return <></>;

  return (
    <View
      {...props}
      className="w-full flex-1"
    >
      <FlatList
        ref={ref}
        contentContainerClassName="p-5 gap-3 h-[191rem]" // 요소 확장 시 스크롤 위치가 변하지 않도록 높이 직접 지정
        data={hourly}
        keyExtractor={item => item.dt.toString()}
        initialNumToRender={12}
        renderItem={renderItem}
      />
    </View>
  );
});
