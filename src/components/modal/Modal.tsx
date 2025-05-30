import type { PropsWithChildren } from 'react';
import { Text, View } from 'react-native';

export default function Modal({ children }: PropsWithChildren) {
  return (
    <View className="flex w-[21rem] items-center justify-center bg-test px-5 pb-7 pt-10">
      <Text>모달입니다.</Text>
      {children}
    </View>
  );
}
