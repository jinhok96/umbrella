import type { ViewProps } from 'react-native';

import type { CurrentForecastScreenSectionHeaderProps } from '@screens/HomeScreen/CurrentForecastScreen/_components/currentForecastScreenSectionHeader/CurrentForecastScreenSectionHeader.type';

export type ForecastsGraphSelectedIndex = number | null;

export type ForecastsGraphSectionWrapperProps = ViewProps & {
  headerText?: CurrentForecastScreenSectionHeaderProps['text'];
  selectedIndex: ForecastsGraphSelectedIndex;
  onSelectedIndexChange?: (index: ForecastsGraphSelectedIndex) => void;
};
