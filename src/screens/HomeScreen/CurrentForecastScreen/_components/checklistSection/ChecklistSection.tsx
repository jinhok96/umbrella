import { useEffect, useState } from 'react';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import EmptyContent from '@components/emptyContent/EmptyContent';
import Show from '@components/wrapper/Show';
import { ChecklistSectionButtonListRow } from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionButtonList';
import ChecklistSectionMessageBox from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionMessageBox';
import CurrentForecastScreenSectionHeader from '@screens/HomeScreen/CurrentForecastScreen/_components/currentForecastScreenSectionHeader/CurrentForecastScreenSectionHeader';
import { useForecastsStore } from '@store/forecastsStore/useForecastsStore';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { LocalizedText } from '@libs/utils/localize/localize.type';
import type { ChecklistType } from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionButtonWrapper.type';
import type { ForecastsStoreState } from '@store/forecastsStore/useForecastsStore.type';

const SECTION_HEADER_TEXT: LocalizedText = {
  ko: '외출 전 체크! 챙기셨나요?',
  en: 'All set? Double-check!',
};

const PLACEHOLDER_TEXT: LocalizedText = {
  ko: '오늘은 가볍게 외출하세요!',
  en: 'Have a light and easy day out today!',
};

type ChecklistSection = Omit<ViewProps, 'className'>;

const BUTTON_GAP = 12;
const BUTTON_CONTAINER_PADDING = 20;
const BUTTON_MAX_ROW_ITEM_NUM = 4;

/**
 * 체크리스트 섹션 컴포넌트
 * @jinhok96 25.06.18
 */
export default function ChecklistSection({ ...props }: ChecklistSection) {
  const lang = useSettingStore(state => state.lang);
  const checklist = useForecastsStore(state => state.checklist);
  const [checklistMatrix, setChecklistMatrix] = useState<
    Array<Partial<ForecastsStoreState['checklist'] & { type: ChecklistType }>>[]
  >([]);
  const [selected, setSelected] = useState<{ type: ChecklistType; row: number } | null>(null);
  const [buttonMaxHeight, setButtonMaxHeight] = useState<number>(0);

  // checklist를 4개씩 2차 배열로 분리
  useEffect(() => {
    if (!checklist) return setChecklistMatrix([]);

    const newChecklist: Array<Partial<ForecastsStoreState['checklist'] & { type: ChecklistType }>> = [];

    // umbrella, mask, clothes, suncream 순서대로 추가
    if (checklist) {
      if (checklist.umbrella) {
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

    const newChecklistMatrix: Array<Partial<ForecastsStoreState['checklist'] & { type: ChecklistType }>>[] = [];

    // 4개씩 나눠서 저장
    newChecklist.forEach((item, index) => {
      if (index % BUTTON_MAX_ROW_ITEM_NUM === 0) {
        newChecklistMatrix.push([]);
      }
      newChecklistMatrix[newChecklistMatrix.length - 1].push(item);
    });

    setChecklistMatrix(newChecklistMatrix);
  }, [checklist]);

  return (
    <View
      {...props}
      className="rounded-[1.25rem] bg-background-02 pb-5"
    >
      <CurrentForecastScreenSectionHeader text={SECTION_HEADER_TEXT} />
      <Show when={!!checklistMatrix.length}>
        {checklistMatrix.map((item, row) => (
          <View
            key={`checklist-row-${item.toString()}`}
            className="w-full"
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
              <Show when={!!buttonMaxHeight}>
                {item.map(checklistItem => (
                  <ChecklistSectionButtonListRow
                    key={checklistItem.type}
                    type={checklistItem.type}
                    row={row}
                    selectedType={selected?.type}
                    onSelectedChange={setSelected}
                  />
                ))}
              </Show>
            </View>
            <ChecklistSectionMessageBox selected={selected && row === selected?.row ? selected.type : null} />
          </View>
        ))}
      </Show>
      <Show when={!checklistMatrix.length}>
        <EmptyContent subTitle={PLACEHOLDER_TEXT[lang]} />
      </Show>
    </View>
  );
}
