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
