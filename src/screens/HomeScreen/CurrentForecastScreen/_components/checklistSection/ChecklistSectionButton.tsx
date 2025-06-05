import { Pressable } from 'react-native';

import classNames from 'classnames';

import type { ChecklistSectionButtonProps } from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionButton.type';

export default function ChecklistSectionButton({ children, selected, ...props }: ChecklistSectionButtonProps) {
  const iconClassName = classNames(
    'size-16 rounded-xl border',
    !selected && 'border-background-03 bg-background-03',
    selected && 'border-morning bg-checklist',
  );

  return (
    <Pressable
      {...props}
      className={iconClassName}
    >
      {children}
    </Pressable>
  );
}
