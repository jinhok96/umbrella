import type { PropsWithChildren } from 'react';
import type { PressableProps } from 'react-native';
import { Pressable, View } from 'react-native';

import classNames from 'classnames';

import PretendardText from '@components/fontText/PretendardText';
import Show from '@components/wrapper/Show';
import WeatherDetailCardMainData from '@screens/HomeScreen/_components/weatherDetailCard/WeatherDetailCardMainData';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { LocalizedText } from '@libs/utils/localize/localize.type';
import type { WeatherDetailCardMainDataProps } from '@screens/HomeScreen/_components/weatherDetailCard/WeatherDetailCardMainData.type';

type WeatherDetailCardProps = Omit<PressableProps, 'children' | 'className'> &
  PropsWithChildren<{
    type: 'hourly' | 'daily';
    isSelected: boolean;
    label?: string | LocalizedText;
    mainDataProps: WeatherDetailCardMainDataProps;
  }>;

export default function WeatherDetailCard({
  type,
  isSelected,
  label,
  mainDataProps,
  children,
  ...props
}: WeatherDetailCardProps) {
  const lang = useSettingStore(state => state.lang);

  const containerClassName = classNames('rounded-xl bg-background-02', isSelected && '', !isSelected && '');

  const cardItemContainerClassName = classNames(
    'flex gap-2 rounded-xl px-4 mx-4 bg-background-03 overflow-hidden transition-[background-color,height,opacity,padding-top,padding-bottom,margin-top,margin-bottom]',
    !isSelected && 'py-0 mb-0 mt-0 opacity-0 h-0',
    isSelected && 'py-4 mb-4 mt-1 opacity-100',
    isSelected && type === 'hourly' && 'h-[14.8rem]', // py(16*2) + body2(14*1.6)*7 + gap(8)*(7-1) = 236.8px = 14.8rem
    isSelected && type === 'daily' && 'h-[12.9rem]', // py(16*2) + body2(14*1.6)*6 + gap(8)*(6-1) = 206.4px = 12.9rem
  );

  return (
    <View>
      <Show when={!!label}>
        <PretendardText
          typo="caption-3"
          className="pb-2 text-text-05"
        >
          {typeof label === 'string' ? label : label?.[lang]}
        </PretendardText>
      </Show>
      <Pressable
        {...props}
        className={containerClassName}
      >
        <WeatherDetailCardMainData
          {...mainDataProps}
          isSelected={isSelected}
        />
        <View className={cardItemContainerClassName}>{children}</View>
      </Pressable>
    </View>
  );
}
