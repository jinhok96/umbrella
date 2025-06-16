import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import classNames from 'classnames';

import MontserratText from '@components/fontText/MontserratText';
import PretendardText from '@components/fontText/PretendardText';
import WeatherIcon from '@components/icon/WeatherIcon';
import Show from '@components/wrapper/Show';
import WeatherDetailCardMainDataSubItem from '@screens/HomeScreen/_components/weatherDetailCard/WeatherDetailCardMainDataSubItem';

import type { WeatherDetailCardMainDataProps } from '@screens/HomeScreen/_components/weatherDetailCard/WeatherDetailCardMainData.type';

type WeatherDetailCardMainDataMainItemProps = Omit<ViewProps, 'className'> & {
  value?: string;
};

function WeatherDetailCardMainDataMainItem({
  children: label,
  value,
  ...props
}: WeatherDetailCardMainDataMainItemProps) {
  return (
    <Show when={value !== undefined}>
      <View
        {...props}
        className="flex flex-row items-center gap-1"
      >
        <Show when={!!label}>
          <PretendardText
            typo="title-5"
            className="text-text-01"
          >
            {label}
          </PretendardText>
          <PretendardText
            typo="title-5"
            className="text-text-01"
          >
            •
          </PretendardText>
        </Show>
        <MontserratText
          typo="title-5"
          className="text-text-01"
        >
          {value}
        </MontserratText>
      </View>
    </Show>
  );
}

/**
 * `WeatherDetailCard`의 메인 데이터를 표시하는 컴포넌트
 * @param isSelected 선택되었는지 여부
 * @param badgeLabel 뱃지 라벨
 * @param mainLabel 메인 라벨
 * @param mainValue 메인 수치
 * @param firstSubLabel 첫번째 서브 라벨
 * @param firstSubValue 첫번째 서브 수치
 * @param secondSubLabel 두번째 서브 라벨
 * @param secondSubValue 두번째 서브 수치
 * @param thirdSubLabel 세번째 서브 라벨
 * @param thirdSubValue 세번째 서브 수치
 * @param weatherIconId 날씨 아이콘 id
 * @jinhok96 25.06.12
 */
export default function WeatherDetailCardMainData({
  isSelected,
  badgeLabel,
  mainLabel,
  mainValue,
  firstSubLabel,
  firstSubValue,
  secondSubLabel,
  secondSubValue,
  thirdSubLabel,
  thirdSubValue,
  weatherIconId,
  ...props
}: WeatherDetailCardMainDataProps & { isSelected: boolean }) {
  const badgeClassName = classNames(
    'w-12 py-1 flex items-center justify-center rounded-lg',
    isSelected && 'bg-morning',
    !isSelected && 'bg-text-08',
  );

  const badgeTextColorClassName = classNames(isSelected && 'text-white', !isSelected && 'text-text-03');

  return (
    <View
      {...props}
      className="-left-2 flex w-full flex-row items-center justify-between"
    >
      <View className="flex flex-row items-center gap-2">
        {/* 뱃지 */}
        <View className={badgeClassName}>
          <PretendardText
            typo="caption-3"
            className={badgeTextColorClassName}
          >
            {badgeLabel}
          </PretendardText>
        </View>
        {/* 메인 */}
        <WeatherDetailCardMainDataMainItem value={mainValue}>{mainLabel}</WeatherDetailCardMainDataMainItem>
      </View>
      <View className="flex flex-row items-center gap-2">
        {/* 첫번째 서브 */}
        <WeatherDetailCardMainDataSubItem value={firstSubValue}>{firstSubLabel}</WeatherDetailCardMainDataSubItem>
        {/* 파티션 */}
        <Show when={!!secondSubLabel || secondSubValue !== undefined}>
          <View className="h-3 w-[0.0625rem] bg-transparency-09" />
        </Show>
        {/* 두번째 서브 */}
        <WeatherDetailCardMainDataSubItem value={secondSubValue}>{secondSubLabel}</WeatherDetailCardMainDataSubItem>
        {/* 파티션 */}
        <Show when={!!thirdSubLabel || thirdSubValue !== undefined}>
          <View className="h-3 w-[0.0625rem] bg-transparency-09" />
        </Show>
        {/* 세번째 서브 */}
        <WeatherDetailCardMainDataSubItem value={thirdSubValue}>{thirdSubLabel}</WeatherDetailCardMainDataSubItem>
        {/* 날씨 아이콘; 여기에서 padding 적용 */}
        <View className="py-3 pr-1">
          <View className="size-6 shrink-0">
            <WeatherIcon icon={weatherIconId} />
          </View>
        </View>
      </View>
    </View>
  );
}
