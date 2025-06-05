import type { PressableProps } from 'react-native';

export type ChecklistType = 'umbrella' | 'mask' | 'clothes' | 'suncream';

export type ChecklistSectionButtonWrapperProps = Omit<PressableProps, 'className'> & {
  isSelected: boolean;
};
