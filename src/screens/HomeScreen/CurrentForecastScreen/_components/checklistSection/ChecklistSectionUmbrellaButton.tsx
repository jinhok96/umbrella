import ChecklistUmbrellaIcon from '@components/icon/checklist/ChecklistUmbrellaIcon';
import ChecklistSectionButton from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionButton';

import type { ChecklistSectionButtonProps } from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionButton.type';

type ChecklistSectionUmbrellaButtonProps = Omit<ChecklistSectionButtonProps, 'children'>;

export default function ChecklistSectionUmbrellaButton({ ...props }: ChecklistSectionUmbrellaButtonProps) {
  return (
    <ChecklistSectionButton {...props}>
      <ChecklistUmbrellaIcon />
    </ChecklistSectionButton>
  );
}
