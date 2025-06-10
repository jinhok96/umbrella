import { useEffect, useState } from 'react';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import { ChecklistSectionButtonListRow } from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionButtonList';
import ChecklistSectionMessageBox from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionMessageBox';
import CurrentForecastScreenSectionHeader from '@screens/HomeScreen/CurrentForecastScreen/_components/currentForecastScreenSectionHeader/CurrentForecastScreenSectionHeader';
import { useForecastsStore } from '@store/forecastsStore/useForecastsStore';

import type { LocalizedText } from '@libs/utils/localize/localize.type';
import type { ChecklistType } from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionButtonWrapper.type';
import type { ForecastsStoreState } from '@store/forecastsStore/useForecastsStore.type';

const SECTION_HEADER_TEXT: LocalizedText = {
  ko: '외출 전 체크! 챙기셨나요?',
  en: 'All set? Double-check!',
};

type ChecklistSection = Omit<ViewProps, 'className'>;

const BUTTON_GAP = 12;
const BUTTON_CONTAINER_PADDING = 20;
const BUTTON_MAX_ROW_ITEM_NUM = 3;

/**
 * 체크리스트 섹션 컴포넌트
 * @jinhok96 25.06.10
 */
export default function ChecklistSection({ ...props }: ChecklistSection) {
  const checklist = useForecastsStore(state => state.checklist);
  const [checklistArray, setChecklistArray] = useState<
    Array<Partial<ForecastsStoreState['checklist'] & { type: ChecklistType }>>[]
  >([]);
  const [selected, setSelected] = useState<{ type: ChecklistType; row: number } | null>(null);
  const [buttonMaxHeight, setButtonMaxHeight] = useState<number>();

  useEffect(() => {
    if (!checklist) return setChecklistArray([]);

    const newChecklist: Array<Partial<ForecastsStoreState['checklist'] & { type: ChecklistType }>> = [];

    if (checklist) {
      if (checklist.umbrella.hours.length) {
        newChecklist.push({ ...checklist.umbrella, type: 'umbrella' });
      }
      if (checklist.mask) {
        newChecklist.push({ ...checklist.mask, type: 'mask' });
      }
      if (checklist.clothes) {
        newChecklist.push({ ...checklist.clothes, type: 'clothes' });
      }
      if (checklist.suncream) {
        newChecklist.push({ ...checklist.suncream, type: 'suncream' });
      }
    }

    const newChecklistArray: Array<Partial<ForecastsStoreState['checklist'] & { type: ChecklistType }>>[] = [];

    // 4개씩 나눠서 저장
    newChecklist.forEach((item, index) => {
      if (index % BUTTON_MAX_ROW_ITEM_NUM === 0) {
        newChecklistArray.push([]);
      }
      newChecklistArray[newChecklistArray.length - 1].push(item);
    });

    setChecklistArray(newChecklistArray);
  }, [checklist]);

  return (
    <View
      {...props}
      className="rounded-[1.25rem] bg-background-02"
    >
      <CurrentForecastScreenSectionHeader text={SECTION_HEADER_TEXT} />
      {checklistArray.map((item, row) => (
        <View
          key={`checklist-row-${item.toString()}`}
          className="w-full pb-5 pt-0"
        >
          <View
            className="flex w-full flex-row items-center justify-between"
            style={{
              maxHeight: buttonMaxHeight,
              gap: BUTTON_GAP,
              paddingLeft: BUTTON_CONTAINER_PADDING,
              paddingRight: BUTTON_CONTAINER_PADDING,
            }}
            onLayout={e => {
              const { width } = e.nativeEvent.layout;
              if (!width) return;
              const newMaxHeight = Math.round((width - BUTTON_CONTAINER_PADDING * 2 - BUTTON_GAP * 3) / 4);
              if (buttonMaxHeight !== newMaxHeight) setButtonMaxHeight(newMaxHeight);
            }}
          >
            {item.map(checklistItem => (
              <ChecklistSectionButtonListRow
                key={checklistItem.type}
                type={checklistItem.type}
                row={row}
                selectedType={selected?.type}
                onSelectedChange={setSelected}
              />
            ))}
          </View>
          <ChecklistSectionMessageBox selected={selected && row === selected?.row ? selected.type : null} />
        </View>
      ))}
    </View>
  );
}
