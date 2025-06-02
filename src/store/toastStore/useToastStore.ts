import { create } from 'zustand';

import { INIT_TOAST_STORE_STATE } from '@store/toastStore/useToastStore.const';

import type { ToastStore } from '@store/toastStore/useToastStore.type';
import type { StateCreator } from 'zustand';

const toastStoreCreator: StateCreator<ToastStore> = set => ({
  ...INIT_TOAST_STORE_STATE,
  openToast: toast =>
    set(state => {
      const newToast = { ...toast, id: `toast-${JSON.stringify(toast)}-${Date.now().toString()}` };
      return { list: [...state.list, newToast] };
    }),
  closeToast: id =>
    set(state => {
      const filteredList = state.list.filter(item => item.id !== id);
      return { list: filteredList };
    }),
});

export const useToastStore = create<ToastStore>()(toastStoreCreator);
export const toastStore = useToastStore;
