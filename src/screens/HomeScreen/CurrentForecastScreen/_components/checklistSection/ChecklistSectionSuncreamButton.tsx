import ChecklistSuncreamIcon from '@components/icon/checklist/ChecklistSuncreamIcon';
import ChecklistSectionButtonWrapper from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionButtonWrapper';

import type { ChecklistSectionButtonWrapperProps } from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionButtonWrapper.type';

type ChecklistSectionSuncreamButtonProps = Omit<ChecklistSectionButtonWrapperProps, 'children'>;

export default function ChecklistSectionSuncreamButton({ ...props }: ChecklistSectionSuncreamButtonProps) {
  return (
    <ChecklistSectionButtonWrapper {...props}>
      <ChecklistSuncreamIcon />
    </ChecklistSectionButtonWrapper>
  );
}
