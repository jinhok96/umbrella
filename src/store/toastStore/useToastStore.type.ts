import type { ToastProps } from '@components/toast/Toast.type';

export type ToastStoreState = {
  list: ToastProps[];
};

export type ToastStoreActions = {
  openToast: (toast: Omit<ToastProps, 'id'>) => void;
  closeToast: (id: ToastProps['id']) => void;
};

export type ToastStore = ToastStoreState & ToastStoreActions;
