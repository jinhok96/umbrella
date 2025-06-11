import { useEffect, useRef, useState } from 'react';
import { ScrollView, View } from 'react-native';

import classNames from 'classnames';

import LinearGradient from 'react-native-linear-gradient';

import Show from '@components/wrapper/Show';
import { useGetColorHex } from '@hooks/useGetColorHex';
import CurrentForecastScreenSectionHeader from '@screens/HomeScreen/CurrentForecastScreen/_components/currentForecastScreenSectionHeader/CurrentForecastScreenSectionHeader';

import type { ForecastsGraphSectionWrapperProps } from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraphSectionWrapper.type';

type GradientOverlayProps = Pick<ForecastsGraphSectionWrapperProps, 'forecastsGraphContainerMargin'> & {
  className: string;
  reverse?: boolean;
};

/**
 * 양 옆 그라디언트 컴포넌트
 * @param reverse 좌우 반전하는지 여부
 * @param containerMargin 좌우 마진
 * @jinhok96 25.06.11
 */
function GradientOverlay({ className, reverse, forecastsGraphContainerMargin }: GradientOverlayProps) {
  const backgroundColor = useGetColorHex('--color-background-02');

  // 양 옆 투명도 그라디언트; 90% ~ 0%
  const gradientColors = [`${backgroundColor}E6`, `${backgroundColor}00`];

  return (
    <LinearGradient
      className={className}
      colors={gradientColors}
      start={{ x: !reverse ? 0 : 1, y: 0 }}
      end={{ x: !reverse ? 1 : 0, y: 0 }}
      style={{ width: forecastsGraphContainerMargin }}
      pointerEvents="none"
    />
  );
}

/**
 * 날씨 그래프 섹션 래퍼
 * @param headerText 헤더 텍스트
 * @param selectedIndex 선택한 요소 인덱스
 * @param hideHeader 섹션 헤더를 렌더링하지 않을지 여부
 * @param children 그래프 요소
 * @param forecastsGraphSpacing 그래프 간격
 * @param containerMargin 좌우 마진
 * @jinhok96 25.06.11
 */
export default function ForecastsGraphSectionWrapper({
  headerText,
  selectedIndex,
  hideHeader,
  children,
  className,
  forecastsGraphSpacing,
  forecastsGraphContainerMargin: containerMargin,
  ...props
}: ForecastsGraphSectionWrapperProps) {
  const [containerWidth, setContainerWidth] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  const isSelectedIndexEmpty = !selectedIndex && selectedIndex !== 0;

  useEffect(() => {
    if (isSelectedIndexEmpty) return;

    // selectedIndex 요소를 중앙으로 스크롤하는 함수
    const handleScrollToSelectedIndex = (index: number) => {
      if (isSelectedIndexEmpty) return;
      if (!containerWidth) return;
      const x = containerMargin + forecastsGraphSpacing * (index + 1 / 2) - containerWidth / 2;
      scrollRef.current?.scrollTo({
        x,
        animated: true,
      });
    };

    handleScrollToSelectedIndex(selectedIndex);
  }, [selectedIndex]);

  const containerClassName = classNames('relative overflow-hidden', !hideHeader && 'rounded-[1.25rem]', className);

  return (
    <View
      {...props}
      className={containerClassName}
      onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
    >
      <Show when={!hideHeader && !!headerText}>
        <CurrentForecastScreenSectionHeader text={headerText!} />
      </Show>
      <GradientOverlay
        className="absolute left-0 top-0 z-10 h-full"
        forecastsGraphContainerMargin={containerMargin}
      />
      <GradientOverlay
        className="absolute right-0 top-0 z-10 h-full"
        reverse
        forecastsGraphContainerMargin={containerMargin}
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={scrollRef}
      >
        <View style={{ marginLeft: containerMargin, marginRight: containerMargin }}>{children}</View>
      </ScrollView>
    </View>
  );
}
