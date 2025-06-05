import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import PretendardText from '@components/fontText/PretendardText';

type WeatherInfoHeaderTempSectionProps = Omit<ViewProps, 'className'>;

/**
 * `WeatherInfoHeader` 오늘 날씨 요약 컴포넌트
 * @jinhok96 25.06.05
 */
export default function WeatherInfoHeaderSummary({ ...props }: WeatherInfoHeaderTempSectionProps) {
  return (
    <View
      {...props}
      className="flex flex-row"
    >
      <PretendardText
        typo="body-1"
        className="rounded-xl bg-weather-summary px-4 py-2 text-white"
      >
        오늘 오후 4시에 비가 올 예정이에요!
      </PretendardText>
    </View>
  );
}
