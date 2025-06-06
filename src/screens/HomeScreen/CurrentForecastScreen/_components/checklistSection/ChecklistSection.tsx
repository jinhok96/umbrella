import { useState } from 'react';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import ChecklistSectionClothesButton from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionClothesButton';
import ChecklistSectionMaskButton from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionMaskButton';
import ChecklistSectionMessageBox from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionMessageBox';
import ChecklistSectionSuncreamButton from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionSuncreamButton';
import ChecklistSectionUmbrellaButton from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionUmbrellaButton';
import CurrentForecastScreenSectionHeader from '@screens/HomeScreen/CurrentForecastScreen/_components/currentForecastScreenSectionHeader/CurrentForecastScreenSectionHeader';

import type { LocalizedText } from '@libs/utils/localize/localize.type';
import type { ChecklistType } from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionButtonWrapper.type';

const SECTION_HEADER_TEXT: LocalizedText = {
  ko: '외출 전 체크! 챙기셨나요?',
  en: 'All set? Double-check!',
};

type ChecklistSection = Omit<ViewProps, 'className'>;

/**
 * 체크리스트 섹션 컴포넌트
 * @jinhok96 25.06.06
 */
export default function ChecklistSection({ ...props }: ChecklistSection) {
  const [selected, setSelected] = useState<ChecklistType | null>(null);

  const handleButtonPress = (type: ChecklistType) => {
    setSelected(selected === type ? null : type);
  };

  return (
    <View
      {...props}
      className="rounded-[1.25rem] bg-background-02"
    >
      <CurrentForecastScreenSectionHeader text={SECTION_HEADER_TEXT} />
      <View className="w-full pb-5 pt-0">
        <View className="flex w-full flex-row items-center justify-between gap-3 px-5">
          <ChecklistSectionUmbrellaButton
            isSelected={selected === 'umbrella'}
            onPress={() => handleButtonPress('umbrella')}
          />
          <ChecklistSectionMaskButton
            isSelected={selected === 'mask'}
            onPress={() => handleButtonPress('mask')}
          />
          <ChecklistSectionClothesButton
            isSelected={selected === 'clothes'}
            onPress={() => handleButtonPress('clothes')}
          />
          <ChecklistSectionSuncreamButton
            isSelected={selected === 'suncream'}
            onPress={() => handleButtonPress('suncream')}
          />
        </View>
        <ChecklistSectionMessageBox selected={selected} />
      </View>
    </View>
  );
}
