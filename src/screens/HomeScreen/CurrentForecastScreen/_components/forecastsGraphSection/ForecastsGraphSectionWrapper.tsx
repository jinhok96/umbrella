import { useEffect, useRef, useState } from 'react';
import { ScrollView, View } from 'react-native';

import Show from '@components/wrapper/Show';
import { FORECASTS_GRAPH_SPACING } from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraph.const';
import CurrentForecastScreenSectionHeader from '@screens/HomeScreen/CurrentForecastScreen/_components/currentForecastScreenSectionHeader/CurrentForecastScreenSectionHeader';

import type { ForecastsGraphSectionWrapperProps } from '@screens/HomeScreen/CurrentForecastScreen/_components/forecastsGraphSection/ForecastsGraphSectionWrapper.type';

const CONTAINER_MARGIN = 20;

/**
 * 날씨 그래프 섹션 래퍼
 * @param headerText 헤더 텍스트
 * @param selectedIndex 선택한 요소 인덱스
 * @param children 그래프 요소
 * @jinhok96 25.06.07
 */
export default function ForecastsGraphSectionWrapper({
  headerText,
  selectedIndex,
  children,
  ...props
}: ForecastsGraphSectionWrapperProps) {
  const [containerWidth, setContainerWidth] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  // selectedIndex 요소를 중앙으로 스크롤하는 함수
  const handleScrollToSelectedIndex = (index: number) => {
    if (selectedIndex === null) return;
    if (!containerWidth) return;
    const x = CONTAINER_MARGIN + FORECASTS_GRAPH_SPACING * (index + 0.5) - containerWidth * 0.5;
    scrollRef.current?.scrollTo({
      x,
      animated: true,
    });
  };

  useEffect(() => {
    if (selectedIndex === null) return;
    handleScrollToSelectedIndex(selectedIndex);
  }, [selectedIndex]);

  return (
    <View
      {...props}
      onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
    >
      <Show when={!!headerText}>
        <CurrentForecastScreenSectionHeader text={headerText!} />
      </Show>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={scrollRef}
      >
        <View style={{ marginLeft: CONTAINER_MARGIN, marginRight: CONTAINER_MARGIN }}>{children}</View>
      </ScrollView>
    </View>
  );
}
