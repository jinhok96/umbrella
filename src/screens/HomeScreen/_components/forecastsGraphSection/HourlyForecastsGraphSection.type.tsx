import type { ForecastsGraphSectionProps } from '@screens/HomeScreen/_components/forecastsGraphSection/wrapper/ForecastsGraphSection.type';

export type HourlyForecastsGraphSectionProps = Omit<ForecastsGraphSectionProps, 'data' | 'children'>;
