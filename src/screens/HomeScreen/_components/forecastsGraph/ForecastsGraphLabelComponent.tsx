import type { PressableProps } from 'react-native';
import { Pressable, View } from 'react-native';

import classNames from 'classnames';

import MontserratText from '@components/fontText/MontserratText';
import PretendardText from '@components/fontText/PretendardText';
import WeatherIcon from '@components/icon/WeatherIcon';
import {
  FORECASTS_GRAPH_BOTTOM_OFFSET,
  FORECASTS_GRAPH_BOTTOM_PADDING,
  FORECASTS_GRAPH_HEIGHT,
  FORECASTS_GRAPH_SPACING,
} from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraph.const';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { LocalizedText } from '@libs/utils/localize/localize.type';
import type { WeatherIconId } from '@services/openWeatherOneCall/axios.type';

type ForecastsGraphLabelComponentProps = Omit<PressableProps, 'children' | 'className'> & {
  text: LocalizedText;
  icon: WeatherIconId;
  temp: number;
  isSelected?: boolean;
};

const HEIGHT = 100; // 라벨 높이

/**
 * `ForecastsGraph`의 라벨 컴포넌트
 * @param text 표시할 텍스트
 * @param icon 날씨 아이콘 id
 * @param temp 기온
 * @param isSelected 선택되었는지 여부
 * @returns 라벨 컴포넌트
 * @jinhok96 25.06.07
 */
export default function ForecastsGraphLabelComponent({
  text,
  icon,
  temp,
  isSelected,
  onPress,
  ...props
}: ForecastsGraphLabelComponentProps) {
  const lang = useSettingStore(state => state.lang);

  const roundedTemp = Math.round(temp * 10) * 0.1;

  const overlayClassName = classNames(
    'absolute left-0 top-0 rounded-xl bg-morning-light',
    !isSelected && 'opacity-0',
    isSelected && 'opacity-100',
  );

  const labelColorClassName = classNames(!isSelected && 'text-text-05', isSelected && 'text-morning');

  return (
    <Pressable
      {...props}
      className="relative z-10 flex items-center gap-2 pb-3 pt-2"
      style={{ width: FORECASTS_GRAPH_SPACING, height: HEIGHT }}
      onPress={onPress}
    >
      <Pressable
        className={overlayClassName}
        style={{
          height: HEIGHT + FORECASTS_GRAPH_HEIGHT + FORECASTS_GRAPH_BOTTOM_PADDING - FORECASTS_GRAPH_BOTTOM_OFFSET,
          width: FORECASTS_GRAPH_SPACING,
        }}
        onPress={onPress}
      />
      <PretendardText
        typo="caption-4"
        className={labelColorClassName}
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
          {roundedTemp}°
        </MontserratText>
      </View>
    </Pressable>
  );
}
