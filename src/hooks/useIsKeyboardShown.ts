import { useEffect, useState } from 'react';
import { Keyboard, Platform, type EmitterSubscription } from 'react-native';

/**
 * 키보드가 보이는지 여부를 반환하는 훅
 *
 * `@react-navigation/bottom-tabs/src/utils/useIsKeyboardShown`에서 가져옴
 * @returns boolean
 * @jinhok96 25.05.25
 */
export function useIsKeyboardShown() {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  useEffect(() => {
    const handleKeyboardShow = () => setIsKeyboardShown(true);
    const handleKeyboardHide = () => setIsKeyboardShown(false);

    let subscriptions: EmitterSubscription[];

    if (Platform.OS === 'ios') {
      subscriptions = [
        Keyboard.addListener('keyboardWillShow', handleKeyboardShow),
        Keyboard.addListener('keyboardWillHide', handleKeyboardHide),
      ];
    } else {
      subscriptions = [
        Keyboard.addListener('keyboardDidShow', handleKeyboardShow),
        Keyboard.addListener('keyboardDidHide', handleKeyboardHide),
      ];
    }

    return () => {
      subscriptions.forEach(s => s.remove());
    };
  }, []);

  return isKeyboardShown;
}
