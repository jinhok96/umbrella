import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import MontserratText from '@components/fontText/MontserratText';
import PretendardText from '@components/fontText/PretendardText';
import { useForecastsStore } from '@store/forecastsStore/useForecastsStore';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { LocalizedTextMap } from '@libs/utils/localize/localize.type';

const TEXT_LIST: LocalizedTextMap<'low' | 'high'> = {
  low: {
    en: 'Low',
    ko: '최저',
  },
  high: {
    en: 'High',
    ko: '최고',
  },
};

type WeatherInfoHeaderTempSectionProps = Omit<ViewProps, 'className'>;

/**
 * `WeatherInfoHeader` 오늘 기온 정보 컴포넌트
 * @jinhok96 25.06.07
 */
export default function WeatherInfoHeaderTempSection({ ...props }: WeatherInfoHeaderTempSectionProps) {
  const current = useForecastsStore(state => state.current);
  const daily = useForecastsStore(state => state.daily);
  const lang = useSettingStore(state => state.lang);

  if (!current || !daily) return <></>;

  return (
    <View
      {...props}
      className="flex flex-row items-center gap-3 px-1"
    >
      <MontserratText
        typo="title-1"
        className="text-white"
      >
        {Math.round(current.temp)}°
      </MontserratText>
      <View className="flex flex-row items-center gap-2">
        <View className="flex flex-row items-center gap-1">
          <PretendardText
            typo="caption-3"
            className="text-white"
          >
            {TEXT_LIST.low[lang]}
          </PretendardText>
          <MontserratText
            typo="caption-3"
            className="text-white"
          >
            {Math.round(daily[0].temp.min)}°
          </MontserratText>
        </View>
        <View className="h-3 border-r border-white opacity-40" />
        <View className="flex flex-row items-center gap-1">
          <PretendardText
            typo="caption-3"
            className="text-white"
          >
            {TEXT_LIST.high[lang]}
          </PretendardText>
          <MontserratText
            typo="caption-3"
            className="text-white"
          >
            {Math.round(daily[0].temp.max)}°
          </MontserratText>
        </View>
      </View>
    </View>
  );
}
