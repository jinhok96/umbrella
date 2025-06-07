import type { GraphDataItem } from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraph.type';
import type { Theme } from '@store/settingStore/useSettingStore.type';

/**
 * 그래프 데이터 리스트에서 최솟값, 최댓값을 반환하는 함수
 * @param list 그래프 데이터 리스트
 * @returns `{ minValue, maxValue }`
 * @jinhok96 25.06.07
 */
export function findForecastsGraphMinMaxValue(list: GraphDataItem[]): { minValue?: number; maxValue?: number } {
  if (!list.length) {
    return { minValue: undefined, maxValue: undefined };
  }

  let minValue = list[0].value;
  let maxValue = list[0].value;

  list.forEach(item => {
    if (item.value < minValue) minValue = item.value;
    if (item.value > maxValue) maxValue = item.value;
  });

  return { minValue, maxValue };
}

/**
 * `CustomGraphDataPointComponent`의 key를 생성하는 함수
 * @param baseKey 기본 키 값
 * @param theme 현재 테마
 * @param isSelected point가 선택되었는지 여부
 * @returns 전체 키 값
 * @jinhok96 25.06.07
 */
export function generateDataPointKey(baseKey: string, theme: Theme, isSelected: boolean) {
  return `${baseKey}-${theme}${isSelected ? '-selected' : ''}`;
}
