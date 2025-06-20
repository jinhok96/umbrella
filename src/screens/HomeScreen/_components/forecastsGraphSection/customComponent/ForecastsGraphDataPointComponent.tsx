import { memo } from 'react';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import classNames from 'classnames';

import { FORECASTS_GRAPH_POINT_SIZE } from '@screens/HomeScreen/_components/forecastsGraphSection/graph/ForecastsGraph.const';

type ForecastsCustomGraphDataPointComponentProps = Omit<ViewProps, 'className' | 'style'> & {
  isSelected?: boolean;
};

/**
 * `ForecastsGraph`의 데이터 포인트 컴포넌트
 * @param isSelected 선택되었는지 여부
 * @returns 데이터 포인트 컴포넌트
 * @jinhok96 25.06.20
 */
export default memo(
  function ForecastsCustomGraphDataPointComponent({
    isSelected,
    ...props
  }: ForecastsCustomGraphDataPointComponentProps) {
    const pointClassName = classNames(
      'size-full rounded-full border border-morning',
      !isSelected && 'bg-background-02',
      isSelected && 'bg-morning',
    );

    return (
      <View
        {...props}
        className={pointClassName}
        style={{
          width: FORECASTS_GRAPH_POINT_SIZE,
          height: FORECASTS_GRAPH_POINT_SIZE,
        }}
      />
    );
  },
  (prev, next) => prev.isSelected === next.isSelected,
);
