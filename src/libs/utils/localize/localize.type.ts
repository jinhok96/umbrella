import type { Lang } from '@store/useSettingStore.type';

/**
 * 서비스 지원 언어 타입
 * @jinhok96 25.05.12
 */
export type LocalizedText = Record<Lang, string>;
export type LocalizedTextMap<T extends string> = Record<T, LocalizedText>;
