import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

import { INIT_SETTING_STORE_STATE } from '@store/useSettingStore.const';

import type { SettingStore, SettingStoreState } from '@store/useSettingStore.type';

export const useSettingStore = create<SettingStore>()(
  devtools(
    persist<SettingStore, [], [], SettingStoreState>(
      set => ({
        ...INIT_SETTING_STORE_STATE,
        setTheme: theme => set({ theme }),
        setUnit: units => set({ units }),
        setLang: lang => set({ lang }),
      }),
      {
        name: 'settingStore',
        storage: createJSONStorage(() => AsyncStorage),
        partialize: state => ({
          theme: state.theme,
          units: state.units,
          lang: state.lang,
        }),
      },
    ),
  ),
);

export const settingStore = useSettingStore;
