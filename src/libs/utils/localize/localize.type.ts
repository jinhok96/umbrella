import type { SettingStoreState } from '@store/settingStore/useSettingStore.type';

/**
 * 서비스 지원 언어 타입
 * @jinhok96 25.06.12
 */
export type LocalizedText = Record<SettingStoreState['lang'], string | string[]>;
export type LocalizedTextMap<T extends string> = Record<T, LocalizedText>;
