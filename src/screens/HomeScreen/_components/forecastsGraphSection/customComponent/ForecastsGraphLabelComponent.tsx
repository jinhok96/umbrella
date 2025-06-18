import type { PressableProps } from 'react-native';
import { Pressable, View } from 'react-native';

import classNames from 'classnames';

import MontserratText from '@components/fontText/MontserratText';
import PretendardText from '@components/fontText/PretendardText';
import WeatherIcon from '@components/icon/WeatherIcon';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { LocalizedText } from '@libs/utils/localize/localize.type';
import type { ForecastsGraphProps } from '@screens/HomeScreen/_components/forecastsGraphSection/graph/ForecastsGraph.type';
import type { WeatherIconId } from '@services/openWeatherOneCall/axios.type';

type ForecastsGraphLabelComponentProps = Omit<PressableProps, 'children' | 'className'> &
  Required<
    Pick<
      ForecastsGraphProps,
      'forecastsGraphHeight' | 'forecastsGraphBottomOffset' | 'forecastsGraphBottomPadding' | 'forecastsGraphSpacing'
    >
  > & {
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
 * @param forecastsGraphHeight 그래프 높이
 * @param forecastsGraphBottomOffset 그래프 바텀 오프셋
 * @param forecastsGraphBottomPadding 그래프 바텀 패딩
 * @param forecastsGraphSpacing 그래프 간격
 * @returns 라벨 컴포넌트
 * @jinhok96 25.06.18
 */
export default function ForecastsGraphLabelComponent({
  text,
  icon,
  temp,
  isSelected,
  forecastsGraphHeight,
  forecastsGraphBottomOffset,
  forecastsGraphBottomPadding,
  forecastsGraphSpacing,
  onPress,
  ...props
}: ForecastsGraphLabelComponentProps) {
  const lang = useSettingStore(state => state.lang);

  const overlayClassName = classNames(
    'absolute left-0 top-0 rounded-xl bg-morning-light transition-none',
    !isSelected && 'opacity-0',
    isSelected && 'opacity-100',
  );

  const labelColorClassName = classNames(
    'transition-none',
    !isSelected && 'text-text-05',
    isSelected && 'text-morning',
  );

  return (
    <Pressable
      {...props}
      className="relative z-10 flex items-center gap-2 pb-3 pt-2"
      style={{ width: forecastsGraphSpacing, height: HEIGHT }}
      onPress={onPress}
    >
      <Pressable
        className={overlayClassName}
        style={{
          height: HEIGHT + forecastsGraphHeight + forecastsGraphBottomPadding - forecastsGraphBottomOffset,
          width: forecastsGraphSpacing,
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
          {Math.round(temp)}°
        </MontserratText>
      </View>
    </Pressable>
  );
}
