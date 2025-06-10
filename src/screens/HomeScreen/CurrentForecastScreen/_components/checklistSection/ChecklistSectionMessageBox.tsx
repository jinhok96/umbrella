import { useEffect, useState } from 'react';
import { View } from 'react-native';

import classNames from 'classnames';

import PretendardText from '@components/fontText/PretendardText';
import ChecklistSectionMessageBoxLabel from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionMessageBoxLabel';
import { useForecastsStore } from '@store/forecastsStore/useForecastsStore';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { ChecklistSectionMessageBoxProps } from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionMessageBox.type';

/**
 * `ChecklistSection`의 메세지 컴포넌트
 * @param selected 선택된 체크리스트 타입
 * @jinhok96 25.06.10
 */
export default function ChecklistSectionMessageBox({
  selected,
  onTextLayout,
  ...props
}: ChecklistSectionMessageBoxProps) {
  const checklist = useForecastsStore(state => state.checklist);
  const lang = useSettingStore(state => state.lang);
  const [latestSelected, setLatestSelected] = useState(selected);
  const [messageLine, setMessageLine] = useState(0);

  const message = latestSelected && checklist?.[latestSelected].message;

  const messagePaddingTopClassName = classNames(
    'px-5 transition-[padding-top]',
    !selected && 'pt-0',
    selected && 'pt-6',
  );

  // transition-[height]을 적용하기 위해 messageLine에 따라 height 절댓값 지정 (fit, full은 transition 작동하지 않음)
  const messageClassName = classNames(
    'size-full rounded-xl bg-morning-light text-morning px-4 transition-[height,padding-bottom,padding-top,opacity]',
    !selected && 'h-0 pb-0 pt-0 opacity-0',
    selected && 'pb-4 pt-7 opacity-100',
    selected && messageLine === 1 && 'h-[4.15rem]', // pt(28) + pb(16) + body2(14*1.6) = 66.4px = 4.15rem
    selected && messageLine === 2 && 'h-[5.55rem]', // pt(28) + pb(16) + body2(14*1.6)*2 = 88.8px = 5.55rem
    selected && messageLine === 3 && 'h-[6.95rem]', // pt(28) + pb(16) + body2(14*1.6)*3 = 111.2px = 6.95rem
  );

  useEffect(() => {
    if (!selected) return;
    setLatestSelected(selected);
  }, [selected]);

  // h-0이 적용되어야 애니메이션이 작동하므로 항상 렌더링
  return (
    <View className="relative flex overflow-hidden">
      <View className={messagePaddingTopClassName}>
        <PretendardText
          {...props}
          typo="body-2"
          className={messageClassName}
          onTextLayout={e => {
            setMessageLine(e.nativeEvent.lines.length);
            onTextLayout?.(e);
          }}
        >
          {message?.[lang]}
        </PretendardText>
        <ChecklistSectionMessageBoxLabel selected={selected} />
      </View>
    </View>
  );
}
