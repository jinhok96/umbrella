import { useMemo } from 'react';
import { View } from 'react-native';

import { LineChart } from 'react-native-gifted-charts';
import { interpolate } from 'react-native-reanimated';

import { useGetColorHex } from '@hooks/useGetColorHex';
import { ANIMATION_DURATION } from '@libs/constants/duration.const';
import {
  FORECASTS_GRAPH_BOTTOM_OFFSET,
  FORECASTS_GRAPH_BOTTOM_PADDING,
  FORECASTS_GRAPH_HEIGHT,
  FORECASTS_GRAPH_MAX_VALUE,
  FORECASTS_GRAPH_POINT_SIZE,
  FORECASTS_GRAPH_SPACING,
} from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraph.const';
import { findForecastsGraphMinMaxValue } from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraph.util';

import type { ForecastsGraphProps } from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraph.type';

/**
 * 날씨 그래프
 * @param data 그래프 데이터 리스트
 * @returns 라인 그래프
 * @jinhok96 25.06.07
 */
export default function ForecastsGraph({ data, ...props }: ForecastsGraphProps) {
  const morningColor = useGetColorHex('--color-morning');

  // 일관된 크기로 포맷팅된 그래프 데이터; 리렌더링을 최소화하기 위해 메모이제이션
  const newData = useMemo(() => {
    const { minValue = 0, maxValue = 0 } = findForecastsGraphMinMaxValue(data);

    return data.map(item => {
      // paddingBottom 계산
      const bottomPaddingValue =
        (FORECASTS_GRAPH_BOTTOM_OFFSET + FORECASTS_GRAPH_BOTTOM_PADDING) / (FORECASTS_GRAPH_HEIGHT * 0.01);

      return {
        ...item,
        value: interpolate(item.value, [minValue, maxValue], [bottomPaddingValue, FORECASTS_GRAPH_MAX_VALUE]),
      };
    });
  }, [data]);

  return (
    <View {...props}>
      <LineChart
        data={newData}
        maxValue={FORECASTS_GRAPH_MAX_VALUE}
        thickness={1}
        areaChart
        curved
        color={morningColor}
        startFillColor={morningColor}
        endFillColor="transparent"
        startOpacity={0.2}
        endOpacity={0}
        spacing={FORECASTS_GRAPH_SPACING}
        initialSpacing={FORECASTS_GRAPH_SPACING * 0.5}
        endSpacing={FORECASTS_GRAPH_SPACING * -0.5}
        height={FORECASTS_GRAPH_HEIGHT}
        yAxisLabelWidth={0}
        isAnimated
        animateOnDataChange
        animationDuration={ANIMATION_DURATION}
        scrollAnimation
        hideOrigin
        dataPointsColor={morningColor}
        dataPointsWidth={FORECASTS_GRAPH_POINT_SIZE}
        dataPointsHeight={FORECASTS_GRAPH_POINT_SIZE}
        hideAxesAndRules
        xAxisLabelsHeight={0}
        disableScroll
      />
    </View>
  );
}
