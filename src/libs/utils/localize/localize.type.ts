import type { SettingStoreState } from '@store/settingStore/useSettingStore.type';

/**
 * 서비스 지원 언어 타입
 * @jinhok96 25.06.12
 */
export type LocalizedText<T = string> = Record<SettingStoreState['lang'], T>;
export type LocalizedTextMap<T extends string, D = string> = Record<T, LocalizedText<D>>;
