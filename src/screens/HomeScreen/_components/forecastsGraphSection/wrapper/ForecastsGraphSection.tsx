import { View } from 'react-native';

import Show from '@components/wrapper/Show';
import ForecastsGraph from '@screens/HomeScreen/_components/forecastsGraphSection/graph/ForecastsGraph';
import {
  FORECASTS_GRAPH_BOTTOM_OFFSET,
  FORECASTS_GRAPH_BOTTOM_PADDING,
  FORECASTS_GRAPH_CONTAINER_MARGIN,
  FORECASTS_GRAPH_HEIGHT,
  FORECASTS_GRAPH_MAX_VALUE,
  FORECASTS_GRAPH_POINT_SIZE,
  FORECASTS_GRAPH_SPACING,
  FORECASTS_GRAPH_TOP_PADDING,
} from '@screens/HomeScreen/_components/forecastsGraphSection/graph/ForecastsGraph.const';
import ForecastsGraphSectionWrapper from '@screens/HomeScreen/_components/forecastsGraphSection/wrapper/ForecastsGraphSectionWrapper';

import type { ForecastsGraphSectionProps } from '@screens/HomeScreen/_components/forecastsGraphSection/wrapper/ForecastsGraphSection.type';

/**
 * 날씨 그래프 섹션
 * @param children 그래프 라벨 컴포넌트
 * @param selectedIndex 선택한 요소 인덱스
 * @param hideHeader 섹션 헤더를 렌더링하지 않을지 여부
 * @param forecastsGraphHeight 그래프 높이
 * @param forecastsGraphBottomOffset 그래프 바텀 오프셋
 * @param forecastsGraphBottomPadding 그래프 바텀 패딩
 * @param forecastsGraphTopPadding 그래프 상단 패딩
 * @param forecastsGraphMaxValue 그래프 최대값
 * @param forecastsGraphSpacing 그래프 간격
 * @param forecastsGraphPointSize 그래프 포인트 크기
 * @param forecastsGraphContainerMargin 그래프 섹션 좌우 마진
 * @jinhok96 25.06.20
 */
export default function ForecastsGraphSection({
  data,
  children: labelComponent, // 명시적으로 이름 지정
  selectedIndex,
  headerText,
  hideHeader,
  forecastsGraphHeight = FORECASTS_GRAPH_HEIGHT,
  forecastsGraphBottomOffset = FORECASTS_GRAPH_BOTTOM_OFFSET,
  forecastsGraphBottomPadding = FORECASTS_GRAPH_BOTTOM_PADDING,
  forecastsGraphTopPadding = FORECASTS_GRAPH_TOP_PADDING,
  forecastsGraphMaxValue = FORECASTS_GRAPH_MAX_VALUE,
  forecastsGraphSpacing = FORECASTS_GRAPH_SPACING,
  forecastsGraphPointSize = FORECASTS_GRAPH_POINT_SIZE,
  forecastsGraphContainerMargin = FORECASTS_GRAPH_CONTAINER_MARGIN,
  ...props
}: Omit<ForecastsGraphSectionProps, 'onSelectedIndexChange'>) {
  return (
    <View {...props}>
      <ForecastsGraphSectionWrapper
        className="bg-background-02"
        headerText={!hideHeader ? headerText : undefined}
        selectedIndex={selectedIndex}
        hideHeader={hideHeader}
        forecastsGraphSpacing={forecastsGraphSpacing}
        forecastsGraphContainerMargin={forecastsGraphContainerMargin}
      >
        {/* 라벨 */}
        <Show when={!!labelComponent}>
          <View className="flex flex-row items-start">{labelComponent}</View>
        </Show>
        {/* 그래프 */}
        <ForecastsGraph
          data={data}
          forecastsGraphHeight={forecastsGraphHeight}
          forecastsGraphPointSize={forecastsGraphPointSize}
          forecastsGraphSpacing={forecastsGraphSpacing}
          forecastsGraphBottomOffset={forecastsGraphBottomOffset}
          forecastsGraphBottomPadding={forecastsGraphBottomPadding}
          forecastsGraphTopPadding={forecastsGraphTopPadding}
          forecastsGraphMaxValue={forecastsGraphMaxValue}
        />
      </ForecastsGraphSectionWrapper>
    </View>
  );
}
