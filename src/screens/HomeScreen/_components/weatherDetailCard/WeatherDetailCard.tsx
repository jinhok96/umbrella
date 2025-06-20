import type { PropsWithChildren } from 'react';
import { memo, useEffect, useState } from 'react';
import type { PressableProps } from 'react-native';
import { Pressable, View } from 'react-native';

import classNames from 'classnames';

import PretendardText from '@components/fontText/PretendardText';
import Show from '@components/wrapper/Show';
import { ANIMATION_DURATION } from '@libs/constants/duration.const';
import WeatherDetailCardMainData from '@screens/HomeScreen/_components/weatherDetailCard/WeatherDetailCardMainData';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { LocalizedText } from '@libs/utils/localize/localize.type';
import type { WeatherDetailCardMainDataProps } from '@screens/HomeScreen/_components/weatherDetailCard/WeatherDetailCardMainData.type';

type WeatherDetailCardProps = Omit<PressableProps, 'children'> &
  PropsWithChildren<{
    type: 'hourly' | 'daily';
    isSelected: boolean;
    label?: string | LocalizedText;
    mainDataProps: WeatherDetailCardMainDataProps;
  }>;

/**
 * 날씨 데이터 상세 카드
 * @param type 날씨 데이터 타입; `hourly` | `daily`
 * @param isSelected 선택된 날씨 데이터 카드인지 여부
 * @param label 카드 헤더 라벨
 * @param mainDataProps 메인 데이터 컴포넌트 props
 * @param children `WeatherDetailCardItem` 컴포넌트를 배치할 부분
 * @jinhok96 25.06.19
 */
export default memo(
  function WeatherDetailCard({
    type,
    isSelected,
    label,
    mainDataProps,
    children,
    className,
    ...props
  }: WeatherDetailCardProps) {
    const lang = useSettingStore(state => state.lang);
    const [isExpanded, setIsExpanded] = useState(false);

    const containerClassName = classNames('rounded-xl bg-background-02');

    const cardItemContainerClassName = classNames(
      'flex gap-2 rounded-xl px-4 mx-4 bg-background-03 overflow-hidden transition-[background-color,height,opacity,padding-top,padding-bottom,margin-top,margin-bottom]',
      !isExpanded && 'py-0 mb-0 mt-0 opacity-0 h-0',
      isExpanded && 'py-4 mb-4 mt-1 opacity-100',
      isExpanded && type === 'hourly' && 'h-[14.8rem]', // 7개; py(16*2) + body2(14*1.6)*7 + gap(8)*(7-1) = 236.8px = 14.8rem
      isExpanded && type === 'daily' && 'h-[11rem]', // 5개; py(16*2) + body2(14*1.6)*5 + gap(8)*(5-1) = 176px = 11rem
    );

    useEffect(() => {
      // 스크롤 애니메이션 종료 후 isExpanded 업데이트
      const timeoutId = setTimeout(() => {
        setIsExpanded(isSelected);
      }, ANIMATION_DURATION);

      return () => {
        clearTimeout(timeoutId);
      };
    }, [isSelected]);

    return (
      <View className={className}>
        <Show when={!!label}>
          <PretendardText
            typo="caption-3"
            className="pb-2 text-text-04"
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
  },
  (prev, next) => prev.isSelected === next.isSelected,
);
