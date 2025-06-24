import type { PropsWithChildren } from 'react';

import { Gesture, GestureDetector } from 'react-native-gesture-handler';

/**
 * 키보드 숨기기 전역 제스처를 막는 제스처
 * @jinhok96 25.06.23
 */
export function BlockKeyboardDismissGesture({ children }: PropsWithChildren) {
  const tap = Gesture.Tap()
    .onStart(() => {})
    .blocksExternalGesture()
    .runOnJS(true);

  return <GestureDetector gesture={tap}>{children}</GestureDetector>;
}
