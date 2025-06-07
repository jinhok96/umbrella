/**
 * 일 평균 기온을 반환하는 함수
 * @param morn 아침 기온
 * @param day 낮 기온
 * @param eve 저녁 기온
 * @param night 밤 기온
 * @returns 일 평균 기온
 */
export function getDailyAvgTemp(morn: number, day: number, eve: number, night: number) {
  const averageTemp = (morn + day + eve + night) / 4;
  return averageTemp;
}
