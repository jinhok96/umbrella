import type { ReactNode } from 'react';
import type { ViewProps } from 'react-native';

import type { WeatherIconId } from '@services/openWeatherOneCall/axios.type';

export type WeatherDetailCardMainDataProps = Omit<ViewProps, 'children' | 'className'> & {
  badgeLabel: string;
  mainLabel?: ReactNode;
  mainValue: string;
  firstSubLabel: ReactNode;
  firstSubValue: string;
  secondSubLabel?: ReactNode;
  secondSubValue?: string;
  thirdSubLabel?: ReactNode;
  thirdSubValue?: string;
  weatherIconId: WeatherIconId;
};
