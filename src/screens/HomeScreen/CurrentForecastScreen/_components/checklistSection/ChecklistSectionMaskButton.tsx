import ChecklistMaskIcon from '@components/icon/checklist/ChecklistMaskIcon';
import ChecklistSectionButton from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionButton';

import type { ChecklistSectionButtonProps } from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionButton.type';

type ChecklistSectionUmbrellaButtonProps = Omit<ChecklistSectionButtonProps, 'children'>;

export default function ChecklistSectionMaskButton({ ...props }: ChecklistSectionUmbrellaButtonProps) {
  return (
    <ChecklistSectionButton {...props}>
      <ChecklistMaskIcon />
    </ChecklistSectionButton>
  );
}
