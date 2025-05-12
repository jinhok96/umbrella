import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

type SettingStoreState = {
  theme: 'light' | 'dark';
  unit: 'metric' | 'imperial';
  lang: 'kr' | 'en';
};

type SettingStoreActions = {
  setTheme: (theme: SettingStoreState['theme']) => void;
  setUnit: (unit: SettingStoreState['unit']) => void;
  setLang: (lang: SettingStoreState['lang']) => void;
};

type SettingStore = SettingStoreState & SettingStoreActions;

const INIT_SETTING_STORE_STATE: SettingStoreState = {
  theme: 'light',
  unit: 'metric',
  lang: 'kr',
};

export const useSettingStore = create<SettingStore>()(
  devtools(
    persist<SettingStore, [], [], SettingStoreState>(
      set => ({
        ...INIT_SETTING_STORE_STATE,
        setTheme: theme => set({ theme }),
        setUnit: unit => set({ unit }),
        setLang: lang => set({ lang }),
      }),
      {
        name: 'settingStore',
        storage: createJSONStorage(() => AsyncStorage),
        partialize: state => ({
          theme: state.theme,
          unit: state.unit,
          lang: state.lang,
        }),
      },
    ),
  ),
);
