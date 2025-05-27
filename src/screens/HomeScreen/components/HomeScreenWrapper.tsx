import type { ViewProps } from 'react-native';
import { ScrollView, Text, View } from 'react-native';

import LocationHeader from '@screens/HomeScreen/components/locationHeader/LocationHeader';

type HomeScreenWrapperProps = ViewProps;

export default function HomeScreenWrapper({ children, className, ...props }: HomeScreenWrapperProps) {
  return (
    <View
      {...props}
      className={`flex-1 ${className}`}
    >
      <View className="pt-safe border-b bg-morning">
        <LocationHeader />
        <View className="p-5">
          <Text>이 위치에 오늘 날씨 정보</Text>
        </View>
      </View>
      <ScrollView>
        <View className="flex-1 p-5">{children}</View>
      </ScrollView>
    </View>
  );
}
