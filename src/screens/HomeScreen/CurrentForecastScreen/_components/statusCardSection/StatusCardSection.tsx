import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import StatusCard from '@screens/HomeScreen/CurrentForecastScreen/_components/statusCardSection/StatusCard';

import type { LocalizedTextMap } from '@libs/utils/localize/localize.type';

const LABEL_LIST: LocalizedTextMap<'pm10' | 'pm25' | 'uv' | 'o3'> = {
  pm10: {
    en: 'PM 10',
    ko: '미세먼지',
  },
  pm25: {
    en: 'PM 2.5',
    ko: '초미세먼지',
  },
  uv: {
    en: 'UV',
    ko: '자외선지수',
  },
  o3: {
    en: 'Ozone',
    ko: '오존',
  },
};

type StatusCardSectionProps = Omit<ViewProps, 'className'>;

function Section({ ...props }: ViewProps) {
  return (
    <View
      {...props}
      className="flex flex-row gap-3"
    />
  );
}

/**
 * 현재 날씨 상태를 보여주는 카드 섹션
 * @jinhok96 25.06.12
 */
export default function StatusCardSection({ ...props }: StatusCardSectionProps) {
  return (
    <View
      {...props}
      className="flex gap-3"
    >
      <Section>
        <StatusCard
          label={LABEL_LIST.pm10}
          type="good"
        />
        <StatusCard
          label={LABEL_LIST.pm25}
          type="normal"
        />
      </Section>
      <Section>
        <StatusCard
          label={LABEL_LIST.uv}
          type="bad"
        />
        <StatusCard
          label={LABEL_LIST.o3}
          type="bad"
        />
      </Section>
    </View>
  );
}
