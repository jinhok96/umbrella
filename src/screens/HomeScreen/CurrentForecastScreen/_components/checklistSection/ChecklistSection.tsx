import { useState } from 'react';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import ChecklistSectionMaskButton from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionMaskButton';
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

  const handleButtonPress = (type: ChecklistType) => {
    setSelected(type);
  };

  return (
    <View
      {...props}
      className="rounded-[1.25rem] bg-background-02"
    >
      <CurrentForecastScreenSectionHeader text={SECTION_HEADER_TEXT} />
      <View className="w-full p-5 pt-0">
        <View className="flex h-16 w-full flex-row items-center justify-center gap-3">
          <ChecklistSectionUmbrellaButton
            selected={selected === 'umbrella'}
            onPress={() => handleButtonPress('umbrella')}
          />
          <ChecklistSectionMaskButton
            selected={selected === 'mask'}
            onPress={() => handleButtonPress('mask')}
          />
        </View>
      </View>
    </View>
  );
}
