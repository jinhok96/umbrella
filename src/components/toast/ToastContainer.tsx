import { View } from 'react-native';

import Toast from '@components/toast/Toast';
import { useToastStore } from '@store/toastStore/useToastStore';

export default function ToastContainer() {
  const toastList = useToastStore(state => state.list);

  return (
    <View
      className="pb-safe-offset-9 absolute bottom-0 flex w-full items-center justify-center gap-3 px-5 transition-all"
      pointerEvents="box-none"
    >
      {toastList.map(toastProps => (
        <Toast
          key={toastProps.id}
          {...toastProps}
        />
      ))}
    </View>
  );
}
