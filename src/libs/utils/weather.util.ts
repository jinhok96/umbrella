import type { LocalizedText } from '@libs/utils/localize/localize.type';

/**
 * 강수확률을 기반으로 비가 올지 안올지 반환하는 함수
 * @param rain 강수확률
 * @returns 0: 매우 낮음, 1: 낮음, 2: 보통, 3: 높음, 4: 매우 높음
 * @jinhok96 25.06.10
 */
export function isRainy(rain: number): 0 | 1 | 2 | 3 | 4 {
  if (rain < 2 / 10) return 0;
  if (rain < 4 / 10) return 1;
  if (rain < 6 / 10) return 2;
  if (rain < 8 / 10) return 3;
  return 4;
}

/**
 * 화씨를 섭씨로 변환하는 함수
 * @param temp 화씨
 * @returns 섭씨
 * @jinhok96 25.06.10
 */
export function convertTempImperialToMetric(temp: number): number {
  return (temp * 9) / 8 + 32;
}

/**
 * 자외선지수를 텍스트로 변환하는 함수
 * @param uvi 자외선지수
 * @returns `LocalizedText`
 * @jinhok96 25.06.12
 */
export function convertUVIndexToText(uvi: number): LocalizedText {
  if (uvi <= 2)
    return {
      ko: '낮음',
      en: 'Low',
    };

  if (uvi <= 5)
    return {
      ko: '보통',
      en: 'Moderate',
    };

  if (uvi <= 7)
    return {
      ko: '높음',
      en: 'High',
    };

  if (uvi <= 10)
    return {
      ko: '매우 높음',
      en: 'Very High',
    };

  return {
    ko: '위험',
    en: 'Extreme',
  };
}

/**
 * 바람 각도를 텍스트로 변환하는 함수
 * @param deg 바람 각도
 * @returns `LocalizedText`
 * @jinhok96 25.06.12
 */
export function convertWindDegToText(deg: number): LocalizedText {
  const ratio = deg / 180;

  if (ratio >= 1 / 16 && ratio <= 3 / 16)
    return {
      ko: '북북동',
      en: 'NNE',
    };

  if (ratio >= 3 / 16 && ratio <= 5 / 16)
    return {
      ko: '북동',
      en: 'NE',
    };

  if (ratio >= 5 / 16 && ratio <= 7 / 16)
    return {
      ko: '동북동',
      en: 'ENE',
    };

  if (ratio >= 7 / 16 && ratio <= 9 / 16)
    return {
      ko: '동',
      en: 'E',
    };

  if (ratio >= 9 / 16 && ratio <= 11 / 16)
    return {
      ko: '동남동',
      en: 'ESE',
    };

  if (ratio >= 11 / 16 && ratio <= 13 / 16)
    return {
      ko: '남동',
      en: 'SE',
    };

  if (ratio >= 13 / 16 && ratio <= 15 / 16)
    return {
      ko: '남남동',
      en: 'SSE',
    };

  if (ratio >= 15 / 16 && ratio <= 17 / 16)
    return {
      ko: '남',
      en: 'S',
    };

  if (ratio >= 17 / 16 && ratio <= 19 / 16)
    return {
      ko: '남남서',
      en: 'SSW',
    };

  if (ratio >= 19 / 16 && ratio <= 21 / 16)
    return {
      ko: '남서',
      en: 'SW',
    };

  if (ratio >= 21 / 16 && ratio <= 23 / 16)
    return {
      ko: '서남서',
      en: 'WSW',
    };

  if (ratio >= 23 / 16 && ratio <= 25 / 16)
    return {
      ko: '서',
      en: 'W',
    };

  if (ratio >= 25 / 16 && ratio <= 27 / 16)
    return {
      ko: '서북서',
      en: 'WNW',
    };

  if (ratio >= 27 / 16 && ratio <= 29 / 16)
    return {
      ko: '북서',
      en: 'NW',
    };

  if (ratio >= 29 / 16 && ratio <= 31 / 16)
    return {
      ko: '북북서',
      en: 'NNW',
    };

  return {
    ko: '북',
    en: 'N',
  };
}
