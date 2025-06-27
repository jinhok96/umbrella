import type { ViewProps } from 'react-native';
import { View } from 'react-native';

type LocationSectionItemWrapperProps = ViewProps;

/**
 * `LocationSectionItem` 컴포넌트의 공통 래퍼 컴포넌트
 * @jinhok96 25.06.27
 */
export default function LocationSectionItemWrapper({ className, children, ...props }: LocationSectionItemWrapperProps) {
  return (
    <View
      {...props}
      className="px-5 py-1.5"
    >
      <View className={className}>{children}</View>
    </View>
  );
}
