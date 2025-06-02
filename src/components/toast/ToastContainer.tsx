import { View } from 'react-native';

import Toast from '@components/toast/Toast';
import { useToastStore } from '@store/toastStore/useToastStore';

/**
 * 전체 토스트 컨테이너
 * @jinhok96 25.06.02
 */
export default function ToastContainer() {
  const toastList = useToastStore(state => state.list);

  return (
    <View
      className="pb-safe-offset-9 absolute bottom-0 flex w-full justify-end px-5"
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
