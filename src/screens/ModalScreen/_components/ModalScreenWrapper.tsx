import { View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ScreenWrapper from '@navigation/_components/screenWrapper/ScreenWrapper';
import { useModalStore } from '@store/modalStore/useModalStore';

import type { ScreenWrapperProps } from '@navigation/_components/screenWrapper/ScreenWrapper.type';

export default function ModalScreenWrapper({ children, ...props }: ScreenWrapperProps) {
  const { closeModal } = useModalStore();
  const { top } = useSafeAreaInsets();

  console.log('top', top);

  return (
    <ScreenWrapper
      {...props}
      backgroundClassName="bg-transparent"
      className="px-safe-offset-5 mb-safe-offset-2"
      onStartShouldSetResponder={() => true}
      onTouchEnd={closeModal}
      style={{ paddingBottom: top }}
    >
      <View className="flex-1 items-center justify-center">
        <View className="size-fit">{children}</View>
      </View>
    </ScreenWrapper>
  );
}
