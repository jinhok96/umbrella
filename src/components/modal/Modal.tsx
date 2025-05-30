import type { PropsWithChildren } from 'react';
import { Text, View } from 'react-native';

export default function Modal({ children }: PropsWithChildren) {
  return (
    <View className="size-12 border bg-test">
      <Text>모달입니다.</Text>
    </View>
  );
}
