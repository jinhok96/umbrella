import type { PressableProps } from 'react-native';

export type ToastProps = Omit<PressableProps, 'className' | 'children' | 'id'> & {
  id: string;
  type?: 'default' | 'error';
  text: string;
};
