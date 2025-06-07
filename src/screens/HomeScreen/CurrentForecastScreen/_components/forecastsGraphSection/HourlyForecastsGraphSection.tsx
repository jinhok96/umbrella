import { ScrollView, View } from 'react-native';

import ForecastsGraph from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraph';
import ForecastsGraphLabelComponent from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraphLabelComponent';
import CurrentForecastScreenSectionHeader from '@screens/HomeScreen/CurrentForecastScreen/_components/currentForecastScreenSectionHeader/CurrentForecastScreenSectionHeader';
import { useForecastsStore } from '@store/forecastsStore/useForecastsStore';

import type { LocalizedText } from '@libs/utils/localize/localize.type';
import type { GraphDataItem } from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraph';

const SECTION_HEADER_TEXT: LocalizedText = {
  ko: '시간별 날씨',
  en: 'Hourly Forecasts',
};

const GRAPH_LABEL_TEXT: LocalizedText = {
  ko: '시',
  en: 'H',
};

export default function HourlyForecastsGraphSection() {
  const hourly = useForecastsStore(state => state.hourly);

  if (!hourly) return <></>;

  const data: GraphDataItem[] = hourly.map(item => {
    const value = item.temp * (Math.random() * 0.5 + 0.5);

    return { value };
  });

  /**
   * 할 것
   * 1. 선택한 요소에 배경색 넣기
   * 2. 선택한 요소가 바뀌면 스크롤하기
   */

  return (
    <View className="rounded-[1.25rem] bg-background-02">
      <CurrentForecastScreenSectionHeader text={SECTION_HEADER_TEXT} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View className="mx-3 flex gap-3">
          <View className="flex flex-row items-start">
            {hourly.map(item => {
              const hour = new Date(item.dt).getHours();
              return (
                <ForecastsGraphLabelComponent
                  key={item.dt * Math.random()}
                  text={{
                    ko: hour + GRAPH_LABEL_TEXT.ko,
                    en: hour + GRAPH_LABEL_TEXT.en,
                  }}
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
