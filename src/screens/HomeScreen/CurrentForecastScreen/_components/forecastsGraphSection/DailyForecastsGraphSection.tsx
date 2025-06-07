import { useMemo } from 'react';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import { getDailyAvgTemp } from '@libs/utils/getDailyAvgTemp.util';
import ForecastsGraph from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraph';
import { generateDataPointKey } from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraph.util';
import CustomGraphDataPointComponent from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraphDataPointComponent';
import ForecastsGraphLabelComponent from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraphLabelComponent';
import ForecastsGraphSectionWrapper from '@screens/HomeScreen/CurrentForecastScreen/_components/forecastsGraphSection/ForecastsGraphSectionWrapper';
import { useForecastsStore } from '@store/forecastsStore/useForecastsStore';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { LocalizedText } from '@libs/utils/localize/localize.type';
import type { GraphDataItem } from '@screens/HomeScreen/_components/forecastsGraph/ForecastsGraph.type';
import type { ForecastsGraphSectionWrapperProps } from '@screens/HomeScreen/CurrentForecastScreen/_components/forecastsGraphSection/ForecastsGraphSectionWrapper.type';

const SECTION_HEADER_TEXT: LocalizedText = {
  ko: '요일별 날씨',
  en: 'Daily Forecasts',
};

function getKoreanDay(date: Date) {
  const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  return days[date.getDay()];
}

function getEnglishShortDay(date: Date) {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  return days[date.getDay()];
}

type DailyForecastsGraphSectionProps = ViewProps &
  Pick<ForecastsGraphSectionWrapperProps, 'selectedIndex' | 'onSelectedIndexChange'>;

/**
 * 요일별 날씨 그래프 섹션
 * @param selectedIndex 선택한 요소 인덱스
 * @param onSelectedIndexChange selectedIndex 변경 시 호출할 함수
 * @jinhok96 25.06.07
 */
export default function DailyForecastsGraphSection({
  selectedIndex,
  onSelectedIndexChange,
  ...props
}: DailyForecastsGraphSectionProps) {
  const daily = useForecastsStore(state => state.daily);
  const theme = useSettingStore(state => state.theme);

  // 그래프 데이터; 리렌더링을 최소화하기 위해 메모이제이션
  const data: GraphDataItem[] = useMemo(() => {
    if (!daily) return [];

    const newData = daily?.map((item, index) => {
      const { morn, day, eve, night } = item.temp;
      const value = getDailyAvgTemp(morn, day, eve, night);
      const isSelected = index === selectedIndex;

      const baseKey = item.dt.toString();
      const key = generateDataPointKey(baseKey, theme, isSelected);

      return {
        value,
        customDataPoint: () => (
          <CustomGraphDataPointComponent
            key={key} // theme, isSelected가 변경될 때 컴포넌트를 리렌더링하기 위해 지정
            isSelected={isSelected}
          />
        ),
      };
    });

    return newData;
  }, [daily, selectedIndex, theme]);

  // 라벨 클릭 시 selectedIndex 업데이트
  const handleForecastsGraphLabelComponentPress = (index: number) => {
    const isSelectedIndexEmpty = !selectedIndex && selectedIndex !== 0;
    if (isSelectedIndexEmpty || selectedIndex !== index) return onSelectedIndexChange?.(index);
    onSelectedIndexChange?.(null);
  };

  return (
    <View {...props}>
      <ForecastsGraphSectionWrapper
        className="rounded-[1.25rem] bg-background-02"
        headerText={SECTION_HEADER_TEXT}
        selectedIndex={selectedIndex}
      >
        {/* 라벨 */}
        <View className="flex flex-row items-start">
          {daily?.map((item, index) => {
            const date = new Date(item.dt * 1000);
            const isSelected = index === selectedIndex;

            const { morn, day, eve, night } = item.temp;
            const value = getDailyAvgTemp(morn, day, eve, night);

            return (
              <ForecastsGraphLabelComponent
                key={item.dt}
                text={{
                  ko: getKoreanDay(date),
                  en: getEnglishShortDay(date),
                }}
                icon={item.weather[0].icon}
                temp={value}
                isSelected={isSelected}
                onPress={() => handleForecastsGraphLabelComponentPress(index)}
              />
            );
          })}
        </View>
        {/* 그래프 */}
        <ForecastsGraph data={data} />
      </ForecastsGraphSectionWrapper>
    </View>
  );
}
