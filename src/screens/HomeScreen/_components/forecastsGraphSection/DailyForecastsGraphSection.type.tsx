import type { ForecastsGraphSectionProps } from '@screens/HomeScreen/_components/forecastsGraphSection/wrapper/ForecastsGraphSection.type';

export type DailyForecastsGraphSectionProps = Omit<ForecastsGraphSectionProps, 'data' | 'children'>;
