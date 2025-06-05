import { useState } from 'react';
import { Pressable, View } from 'react-native';

import classNames from 'classnames';

import type { ChecklistSectionButtonProps } from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionButton.type';

export default function ChecklistSectionButton({
  children,
  isSelected: selected,
  ...props
}: ChecklistSectionButtonProps) {
  const [height, setHeight] = useState(0);

  const iconClassName = classNames(
    'aspect-square rounded-xl border',
    !selected && 'border-background-03 bg-background-03',
    selected && 'border-morning bg-checklist',
  );

  const dashClassName = classNames(
    'absolute left-1/2 border-r border-dashed border-morning transition-[opacity,height]',
    !selected && 'opacity-0 h-0',
    selected && 'opacity-100 h-6',
  );

  return (
    <View
      className="relative flex-1"
      onLayout={e => {
        setHeight(e.nativeEvent.layout.height);
      }}
    >
      <Pressable
        {...props}
        className={iconClassName}
      >
        {children}
      </Pressable>
      <View
        className={dashClassName}
        style={{ top: height }}
      />
    </View>
  );
}
