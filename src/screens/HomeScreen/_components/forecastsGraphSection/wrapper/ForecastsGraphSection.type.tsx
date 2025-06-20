import type { ViewProps } from 'react-native';

import type {
  ForecastsGraphProps,
  ForecastsGraphStyle,
} from '@screens/HomeScreen/_components/forecastsGraphSection/graph/ForecastsGraph.type';
import type { ForecastsGraphSectionWrapperProps } from '@screens/HomeScreen/_components/forecastsGraphSection/wrapper/ForecastsGraphSectionWrapper.type';

export type ForecastsGraphSectionProps = ViewProps &
  Pick<ForecastsGraphSectionWrapperProps, 'selectedIndex' | 'hideHeader'> &
  Partial<Pick<ForecastsGraphSectionWrapperProps, 'forecastsGraphContainerMargin' | 'headerText'>> &
  ForecastsGraphStyle &
  Pick<ForecastsGraphProps, 'data'> & {
    onSelectedIndexChange?: (index: number) => void;
  };
