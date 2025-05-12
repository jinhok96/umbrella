import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

import { INIT_SETTING_STORE_STATE } from '@store/settingStore/useSettingStore.const';

import type { SettingStore, SettingStoreState } from '@store/settingStore/useSettingStore.type';
import type { StateCreator } from 'zustand';

const settingStoreCreator: StateCreator<SettingStore> = set => ({
  ...INIT_SETTING_STORE_STATE,
  setTheme: theme => set({ theme }),
  setUnit: units => set({ units }),
  setLang: lang => set({ lang }),
});

export const useSettingStore = create<SettingStore>()(
  devtools(
    persist<SettingStore, [], [], SettingStoreState>(settingStoreCreator, {
      name: 'settingStore',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: state => ({
        theme: state.theme,
        units: state.units,
        lang: state.lang,
      }),
    }),
  ),
);

export const settingStore = useSettingStore;
