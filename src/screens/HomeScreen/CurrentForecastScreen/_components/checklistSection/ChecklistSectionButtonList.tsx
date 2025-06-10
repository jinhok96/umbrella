import Show from '@components/wrapper/Show';
import ChecklistSectionClothesButton from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionClothesButton';
import ChecklistSectionMaskButton from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionMaskButton';
import ChecklistSectionSuncreamButton from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionSuncreamButton';
import ChecklistSectionUmbrellaButton from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionUmbrellaButton';

import type { ChecklistType } from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionButtonWrapper.type';

type ChecklistSectionButtonListRowProps = {
  type?: ChecklistType;
  row: number;
  selectedType?: ChecklistType;
  onSelectedChange: (props: { type: ChecklistType; row: number } | null) => void;
};

/**
 * `ChecklistSection`의 버튼 리스트 컴포넌트
 * @param type 렌더링할 체크리스트 타입
 * @param row 현재 배치된 행 인덱스
 * @param selectedType 선택된 체크리스트 타입
 * @param onSelectedChange 선택된 체크리스트 타입 변경 함수
 * @jinhok96 25.06.10
 */
export function ChecklistSectionButtonListRow({
  type,
  row,
  selectedType,
  onSelectedChange,
}: ChecklistSectionButtonListRowProps) {
  const handleButtonPress = (currentType: ChecklistType) => {
    if (currentType === selectedType) return onSelectedChange(null);
    onSelectedChange({ type: currentType, row });
  };

  return (
    <>
      <Show when={type === 'umbrella'}>
        <ChecklistSectionUmbrellaButton
          isSelected={selectedType === 'umbrella'}
          onPress={() => handleButtonPress('umbrella')}
        />
      </Show>
      <Show when={type === 'mask'}>
        <ChecklistSectionMaskButton
          isSelected={selectedType === 'mask'}
          onPress={() => handleButtonPress('mask')}
        />
      </Show>
      <Show when={type === 'clothes'}>
        <ChecklistSectionClothesButton
          isSelected={selectedType === 'clothes'}
          onPress={() => handleButtonPress('clothes')}
        />
      </Show>
      <Show when={type === 'suncream'}>
        <ChecklistSectionSuncreamButton
          isSelected={selectedType === 'suncream'}
          onPress={() => handleButtonPress('suncream')}
        />
      </Show>
    </>
  );
}
