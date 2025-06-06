import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import MontserratText from '@components/fontText/MontserratText';
import PretendardText from '@components/fontText/PretendardText';
import WeatherIcon from '@components/icon/WeatherIcon';
import { FORECASTS_GRAPH_SPACING } from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraph.const';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { LocalizedText } from '@libs/utils/localize/localize.type';
import type { WeatherIconId } from '@services/openWeatherOneCall/axios.type';

type ForecastsGraphLabelComponentProps = Omit<ViewProps, 'children' | 'className'> & {
  text: LocalizedText;
  icon: WeatherIconId;
  temp: number;
};

export default function ForecastsGraphLabelComponent({
  text,
  icon,
  temp,
  ...props
}: ForecastsGraphLabelComponentProps) {
  const lang = useSettingStore(state => state.lang);

  return (
    <View
      {...props}
      className="flex items-center gap-2"
      style={{ width: FORECASTS_GRAPH_SPACING }}
    >
      <PretendardText
        typo="caption-4"
        className="text-text-05"
      >
        {text[lang]}
      </PretendardText>
      <View className="flex items-center gap-1">
        <View className="size-7">
          <WeatherIcon icon={icon} />
        </View>
        <MontserratText
          typo="title-5"
          className="text-text-01"
        >
          {temp}°
        </MontserratText>
      </View>
    </View>
  );
}
