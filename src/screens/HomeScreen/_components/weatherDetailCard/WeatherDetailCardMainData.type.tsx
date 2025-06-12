import type { ViewProps } from 'react-native';

import type { LocalizedText } from '@libs/utils/localize/localize.type';
import type { WeatherIconId } from '@services/openWeatherOneCall/axios.type';

export type WeatherDetailCardMainDataProps = Omit<ViewProps, 'children' | 'className'> & {
  badgeLabel: string;
  mainLabel?: LocalizedText;
  mainValue: string;
  firstSubLabel: LocalizedText;
  firstSubValue: string;
  secondSubLabel: LocalizedText;
  secondSubValue: string;
  weatherIconId: WeatherIconId;
};
