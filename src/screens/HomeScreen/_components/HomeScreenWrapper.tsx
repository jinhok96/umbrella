import { ScrollView, View } from 'react-native';

import ScreenWrapper from '@navigation/_components/screenWrapper/ScreenWrapper';

import type { ScreenWrapperProps } from '@navigation/_components/screenWrapper/ScreenWrapper.type';

export default function HomeScreenWrapper({ children, ...props }: ScreenWrapperProps) {
  return (
    <ScreenWrapper
      {...props}
      backgroundClassName="bg-background-01"
    >
      <ScrollView className="flex-1 p-5">
        <View className="mb-safe-offset-14 flex-1 gap-3">{children}</View>
      </ScrollView>
    </ScreenWrapper>
  );
}
