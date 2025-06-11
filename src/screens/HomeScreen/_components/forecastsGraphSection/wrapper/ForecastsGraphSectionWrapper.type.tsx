import type { ViewProps } from 'react-native';

import type { ForecastsGraphStyle } from '@screens/HomeScreen/_components/forecastsGraphSection/graph/ForecastsGraph.type';
import type { CurrentForecastScreenSectionHeaderProps } from '@screens/HomeScreen/CurrentForecastScreen/_components/currentForecastScreenSectionHeader/CurrentForecastScreenSectionHeader.type';

export type ForecastsGraphSelectedIndex = number | null;

export type ForecastsGraphSectionWrapperProps = ViewProps &
  Required<Pick<ForecastsGraphStyle, 'forecastsGraphSpacing'>> & {
    headerText?: CurrentForecastScreenSectionHeaderProps['text'];
    selectedIndex?: ForecastsGraphSelectedIndex;
    hideHeader?: boolean;
    forecastsGraphContainerMargin: number;
  };
