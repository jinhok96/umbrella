import { useState } from 'react';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import classNames from 'classnames';

import ChecklistSectionClothesButton from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionClothesButton';
import ChecklistSectionMaskButton from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionMaskButton';
import ChecklistSectionMessageBox from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionMessageBox';
import ChecklistSectionSuncreamButton from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionSuncreamButton';
import ChecklistSectionUmbrellaButton from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionUmbrellaButton';
import CurrentForecastScreenSectionHeader from '@screens/HomeScreen/CurrentForecastScreen/_components/currentForecastScreenSectionHeader/CurrentForecastScreenSectionHeader';

import type { LocalizedText } from '@libs/utils/localize/localize.type';
import type { ChecklistType } from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionButton.type';

const SECTION_HEADER_TEXT: LocalizedText = {
  ko: '외출 전 체크! 챙기셨나요?',
  en: 'All set? Double-check!',
};

type ChecklistSection = Omit<ViewProps, 'className'>;

export default function ChecklistSection({ ...props }: ChecklistSection) {
  const [selected, setSelected] = useState<ChecklistType | null>(null);
  const [messageLine, setMessageLine] = useState(0);

  const handleButtonPress = (type: ChecklistType) => {
    setSelected(selected === type ? null : type);
  };

  // transition-[height]을 적용하기 위해 messageLine에 따라 height 절댓값 지정 (fit, full은 transition 작동하지 않음)
  const messageContainerClassName = classNames(
    'flex transition-[height] overflow-hidden duration-1000',
    !selected && 'h-0',
    selected && messageLine === 1 && 'h-[5.4rem]',
    selected && messageLine === 2 && 'h-[6.9rem]',
  );

  return (
    <View
      {...props}
      className="rounded-[1.25rem] bg-background-02"
    >
      <CurrentForecastScreenSectionHeader text={SECTION_HEADER_TEXT} />
      <View className="w-full p-5 pt-0">
        <View className="flex h-16 w-full flex-row items-center justify-center gap-3">
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
        <View className={messageContainerClassName}>
          <ChecklistSectionMessageBox
            selected={selected}
            onTextLayout={e => setMessageLine(e.nativeEvent.lines.length)}
          />
        </View>
      </View>
    </View>
  );
}
