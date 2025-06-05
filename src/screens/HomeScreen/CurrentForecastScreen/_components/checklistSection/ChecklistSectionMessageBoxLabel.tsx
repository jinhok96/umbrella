import { useEffect, useState } from 'react';
import { View } from 'react-native';

import classNames from 'classnames';

import ChecklistSectionMessageBoxLabelDecoSvg from '@assets/svg/ChecklistSectionMessageBoxLabelDeco.svg';
import PretendardText from '@components/fontText/PretendardText';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { PretendardTextProps } from '@components/fontText/PretendardText.type';
import type { LocalizedTextMap } from '@libs/utils/localize/localize.type';
import type { ChecklistType } from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionButtonWrapper.type';
import type { ChecklistSectionMessageBoxProps } from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionMessageBox.type';

type ChecklistSectionMessageBoxLabelProps = Omit<PretendardTextProps, 'typo' | 'className'> &
  Pick<ChecklistSectionMessageBoxProps, 'selected'>;

/**
 * `ChecklistSectionMessageBox`의 라벨 컴포넌트
 * @param selected 선택된 체크리스트 타입
 * @jinhok96 25.06.06
 */
export default function ChecklistSectionMessageBoxLabel({ selected, ...props }: ChecklistSectionMessageBoxLabelProps) {
  const lang = useSettingStore(state => state.lang);

  // !selected일 때 애니메이션 중 라벨이 없어지지 않도록 최근 상태 저장
  const [latestSelected, setLatestSelected] = useState(selected);

  // 나중에 수정 예정
  const label: LocalizedTextMap<ChecklistType> = {
    umbrella: {
      ko: '우산을 챙겨요',
      en: 'Umbrella',
    },
    mask: {
      ko: '마스크를 착용해요',
      en: 'Mask',
    },
    clothes: {
      ko: '긴 팔을 입어요',
      en: 'Clothes',
    },
    suncream: {
      ko: '선크림을 발라요',
      en: 'Sunscreen',
    },
  };

  useEffect(() => {
    if (!selected) return;
    setLatestSelected(selected);
  }, [selected]);

  const containerClassName = classNames(
    'absolute left-3 transition-[top,height,opacity] overflow-hidden',
    !selected && 'top-0 h-0 opacity-0',
    selected && 'top-4 h-[1.875rem] opacity-100',
  );

  return (
    <View className={containerClassName}>
      <View className="relative flex h-6 flex-row items-center rounded-lg rounded-bl-none bg-morning px-2">
        <PretendardText
          {...props}
          typo="button-2"
          className="!text-[0.75rem] text-white"
        >
          {/* latestSelected만 사용하면 부모보다 변경 속도가 늦어서 1순위로 selected, 없으면 latestSelected 사용 */}
          {latestSelected && label[selected || latestSelected][lang]}
        </PretendardText>
        <View className="absolute -bottom-1.5 left-0 h-1.5 w-2">
          <ChecklistSectionMessageBoxLabelDecoSvg />
        </View>
      </View>
    </View>
  );
}
