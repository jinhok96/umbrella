import type { PressableProps } from 'react-native';
import { Pressable, View } from 'react-native';

import classNames from 'classnames';

import WeatherDetailCardMainData from '@screens/HomeScreen/_components/weatherDetailCard/WeatherDetailCardMainData';

import type { WeatherDetailCardMainDataProps } from '@screens/HomeScreen/_components/weatherDetailCard/WeatherDetailCardMainData.type';

type WeatherDetailCardProps = Omit<PressableProps, 'children' | 'className'> & {
  isSelected: boolean;
  mainDataProps: WeatherDetailCardMainDataProps;
};

export default function WeatherDetailCard({ isSelected, mainDataProps, ...props }: WeatherDetailCardProps) {
  const containerClassName = classNames('rounded-xl bg-background-02', isSelected && '', !isSelected && '');

  const cardItemContainerClassName = classNames(
    'flex gap-2 rounded-xl px-4 mx-4 bg-background-03 transition-[background-color,height,opacity,padding-top,padding-bottom,margin-top,margin-bottom]',
    !isSelected && 'h-0 py-0 mb-0 mt-0 opacity-0',
    isSelected && 'h-24 py-4 mb-4 mt-1 opacity-100',
  );

  return (
    <Pressable
      {...props}
      className={containerClassName}
    >
      <WeatherDetailCardMainData
        {...mainDataProps}
        isSelected={isSelected}
      />
      <View className={cardItemContainerClassName} />
    </Pressable>
  );
}
