import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import { formatDateToHHMM, formatDateToMMDD, getLocalizedDay } from '@libs/utils/date.util';
import { convertUVIndexToText, convertWindDegToText } from '@libs/utils/weather.util';
import WeatherDetailCard from '@screens/HomeScreen/_components/weatherDetailCard/WeatherDetailCard';
import WeatherDetailCardItem from '@screens/HomeScreen/_components/weatherDetailCard/WeatherDetailCardItem';
import { useForecastsStore } from '@store/forecastsStore/useForecastsStore';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { LocalizedText } from '@libs/utils/localize/localize.type';
import type { ForecastsGraphSectionProps } from '@screens/HomeScreen/_components/forecastsGraphSection/wrapper/ForecastsGraphSection.type';

type HourlyForecastScreenWeatherDetailCardSectionProps = Omit<ViewProps, 'children' | 'className'> &
  Required<Pick<ForecastsGraphSectionProps, 'selectedIndex' | 'onSelectedIndexChange'>> & {};

export default function HourlyForecastScreenWeatherDetailCardSection({
  selectedIndex,
  onSelectedIndexChange,
  ...props
}: HourlyForecastScreenWeatherDetailCardSectionProps) {
  const hourly = useForecastsStore(state => state.hourly);
  const lang = useSettingStore(state => state.lang);

  // 라벨 클릭 시 selectedIndex 업데이트
  const handleSelectedIndexUpdate = (index: number) => {
    const isSelectedIndexEmpty = !selectedIndex && selectedIndex !== 0;
    if (isSelectedIndexEmpty || selectedIndex !== index) return onSelectedIndexChange?.(index);
    onSelectedIndexChange?.(null);
  };

  if (!hourly) return <></>;

  return (
    <View
      {...props}
      className="flex w-full gap-3"
    >
      {hourly.map((item, index) => {
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
        const firstSubLabel: LocalizedText = {
          ko: '체감',
          en: 'Feel',
        };
        const firstSubValue = `${Math.round(item.feels_like)}°`;
        const secondSubLabel: LocalizedText = {
          ko: '강수',
          en: 'PoP',
        };
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
            key={item.dt}
            type="hourly"
            isSelected={selectedIndex === index}
            onPress={() => handleSelectedIndexUpdate(index)}
            label={label}
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
      })}
    </View>
  );
}
