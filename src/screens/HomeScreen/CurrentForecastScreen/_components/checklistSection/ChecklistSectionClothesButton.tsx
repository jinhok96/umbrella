import ChecklistLongSleeveIcon from '@components/icon/checklist/ChecklistLongSleeveIcon';
import ChecklistSectionButton from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionButton';

import type { ChecklistSectionButtonProps } from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionButton.type';

type ChecklistSectionClothesButtonProps = Omit<ChecklistSectionButtonProps, 'children'>;

export default function ChecklistSectionClothesButton({ ...props }: ChecklistSectionClothesButtonProps) {
  // 복장 추가
  return (
    <ChecklistSectionButton {...props}>
      <ChecklistLongSleeveIcon />
    </ChecklistSectionButton>
  );
}
