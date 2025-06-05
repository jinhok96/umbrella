import ChecklistSuncreamIcon from '@components/icon/checklist/ChecklistSuncreamIcon';
import ChecklistSectionButton from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionButton';

import type { ChecklistSectionButtonProps } from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionButton.type';

type ChecklistSectionSuncreamButtonProps = Omit<ChecklistSectionButtonProps, 'children'>;

export default function ChecklistSectionSuncreamButton({ ...props }: ChecklistSectionSuncreamButtonProps) {
  return (
    <ChecklistSectionButton {...props}>
      <ChecklistSuncreamIcon />
    </ChecklistSectionButton>
  );
}
