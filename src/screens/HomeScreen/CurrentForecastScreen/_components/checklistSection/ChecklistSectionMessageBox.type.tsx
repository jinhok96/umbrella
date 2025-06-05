import type { PretendardTextProps } from '@components/fontText/PretendardText.type';
import type { ChecklistType } from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionButton.type';

export type ChecklistSectionMessageBoxProps = Omit<PretendardTextProps, 'className' | 'typo'> & {
  selected: ChecklistType | null;
};
