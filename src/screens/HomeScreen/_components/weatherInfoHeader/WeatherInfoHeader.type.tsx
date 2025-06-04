import type { ViewProps } from 'react-native';

import type { SharedValue } from 'react-native-reanimated';

export type WeatherInfoHeaderProps = Omit<ViewProps, 'className'> & {
  scrollValue: SharedValue<number>;
};
