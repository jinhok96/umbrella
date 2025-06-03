import { ScrollViewObserver } from 'react-native-use-in-view';

import ScreenWrapper from '@navigation/_components/screenWrapper/ScreenWrapper';

import type { ScreenWrapperProps } from '@navigation/_components/screenWrapper/ScreenWrapper.type';

export default function HomeScreenWrapper({ children, ...props }: ScreenWrapperProps) {
  return (
    <ScreenWrapper
      {...props}
      backgroundClassName="bg-background-01"
    >
      <ScrollViewObserver className="flex-1 p-5">{children}</ScrollViewObserver>
    </ScreenWrapper>
  );
}
