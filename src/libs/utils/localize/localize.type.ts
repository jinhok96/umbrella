/**
 * 서비스 지원 언어 타입
 * @jinhok96 25.05.08
 */
export type LanguageCode = 'kr' | 'en';
export type LocalizedText = Record<LanguageCode, string>;
export type LocalizedTextMap<T extends string> = Record<T, LocalizedText>;
