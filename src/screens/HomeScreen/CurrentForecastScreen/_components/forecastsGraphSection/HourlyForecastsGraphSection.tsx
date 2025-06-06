import { ScrollView, View } from 'react-native';

import ForecastsGraph, {
  CustomGraphLabelComponent,
} from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraph';
import CurrentForecastScreenSectionHeader from '@screens/HomeScreen/CurrentForecastScreen/_components/currentForecastScreenSectionHeader/CurrentForecastScreenSectionHeader';
import { useForecastsStore } from '@store/forecastsStore/useForecastsStore';

import type { LocalizedText } from '@libs/utils/localize/localize.type';
import type { GraphDataItem } from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraph';

const SECTION_HEADER_TEXT: LocalizedText = {
  ko: '시간별 날씨',
  en: 'Hourly Forecasts',
};

export default function HourlyForecastsGraphSection() {
  const hourly = useForecastsStore(state => state.hourly);

  if (!hourly) return <></>;

  const data: GraphDataItem[] = hourly.map(item => {
    const value = item.temp * (Math.random() * 0.5 + 0.5);

    return { value };
  });

  return (
    <View className="rounded-[1.25rem] bg-background-02">
      <CurrentForecastScreenSectionHeader text={SECTION_HEADER_TEXT} />
      <ScrollView
        className=""
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View className="mx-3 flex gap-3">
          <View className="flex flex-row items-start">
            {hourly.map(item => {
              return (
                <CustomGraphLabelComponent
                  key={Math.random()}
                  text="라벨"
                  icon={item.weather[0].icon}
                  temp={item.temp}
                />
              );
            })}
          </View>
          <ForecastsGraph data={data} />
        </View>
      </ScrollView>
    </View>
  );
}
