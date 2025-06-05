import type { PressableProps } from 'react-native';

export type ChecklistType = 'umbrella' | 'mask' | 'clothes' | 'suncream';

export type ChecklistSectionButtonProps = Omit<PressableProps, 'className'> & {
  isSelected: boolean;
};
