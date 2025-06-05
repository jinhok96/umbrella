import { Pressable, View } from 'react-native';

import classNames from 'classnames';

import type { ChecklistSectionButtonProps } from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionButton.type';

export default function ChecklistSectionButton({
  children,
  isSelected: selected,
  ...props
}: ChecklistSectionButtonProps) {
  const iconClassName = classNames(
    'size-16 rounded-xl border',
    !selected && 'border-background-03 bg-background-03',
    selected && 'border-morning bg-checklist',
  );

  const dashClassName = classNames(
    'absolute left-1/2 top-16 border-r border-dashed border-morning transition-[opacity,height]',
    !selected && 'opacity-0 h-0',
    selected && 'opacity-100 h-5',
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
