import type { PropsWithChildren } from 'react';
import { Keyboard, View } from 'react-native';

import { Gesture, GestureDetector } from 'react-native-gesture-handler';

/**
 * 키보드 숨기기 전역 제스처
 * @jinhok96 25.06.23
 */
export default function KeyboardDismissGesture({ children }: PropsWithChildren) {
  const tap = Gesture.Tap()
    .onEnd(() => {
      Keyboard.dismiss();
    })
    .runOnJS(true);

  return (
    <GestureDetector gesture={tap}>
      <View className="flex-1">{children}</View>
    </GestureDetector>
  );
}
