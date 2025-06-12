import { View } from 'react-native';

import classNames from 'classnames';

import MontserratText from '@components/fontText/MontserratText';
import PretendardText from '@components/fontText/PretendardText';
import WeatherIcon from '@components/icon/WeatherIcon';
import Show from '@components/wrapper/Show';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { WeatherDetailCardMainDataProps } from '@screens/HomeScreen/_components/weatherDetailCard/WeatherDetailCardMainData.type';

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
  weatherIconId,
  ...props
}: WeatherDetailCardMainDataProps & { isSelected: boolean }) {
  const lang = useSettingStore(state => state.lang);

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
        <View className="flex flex-row items-center gap-1">
          <Show when={!!mainLabel}>
            <PretendardText
              typo="title-5"
              className="text-text-01"
            >
              {mainLabel?.[lang]}
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
            {mainValue}
          </MontserratText>
        </View>
      </View>
      <View className="flex flex-row items-center gap-2">
        {/* 첫번째 서브 */}
        <PretendardText
          typo="title-5"
          className="text-text-04"
        >
          {firstSubLabel[lang]}
        </PretendardText>
        <MontserratText
          typo="title-5"
          className="text-text-04"
        >
          {firstSubValue}
        </MontserratText>
        {/* 파티션 */}
        <View className="h-3 w-[0.0625rem] bg-transparency-09" />
        {/* 두번째 서브 */}
        <PretendardText
          typo="title-5"
          className="text-text-04"
        >
          {secondSubLabel[lang]}
        </PretendardText>
        <MontserratText
          typo="title-5"
          className="text-text-04"
        >
          {secondSubValue}
        </MontserratText>
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
