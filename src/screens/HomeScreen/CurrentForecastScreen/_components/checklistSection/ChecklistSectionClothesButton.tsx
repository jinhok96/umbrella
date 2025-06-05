import ChecklistLongSleeveIcon from '@components/icon/checklist/ChecklistLongSleeveIcon';
import ChecklistSectionButtonWrapper from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionButtonWrapper';

import type { ChecklistSectionButtonWrapperProps } from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionButtonWrapper.type';

type ChecklistSectionClothesButtonProps = Omit<ChecklistSectionButtonWrapperProps, 'children'>;

export default function ChecklistSectionClothesButton({ ...props }: ChecklistSectionClothesButtonProps) {
  // 복장 추가
  return (
    <ChecklistSectionButtonWrapper {...props}>
      <ChecklistLongSleeveIcon />
    </ChecklistSectionButtonWrapper>
  );
}
