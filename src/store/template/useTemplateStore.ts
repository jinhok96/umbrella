import { create } from 'zustand';

import { INIT_TEMPLATE_STORE_STATE } from '@store/template/useTemplateStore.const';

import type { TemplateStore } from '@store/template/useTemplateStore.type';
import type { StateCreator } from 'zustand';

/**
 * 템플릿 스토어
 * @ first - 첫번째 상태
 * @ second - 두번째 상태
 * @ third - 세번째 상태
 * @ setFirst - 첫번째 상태 설정
 * @ setSecond - 두번째 상태 설정
 * @ setThird - 세번째 상태 설정
 * @jinhok96 25.06.02
 */
const templateStoreCreator: StateCreator<TemplateStore> = set => ({
  ...INIT_TEMPLATE_STORE_STATE,
  setFirst: first => set({ first }),
  setSecond: second => set({ second }),
  setThird: third => set({ third }),
});

export const useTemplateStore = create<TemplateStore>()(templateStoreCreator);
export const templateStore = useTemplateStore;
