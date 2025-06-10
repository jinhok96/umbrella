import { useState } from 'react';
import { Pressable, View } from 'react-native';

import classNames from 'classnames';

import type { ChecklistSectionButtonWrapperProps } from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionButtonWrapper.type';

/**
 * 체크리스트 버튼 래퍼 컴포넌트
 * @param isSelected 버튼이 선택되었는지 여부
 * @param children 표시할 아이콘
 * @jinhok96 25.06.06
 */
export default function ChecklistSectionButtonWrapper({
  children,
  isSelected,
  ...props
}: ChecklistSectionButtonWrapperProps) {
  const [height, setHeight] = useState(0);

  const iconClassName = classNames(
    'rounded-xl border',
    !isSelected && 'border-background-03 bg-background-03',
    isSelected && 'border-morning bg-checklist',
  );

  const dashClassName = classNames(
    'absolute left-1/2 border-r border-dashed border-morning transition-[opacity,height]',
    !isSelected && 'opacity-0 h-0',
    isSelected && 'opacity-100 h-6',
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
