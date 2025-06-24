import type { KeyboardAvoidingViewProps } from 'react-native';
import { Platform } from 'react-native';

/**
 * 플랫폼별 기본값이 적용된 `KeyboardAvoidingView`
 * @jinhok96 25.06.24
 */
export default function PlatformKeyboardAvoidingView({
  behavior = Platform.OS === 'ios' ? 'padding' : 'height',
  ...props
}: KeyboardAvoidingViewProps) {
  return (
    <PlatformKeyboardAvoidingView
      {...props}
      behavior={behavior}
    />
  );
}
