import type { ViewProps } from 'react-native';

import type { lineDataItem } from 'react-native-gifted-charts';

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

export type ForecastsGraphStyle = {
  forecastsGraphHeight?: number;
  forecastsGraphBottomOffset?: number;
  forecastsGraphBottomPadding?: number;
  forecastsGraphTopPadding?: number;
  forecastsGraphMaxValue?: number;
  forecastsGraphSpacing?: number;
  forecastsGraphPointSize?: number;
};

export type ForecastsGraphProps = ViewProps &
  Required<ForecastsGraphStyle> & {
    data: GraphDataItem[];
  };
