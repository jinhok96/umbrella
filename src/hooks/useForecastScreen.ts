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
 * @returns `{ selectedIndex, detailCardSectionRef, handleSelectedIndexChange, handleScrollToSelectedIndex }`
 * @jinhok96 25.06.17
 */
export function useForecastScreen<T>(type: ForecastType) {
  const [selectedIndex, setSelectedIndex] = useState<ForecastsGraphSelectedIndex>(null);
  const detailCardSectionRef = useRef<FlatList<T>>(null);

  // selectedIndex 업데이트
  const handleSelectedIndexChange = (index: ForecastsGraphSelectedIndex): ForecastsGraphSelectedIndex => {
    if (selectedIndex !== null && selectedIndex === index) {
      const newIndex = null;
      setSelectedIndex?.(newIndex);
      return newIndex;
    }

    setSelectedIndex?.(index);
    return index;
  };

  // 그래프에서 날짜 선택 시 카드 섹션 스크롤
  const handleScrollToSelectedIndex = (index: ForecastsGraphSelectedIndex) => {
    const lastSelectedIndex = selectedIndex;
    const currentIndex = handleSelectedIndexChange(index);

    if (typeof currentIndex !== 'number') return;

    const currentIndexNumber = currentIndex === 0 ? 0 : currentIndex - 1;

    const gapOffset = 12; // gap-3
    const openedCardOffset = OPENED_CARD_OFFSET[type];

    // 위에 위치한 카드의 높이가 줄어들면서 스크롤이 올라가는 현상을 openedCardOffset으로 보정
    const viewOffset =
      lastSelectedIndex === null || lastSelectedIndex >= currentIndexNumber ? gapOffset : gapOffset + openedCardOffset;

    detailCardSectionRef.current?.scrollToIndex({
      index: currentIndexNumber,
      viewOffset,
      animated: true,
    });
  };

  return {
    selectedIndex,
    detailCardSectionRef,
    handleSelectedIndexChange,
    handleScrollToSelectedIndex,
  };
}
