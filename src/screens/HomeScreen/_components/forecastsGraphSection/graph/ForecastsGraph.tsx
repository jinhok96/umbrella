import { useMemo } from 'react';
import { View } from 'react-native';

import { LineChart } from 'react-native-gifted-charts';
import { interpolate } from 'react-native-reanimated';

import { useGetColorHex } from '@hooks/useGetColorHex';
import { ANIMATION_DURATION } from '@libs/constants/duration.const';
import { findForecastsGraphMinMaxValue } from '@screens/HomeScreen/_components/forecastsGraphSection/graph/ForecastsGraph.util';

import type { ForecastsGraphProps } from '@screens/HomeScreen/_components/forecastsGraphSection/graph/ForecastsGraph.type';

/**
 * 날씨 그래프
 * @param data 그래프 데이터 리스트
 * @param forecastsGraphHeight 그래프 높이
 * @param forecastsGraphBottomOffset 그래프 바텀 오프셋
 * @param forecastsGraphBottomPadding 그래프 바텀 패딩
 * @param forecastsGraphMaxValue 그래프 최대값
 * @param forecastsGraphSpacing 그래프 간격
 * @param forecastsGraphPointSize 그래프 포인트 크기
 * @returns 라인 그래프
 * @jinhok96 25.06.11
 */
export default function ForecastsGraph({
  data,
  forecastsGraphHeight,
  forecastsGraphBottomOffset,
  forecastsGraphBottomPadding,
  forecastsGraphMaxValue,
  forecastsGraphSpacing,
  forecastsGraphPointSize,
  ...props
}: ForecastsGraphProps) {
  const morningColor = useGetColorHex('--color-morning');

  // 일관된 크기로 포맷팅된 그래프 데이터; 리렌더링을 최소화하기 위해 메모이제이션
  const newData = useMemo(() => {
    const { minValue = 0, maxValue = 0 } = findForecastsGraphMinMaxValue(data);

    return data.map(item => {
      // paddingBottom 계산
      const bottomPaddingValue =
        (forecastsGraphBottomOffset + forecastsGraphBottomPadding) / (forecastsGraphHeight / 100);

      return {
        ...item,
        value: interpolate(item.value, [minValue, maxValue], [bottomPaddingValue, forecastsGraphMaxValue]),
      };
    });
  }, [data, forecastsGraphBottomOffset, forecastsGraphBottomPadding, forecastsGraphHeight, forecastsGraphMaxValue]);

  return (
    <View
      {...props}
      style={{ height: forecastsGraphHeight }}
    >
      <LineChart
        // 스타일이 변경되면 새로 랜더링하기 위해 key 지정
        key={`${forecastsGraphHeight}-${forecastsGraphBottomOffset}-${forecastsGraphBottomPadding}-${forecastsGraphMaxValue}-${forecastsGraphSpacing}-${forecastsGraphPointSize}`}
        data={newData}
        maxValue={forecastsGraphMaxValue}
        height={forecastsGraphHeight}
        thickness={1}
        areaChart
        curved
        color={morningColor}
        startFillColor={morningColor}
        endFillColor={morningColor}
        startOpacity={0.2}
        endOpacity={0.01}
        spacing={forecastsGraphSpacing}
        initialSpacing={forecastsGraphSpacing / 2}
        endSpacing={(forecastsGraphSpacing / 2) * -1}
        isAnimated
        animateOnDataChange
        animationDuration={ANIMATION_DURATION}
        scrollAnimation
        dataPointsColor={morningColor}
        dataPointsWidth={forecastsGraphPointSize}
        dataPointsHeight={forecastsGraphPointSize}
        xAxisLabelsHeight={0}
        yAxisLabelWidth={0}
        hideOrigin
        hideAxesAndRules
        disableScroll
      />
    </View>
  );
}
