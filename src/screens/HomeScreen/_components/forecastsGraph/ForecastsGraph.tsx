import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import type { lineDataItem } from 'react-native-gifted-charts';
import { LineChart } from 'react-native-gifted-charts';
import { interpolate } from 'react-native-reanimated';

import { useGetColorHex } from '@hooks/useGetColorHex';
import { ANIMATION_DURATION } from '@libs/constants/duration.const';
import { getColorHex } from '@libs/utils/getColorHex.util';
import {
  FORECASTS_GRAPH_BOTTOM_OFFSET,
  FORECASTS_GRAPH_HEIGHT,
  FORECASTS_GRAPH_MAX_VALUE,
  FORECASTS_GRAPH_POINT_SIZE,
  FORECASTS_GRAPH_SPACING,
} from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraph.const';

/**
 * lineDataItem 타입
 * 
 * @example  
 * interface lineDataItem {
    value?: number;
    label?: string;
    labelComponent?: Function;
    labelTextStyle?: any;
    secondaryLabel?: string;
    secondaryLabelComponent?: Function;
    secondaryLabelTextStyle?: any;
    dataPointText?: string;
    textShiftX?: number;
    textShiftY?: number;
    textColor?: string;
    textFontSize?: number;
    spacing?: number;
    hideDataPoint?: boolean;
    dataPointHeight?: number;
    dataPointWidth?: number;
    dataPointRadius?: number;
    dataPointColor?: string;
    dataPointShape?: string;
    customDataPoint?: Function;
    stripHeight?: number;
    stripWidth?: number;
    stripColor?: ColorValue | string | any;
    stripOpacity?: number;
    stripStrokeDashArray?: number[];
    focusedDataPointShape?: string;
    focusedDataPointWidth?: number;
    focusedDataPointHeight?: number;
    focusedDataPointColor?: ColorValue | string | any;
    focusedDataPointRadius?: number;
    focusedCustomDataPoint?: Function;
    dataPointLabelComponent?: Function;
    focusedDataPointLabelComponent?: Function;
    dataPointLabelWidth?: number;
    dataPointLabelShiftX?: number;
    dataPointLabelShiftY?: number;
    showStrip?: boolean;
    showVerticalLine?: boolean;
    verticalLineHeight?: number;
    verticalLineUptoDataPoint?: boolean;
    verticalLineColor?: string;
    verticalLineThickness?: number;
    verticalLineStrokeDashArray?: number[];
    pointerShiftX?: number;
    pointerShiftY?: number;
    onPress?: Function;
    onContextMenu?: Function;
    onMouseEnter?: Function;
    onMouseLeave?: Function;
    showXAxisIndex?: boolean;
    hidePointer?: boolean;
}
 */
export type GraphDataItem = Omit<lineDataItem, 'value'> & { value: number };

type ForecastsGraphProps = ViewProps & {
  data: GraphDataItem[];
};

function findMinMax(list: GraphDataItem[]): { minValue?: number; maxValue?: number } {
  if (!list.length) {
    return { minValue: undefined, maxValue: undefined };
  }

  let minValue = list[0].value;
  let maxValue = list[0].value;

  list.forEach(item => {
    if (item.value < minValue) minValue = item.value;
    if (item.value > maxValue) maxValue = item.value;
  });

  return { minValue, maxValue };
}

function CustomGraphDataPointComponent() {
  const backgroundColor = getColorHex('light', '--color-background-02');

  return (
    <View
      className="size-full rounded-full border border-morning"
      style={{
        width: FORECASTS_GRAPH_POINT_SIZE,
        height: FORECASTS_GRAPH_POINT_SIZE,
        backgroundColor,
      }}
    />
  );
}

export default function ForecastsGraph({ data, ...props }: ForecastsGraphProps) {
  const morningColor = useGetColorHex('--color-morning');

  const { minValue = 0, maxValue = 0 } = findMinMax(data);

  const newData = data.map(item => {
    // paddingBottom 계산
    const bottomPaddingValue = FORECASTS_GRAPH_BOTTOM_OFFSET / (FORECASTS_GRAPH_HEIGHT * 0.01);

    return {
      ...item,
      value: interpolate(item.value, [minValue, maxValue], [bottomPaddingValue, FORECASTS_GRAPH_MAX_VALUE]),
      customDataPoint: () => CustomGraphDataPointComponent(),
    };
  });

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
