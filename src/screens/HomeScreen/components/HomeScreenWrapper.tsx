import { ScrollView } from 'react-native';

import SafeView from '@components/common/SafeView';

import type { SafeViewProps } from '@components/common/SafeView.type';

type HomeScreenWrapperProps = SafeViewProps;

export default function HomeScreenWrapper({ children, className, ...props }: HomeScreenWrapperProps) {
  return (
    <SafeView
      {...props}
      className={`flex-1 ${className}`}
    >
      <ScrollView>{children}</ScrollView>
    </SafeView>
  );
}
