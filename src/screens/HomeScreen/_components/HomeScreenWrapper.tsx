import ScreenWrapper from '@navigation/_components/screenWrapper/ScreenWrapper';

import type { ScreenWrapperProps } from '@navigation/_components/screenWrapper/ScreenWrapper.type';

export default function HomeScreenWrapper({ children, ...props }: ScreenWrapperProps) {
  return (
    <ScreenWrapper
      {...props}
      backgroundClassName="bg-background-01"
    >
      {children}
    </ScreenWrapper>
  );
}
