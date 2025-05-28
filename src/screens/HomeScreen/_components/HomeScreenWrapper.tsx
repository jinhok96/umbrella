import { ScrollView, Text, View } from 'react-native';

import ScreenWrapper from '@navigation/_components/screenWrapper/ScreenWrapper';
import LocationHeader from '@screens/HomeScreen/_components/locationHeader/LocationHeader';

import type { ScreenWrapperProps } from '@navigation/_components/screenWrapper/ScreenWrapper.type';

export default function HomeScreenWrapper({ children, ...props }: ScreenWrapperProps) {
  return (
    <ScreenWrapper
      {...props}
      backgroundClassName="bg-background-01"
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
    </ScreenWrapper>
  );
}
