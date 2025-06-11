import { useMemo, useState } from 'react';
import type { LayoutChangeEvent } from 'react-native';

import CustomGraphDataPointComponent from '@screens/HomeScreen/_components/forecastsGraphSection/customComponent/ForecastsGraphDataPointComponent';
import ForecastsGraphLabelComponent from '@screens/HomeScreen/_components/forecastsGraphSection/customComponent/ForecastsGraphLabelComponent';
import {
  FORECASTS_GRAPH_BOTTOM_OFFSET,
  FORECASTS_GRAPH_BOTTOM_PADDING,
  FORECASTS_GRAPH_CONTAINER_MARGIN,
  FORECASTS_GRAPH_HEIGHT,
  FORECASTS_GRAPH_MAX_VALUE,
  FORECASTS_GRAPH_POINT_SIZE,
  FORECASTS_GRAPH_SPACING,
} from '@screens/HomeScreen/_components/forecastsGraphSection/graph/ForecastsGraph.const';
import { generateDataPointKey } from '@screens/HomeScreen/_components/forecastsGraphSection/graph/ForecastsGraph.util';
import ForecastsGraphSection from '@screens/HomeScreen/_components/forecastsGraphSection/wrapper/ForecastsGraphSection';
import { useForecastsStore } from '@store/forecastsStore/useForecastsStore';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { LocalizedText } from '@libs/utils/localize/localize.type';
import type { GraphDataItem } from '@screens/HomeScreen/_components/forecastsGraphSection/graph/ForecastsGraph.type';
import type { HourlyForecastsGraphSectionProps } from '@screens/HomeScreen/_components/forecastsGraphSection/HourlyForecastsGraphSection.type';

const SECTION_HEADER_TEXT: LocalizedText = {
  ko: '시간별 날씨',
  en: 'Hourly Forecasts',
};

const GRAPH_LABEL_TEXT: LocalizedText = {
  ko: '시',
  en: 'h',
};

/**
 * 시간별 날씨 그래프 섹션
 * @param selectedIndex 선택한 요소 인덱스
 * @param onSelectedIndexChange selectedIndex 변경 시 호출할 함수
 * @param hideHeader 섹션 헤더를 렌더링하지 않을지 여부
 * @param forecastsGraphHeight 그래프 높이
 * @param forecastsGraphBottomOffset 그래프 바텀 오프셋
 * @param forecastsGraphBottomPadding 그래프 바텀 패딩
 * @param forecastsGraphMaxValue 그래프 최대값
 * @param forecastsGraphSpacing 그래프 간격
 * @param forecastsGraphPointSize 그래프 포인트 크기
 * @param forecastsGraphContainerMargin 그래프 섹션 좌우 마진
 * @jinhok96 25.06.11
 */
export default function HourlyForecastsGraphSection({
  selectedIndex,
  onSelectedIndexChange,
  hideHeader,
  forecastsGraphHeight = FORECASTS_GRAPH_HEIGHT,
  forecastsGraphBottomOffset = FORECASTS_GRAPH_BOTTOM_OFFSET,
  forecastsGraphBottomPadding = FORECASTS_GRAPH_BOTTOM_PADDING,
  forecastsGraphMaxValue = FORECASTS_GRAPH_MAX_VALUE,
  forecastsGraphSpacing = FORECASTS_GRAPH_SPACING,
  forecastsGraphPointSize = FORECASTS_GRAPH_POINT_SIZE,
  forecastsGraphContainerMargin = FORECASTS_GRAPH_CONTAINER_MARGIN,
  onLayout,
  ...props
}: HourlyForecastsGraphSectionProps) {
  const hourly = useForecastsStore(state => state.hourly);
  const theme = useSettingStore(state => state.theme);
  const [currentForecastsGraphSpacing, setCurrentForecastsGraphSpacing] = useState(forecastsGraphSpacing);

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

  // 그래프 간격 업데이트
  const handleLayout = (e: LayoutChangeEvent) => {
    onLayout?.(e);

    // 그래프 간격 업데이트
    const newCurrentForecastsGraphSpacing =
      (e.nativeEvent.layout.width - forecastsGraphContainerMargin * 2) / data.length;

    setCurrentForecastsGraphSpacing(
      newCurrentForecastsGraphSpacing > forecastsGraphSpacing ? newCurrentForecastsGraphSpacing : forecastsGraphSpacing,
    );
  };

  // 라벨 클릭 시 selectedIndex 업데이트
  const handleForecastsGraphLabelComponentPress = (index: number) => {
    const isSelectedIndexEmpty = !selectedIndex && selectedIndex !== 0;
    if (isSelectedIndexEmpty || selectedIndex !== index) return onSelectedIndexChange?.(index);
    onSelectedIndexChange?.(null);
  };

  return (
    <ForecastsGraphSection
      {...props}
      data={data}
      selectedIndex={selectedIndex}
      headerText={SECTION_HEADER_TEXT}
      hideHeader={hideHeader}
      forecastsGraphHeight={forecastsGraphHeight}
      forecastsGraphBottomOffset={forecastsGraphBottomOffset}
      forecastsGraphBottomPadding={forecastsGraphBottomPadding}
      forecastsGraphMaxValue={forecastsGraphMaxValue}
      forecastsGraphSpacing={currentForecastsGraphSpacing}
      forecastsGraphPointSize={forecastsGraphPointSize}
      forecastsGraphContainerMargin={forecastsGraphContainerMargin}
      onLayout={handleLayout}
    >
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
            forecastsGraphHeight={forecastsGraphHeight}
            forecastsGraphBottomOffset={forecastsGraphBottomOffset}
            forecastsGraphBottomPadding={forecastsGraphBottomPadding}
            forecastsGraphSpacing={currentForecastsGraphSpacing}
          />
        );
      })}
    </ForecastsGraphSection>
  );
}
