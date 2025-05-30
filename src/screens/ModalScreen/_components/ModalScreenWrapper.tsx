import { View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ScreenWrapper from '@navigation/_components/screenWrapper/ScreenWrapper';

import type { ScreenWrapperProps } from '@navigation/_components/screenWrapper/ScreenWrapper.type';

export default function ModalScreenWrapper({ children, ...props }: ScreenWrapperProps) {
  const { top } = useSafeAreaInsets();

  const wrapperClassName = `pb-safe-offset-[${top}px]`;

  return (
    <ScreenWrapper
      {...props}
      backgroundClassName="bg-transparent"
      className={`px-safe-offset-5 ${wrapperClassName}`}
    >
      <View className="flex-1 items-center justify-center">{children}</View>
    </ScreenWrapper>
  );
}
