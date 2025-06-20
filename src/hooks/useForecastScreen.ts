import { useRef, useState } from 'react';
import type { FlatList } from 'react-native';

import type { ForecastsGraphSelectedIndex } from '@screens/HomeScreen/_components/forecastsGraphSection/wrapper/ForecastsGraphSectionWrapper.type';

type ForecastType = 'hourly' | 'daily';

// 열려있는 카드의 높이 오프셋
// WeatherDetailCard => h(hourly: 236.8, daily: 176) + mb(16) + mt(4)
const OPENED_CARD_OFFSET: Record<ForecastType, number> = {
  hourly: 256.8,
  daily: 196,
};

/**
 * HourlyForecastScreen, DailyForecastScreen에서 그래프 및 목록 제어를 위해 사용하는 훅
 * @param type 예보 타입; `hourly` | `daily`
 * @returns `{ selectedIndex, detailCardSectionRef, handleSelectedIndexChange, handleScrollDetailCardSectionToSelectedIndex }`
 * @jinhok96 25.06.20
 */
export function useForecastScreen<T>(type: ForecastType) {
  const [selectedIndex, setSelectedIndex] = useState<ForecastsGraphSelectedIndex>(null);
  const detailCardSectionRef = useRef<FlatList<T>>(null);

  // selectedIndex 업데이트
  const handleSelectedIndexChange = (index: number) => {
    if (selectedIndex === index) setSelectedIndex?.(null);
    setSelectedIndex?.(index);
  };

  // 그래프에서 날짜 선택 시 카드 섹션 스크롤
  const handleScrollDetailCardSectionToSelectedIndex = (currentIndex: ForecastsGraphSelectedIndex) => {
    const prevSelectedIndex = selectedIndex;

    if (currentIndex === null) return;

    const nextScrollIndex = currentIndex === 0 ? 0 : currentIndex - 1;

    const gapOffset = 12;
    const openedCardOffset =
      prevSelectedIndex !== null && prevSelectedIndex < nextScrollIndex ? OPENED_CARD_OFFSET[type] : 0;

    // 위에 위치한 카드의 높이가 줄어들면서 스크롤이 올라가는 현상을 openedCardOffset으로 보정
    const viewOffset = gapOffset + openedCardOffset;

    detailCardSectionRef.current?.scrollToIndex({
      index: nextScrollIndex,
      viewOffset,
      animated: true,
    });
  };

  return {
    selectedIndex,
    detailCardSectionRef,
    handleSelectedIndexChange,
    handleScrollDetailCardSectionToSelectedIndex,
  };
}
