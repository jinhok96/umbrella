import type { ViewProps } from 'react-native';
import { ScrollView, View } from 'react-native';

type HomeScreenWrapperProps = ViewProps;

export default function HomeScreenWrapper({ children, className, ...props }: HomeScreenWrapperProps) {
  return (
    <View
      {...props}
      className={`flex-1 ${className}`}
    >
      <ScrollView>{children}</ScrollView>
    </View>
  );
}
