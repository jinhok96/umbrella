import { ScrollView } from 'react-native';

import ScreenWrapper from '@navigation/_components/screenWrapper/ScreenWrapper';

import type { ScreenWrapperProps } from '@navigation/_components/screenWrapper/ScreenWrapper.type';

export default function SettingScreenWrapper({ children, ...props }: ScreenWrapperProps) {
  return (
    <ScreenWrapper
      {...props}
      backgroundClassName="bg-background-02"
      className="p-5"
    >
      <ScrollView>{children}</ScrollView>
    </ScreenWrapper>
  );
}
