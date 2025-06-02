import { create } from 'zustand';

import { INIT_TOAST_STORE_STATE } from '@store/toastStore/useToastStore.const';

import type { ToastStore } from '@store/toastStore/useToastStore.type';
import type { StateCreator } from 'zustand';

/**
 * 토스트 스토어
 * @ list - 전체 토스트 리스트
 * @ openToast - 기존 토스트 리스트에 새로운 토스트 아이템 추가
 * @ closeToast - 기존 토스트 리스트에서 특정 토스트 아이템 제거
 * @jinhok96 25.06.02
 */
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
