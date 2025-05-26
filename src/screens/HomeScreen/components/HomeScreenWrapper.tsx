import type { ViewProps } from 'react-native';
import { ScrollView, View } from 'react-native';

import LocationHeader from '@screens/HomeScreen/components/locationHeader/LocationHeader';

type HomeScreenWrapperProps = ViewProps;

export default function HomeScreenWrapper({ children, className, ...props }: HomeScreenWrapperProps) {
  return (
    <View
      {...props}
      className={`flex-1 ${className}`}
    >
      <ScrollView>
        <View className="pt-safe">
          <LocationHeader />
        </View>
        <View className="flex-1 p-5">{children}</View>
      </ScrollView>
    </View>
  );
}
