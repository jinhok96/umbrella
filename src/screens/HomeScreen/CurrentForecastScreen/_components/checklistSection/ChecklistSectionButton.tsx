import { Pressable, View } from 'react-native';

import classNames from 'classnames';

import type { ChecklistSectionButtonProps } from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionButton.type';

export default function ChecklistSectionButton({ children, selected, ...props }: ChecklistSectionButtonProps) {
  const iconClassName = classNames(
    'size-16 rounded-xl border',
    !selected && 'border-background-03 bg-background-03',
    selected && 'border-morning bg-checklist',
  );

  const dashClassName = classNames(
    'absolute -bottom-5 left-1/2 h-5 border-r border-dashed border-morning',
    !selected && 'opacity-0',
    selected && 'opacity-100',
  );

  return (
    <View className="relative">
      <Pressable
        {...props}
        className={iconClassName}
      >
        {children}
      </Pressable>
      <View className={dashClassName} />
    </View>
  );
}
