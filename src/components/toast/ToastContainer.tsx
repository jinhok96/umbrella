import { View } from 'react-native';

import Toast from '@components/toast/Toast';

import type { ToastProps } from '@components/toast/Toast.type';

type ToastContainerProps = ToastProps;

export default function ToastContainer({ ...props }: ToastContainerProps) {
  return (
    <View className="pb-safe-offset-9 absolute bottom-0 flex w-full items-center justify-center gap-3 px-5">
      <Toast {...props} />
      <Toast {...props} />
    </View>
  );
}
