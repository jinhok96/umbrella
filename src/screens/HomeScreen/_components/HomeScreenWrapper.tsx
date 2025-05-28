import { ScrollView, View } from 'react-native';

import ScreenWrapper from '@navigation/_components/screenWrapper/ScreenWrapper';

import type { ScreenWrapperProps } from '@navigation/_components/screenWrapper/ScreenWrapper.type';

export default function HomeScreenWrapper({ children, ...props }: ScreenWrapperProps) {
  return (
    <ScreenWrapper
      {...props}
      backgroundClassName="bg-background-01"
    >
      <ScrollView>
        <View className="flex-1 p-5">{children}</View>
      </ScrollView>
    </ScreenWrapper>
  );
}
