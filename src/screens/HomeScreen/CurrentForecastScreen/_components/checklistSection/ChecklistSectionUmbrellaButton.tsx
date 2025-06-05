import ChecklistUmbrellaIcon from '@components/icon/checklist/ChecklistUmbrellaIcon';
import ChecklistSectionButtonWrapper from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionButtonWrapper';

import type { ChecklistSectionButtonWrapperProps } from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionButtonWrapper.type';

type ChecklistSectionUmbrellaButtonProps = Omit<ChecklistSectionButtonWrapperProps, 'children'>;

export default function ChecklistSectionUmbrellaButton({ ...props }: ChecklistSectionUmbrellaButtonProps) {
  return (
    <ChecklistSectionButtonWrapper {...props}>
      <ChecklistUmbrellaIcon />
    </ChecklistSectionButtonWrapper>
  );
}
