import { useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';

import ForecastsGraph from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraph';
import { generateDataPointKey } from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraph.util';
import CustomGraphDataPointComponent from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraphDataPointComponent';
import ForecastsGraphLabelComponent from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraphLabelComponent';
import CurrentForecastScreenSectionHeader from '@screens/HomeScreen/CurrentForecastScreen/_components/currentForecastScreenSectionHeader/CurrentForecastScreenSectionHeader';
import { useForecastsStore } from '@store/forecastsStore/useForecastsStore';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { LocalizedText } from '@libs/utils/localize/localize.type';
import type { GraphDataItem } from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraph.type';

const SECTION_HEADER_TEXT: LocalizedText = {
  ko: '시간별 날씨',
  en: 'Hourly Forecasts',
};

const GRAPH_LABEL_TEXT: LocalizedText = {
  ko: '시',
  en: 'H',
};

const KEY_LIST = new Array(48).fill(0).map((_, index) => index);

/**
 * 시간별 날씨 그래프 섹션
 * @jinhok96 25.06.07
 */
export default function HourlyForecastsGraphSection() {
  const hourly = useForecastsStore(state => state.hourly);
  const theme = useSettingStore(state => state.theme);
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined);

  // 그래프 데이터; 리렌더링을 최소화하기 위해 메모이제이션
  const data: GraphDataItem[] = useMemo(() => {
    if (!hourly) return [];

    const newData = hourly?.map((item, index) => {
      const value = item.temp + index;
      const isSelected = index === selectedIndex;

      const baseKey = `${item.dt}-${KEY_LIST[index]}`;
      const key = generateDataPointKey(baseKey, theme, isSelected);

      return {
        value,
        customDataPoint: () => (
          <CustomGraphDataPointComponent
            key={key} // theme, isSelected가 변경될 때 컴포넌트를 리렌더링하기 위해 지정
            isSelected={isSelected}
          />
        ),
      };
    });

    return newData;
  }, [hourly, selectedIndex, theme]);

  /**
   * 할 것
   * 1. 선택한 요소가 바뀌면 스크롤하기
   */

  const handleForecastsGraphLabelComponentPress = (index: number) => {
    if (selectedIndex === undefined || selectedIndex !== index) return setSelectedIndex(index);
    setSelectedIndex(undefined);
  };

  return (
    <View className="rounded-[1.25rem] bg-background-02">
      <CurrentForecastScreenSectionHeader text={SECTION_HEADER_TEXT} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View className="mx-5">
          <View className="flex flex-row items-start">
            {hourly?.map((item, index) => {
              const hour = new Date(item.dt).getHours();
              const isSelected = index === selectedIndex;

              return (
                <ForecastsGraphLabelComponent
                  key={item.dt * KEY_LIST[index]}
                  text={{
                    ko: hour + GRAPH_LABEL_TEXT.ko,
                    en: hour + GRAPH_LABEL_TEXT.en,
                  }}
                  icon={item.weather[0].icon}
                  temp={item.temp}
                  isSelected={isSelected}
                  onPress={() => handleForecastsGraphLabelComponentPress(index)}
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
