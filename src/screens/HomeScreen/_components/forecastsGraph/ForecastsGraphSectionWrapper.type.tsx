import type { ViewProps } from 'react-native';

import type { ForecastsGraphStyle } from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraph.type';
import type { CurrentForecastScreenSectionHeaderProps } from '@screens/HomeScreen/CurrentForecastScreen/_components/currentForecastScreenSectionHeader/CurrentForecastScreenSectionHeader.type';

export type ForecastsGraphSelectedIndex = number | null;

export type ForecastsGraphSectionWrapperProps = ViewProps &
  Required<Pick<ForecastsGraphStyle, 'forecastsGraphSpacing'>> & {
    headerText?: CurrentForecastScreenSectionHeaderProps['text'];
    selectedIndex?: ForecastsGraphSelectedIndex;
    onSelectedIndexChange?: (index: ForecastsGraphSelectedIndex) => void;
    hideHeader?: boolean;
    forecastsGraphContainerMargin: number;
  };
