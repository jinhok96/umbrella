import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

import { INIT_SETTING_STORE_STATE } from '@store/settingStore/useSettingStore.const';

import type { SettingStore, SettingStoreState } from '@store/settingStore/useSettingStore.type';
import type { StateCreator } from 'zustand';

/**
 * 앱 설정 스토어
 * @ setTheme - 테마 설정
 * @ setUnits - 날씨 측정 단위 설정
 * @ setLang - 앱 언어 설정
 * @ setDefaultLocationMode - 앱 시작 시 기본 위치 모드 설정
 * @ setLocationPermission - 위치 권한 설정
 * @ setFontSize - 접근성 폰트 크기 설정
 * @jinhok96 25.05.19
 */
const settingStoreCreator: StateCreator<SettingStore> = set => ({
  ...INIT_SETTING_STORE_STATE,
  // theme, units, lang, defaultLocationMode
  setTheme: theme => set({ theme }),
  setUnits: units => set({ units }),
  setLang: lang => set({ lang }),
  setDefaultLocationMode: initLocationMode => set({ defaultLocationMode: initLocationMode }),

  // permission
  setLocationPermission: permission => set({ locationPermission: permission }),

  // accessibility
  setFontSize: fontSize => set({ fontSize }),
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
        defaultLocationMode: state.defaultLocationMode,
        locationPermission: state.locationPermission,
        fontSize: state.fontSize,
      }),
    }),
  ),
);

export const settingStore = useSettingStore;
