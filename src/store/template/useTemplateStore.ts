import { create } from 'zustand';

import { INIT_TEMPLATE_STORE_STATE } from '@store/template/useTemplateStore.const';

import type { TemplateStore } from '@store/template/useTemplateStore.type';
import type { StateCreator } from 'zustand';

const templateStoreCreator: StateCreator<TemplateStore> = set => ({
  ...INIT_TEMPLATE_STORE_STATE,
  setFirst: first => set({ first }),
  setSecond: second => set({ second }),
  setThird: third => set({ third }),
});

export const useTemplateStore = create<TemplateStore>()(templateStoreCreator);
export const templateStore = useTemplateStore;
