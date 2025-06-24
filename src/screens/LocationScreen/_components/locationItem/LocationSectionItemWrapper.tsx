import type { ViewProps } from 'react-native';
import { View } from 'react-native';

type LocationSectionItemWrapperProps = ViewProps;

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
