import { View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { SafeViewProps } from '@components/common/SafeView.type';

/**
 * SafeAreaView와 동일한 역할을 수행하는 컴포넌트
 *
 * SafeAreaView에서 발생하는 문제로 인해 공식에서 권장하는 useSafeAreaInsets 사용
 * @param props `View` 컴포넌트에서 지원하는 모든 props
 * @returns `padding`이 설정된 `View` 컴포넌트
 * @link https://reactnavigation.org/docs/handling-safe-area/
 * @jinhok96 25.05.24
 */
export default function SafeView({ children, className, ...props }: SafeViewProps) {
  const { top, left, right, bottom } = useSafeAreaInsets();

  const paddingClassName = `pt-[${top}] pl-[${left}] pb-[${bottom}] pr-[${right}]`;

  return (
    <View
      {...props}
      className={`${paddingClassName} ${className}`}
    >
      {children}
    </View>
  );
}
