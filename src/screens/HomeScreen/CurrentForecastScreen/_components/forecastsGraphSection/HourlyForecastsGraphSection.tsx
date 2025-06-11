import { useMemo } from 'react';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import ForecastsGraph from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraph';
import { generateDataPointKey } from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraph.util';
import CustomGraphDataPointComponent from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraphDataPointComponent';
import ForecastsGraphLabelComponent from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraphLabelComponent';
import ForecastsGraphSectionWrapper from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraphSectionWrapper';
import { useForecastsStore } from '@store/forecastsStore/useForecastsStore';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { LocalizedText } from '@libs/utils/localize/localize.type';
import type { GraphDataItem } from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraph.type';
import type { ForecastsGraphSectionWrapperProps } from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraphSectionWrapper.type';

const SECTION_HEADER_TEXT: LocalizedText = {
  ko: '시간별 날씨',
  en: 'Hourly Forecasts',
};

const GRAPH_LABEL_TEXT: LocalizedText = {
  ko: '시',
  en: 'h',
};

type HourlyForecastsGraphSectionProps = ViewProps &
  Pick<ForecastsGraphSectionWrapperProps, 'selectedIndex' | 'onSelectedIndexChange' | 'hideHeader'>;

/**
 * 시간별 날씨 그래프 섹션
 * @param selectedIndex 선택한 요소 인덱스
 * @param onSelectedIndexChange selectedIndex 변경 시 호출할 함수
 * @param hideHeader 섹션 헤더를 렌더링하지 않을지 여부
 * @jinhok96 25.06.11
 */
export default function HourlyForecastsGraphSection({
  selectedIndex,
  onSelectedIndexChange,
  hideHeader,
  ...props
}: HourlyForecastsGraphSectionProps) {
  const hourly = useForecastsStore(state => state.hourly);
  const theme = useSettingStore(state => state.theme);

  // 그래프 데이터; 리렌더링을 최소화하기 위해 메모이제이션
  const data: GraphDataItem[] = useMemo(() => {
    if (!hourly) return [];

    const newData = hourly?.map((item, index) => {
      const value = item.temp;
      const isSelected = index === selectedIndex;

      const baseKey = item.dt.toString();
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

  // 라벨 클릭 시 selectedIndex 업데이트
  const handleForecastsGraphLabelComponentPress = (index: number) => {
    const isSelectedIndexEmpty = !selectedIndex && selectedIndex !== 0;
    if (isSelectedIndexEmpty || selectedIndex !== index) return onSelectedIndexChange?.(index);
    onSelectedIndexChange?.(null);
  };

  return (
    <View {...props}>
      <ForecastsGraphSectionWrapper
        className="rounded-[1.25rem] bg-background-02"
        headerText={!hideHeader ? SECTION_HEADER_TEXT : undefined}
        selectedIndex={selectedIndex}
      >
        {/* 라벨 */}
        <View className="flex flex-row items-start">
          {hourly?.map((item, index) => {
            const hour = new Date(item.dt * 1000).getHours();
            const isSelected = index === selectedIndex;

            return (
              <ForecastsGraphLabelComponent
                key={item.dt}
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
        {/* 그래프 */}
        <ForecastsGraph data={data} />
      </ForecastsGraphSectionWrapper>
    </View>
  );
}
