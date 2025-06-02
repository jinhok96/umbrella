import type { PressableProps } from 'react-native';

export type ToastProps = Omit<PressableProps, 'className' | 'children'> & {
  type?: 'default' | 'error';
  text: string;
};
