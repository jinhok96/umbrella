import ChecklistMaskIcon from '@components/icon/checklist/ChecklistMaskIcon';
import ChecklistSectionButtonWrapper from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionButtonWrapper';

import type { ChecklistSectionButtonWrapperProps } from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionButtonWrapper.type';

type ChecklistSectionMaskButtonProps = Omit<ChecklistSectionButtonWrapperProps, 'children'>;

export default function ChecklistSectionMaskButton({ ...props }: ChecklistSectionMaskButtonProps) {
  return (
    <ChecklistSectionButtonWrapper {...props}>
      <ChecklistMaskIcon />
    </ChecklistSectionButtonWrapper>
  );
}
