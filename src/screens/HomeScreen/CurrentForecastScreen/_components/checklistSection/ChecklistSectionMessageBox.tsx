import { useState } from 'react';
import { View } from 'react-native';

import classNames from 'classnames';

import PretendardText from '@components/fontText/PretendardText';
import ChecklistSectionMessageBoxLabel from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionMessageBoxLabel';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { LocalizedTextMap } from '@libs/utils/localize/localize.type';
import type { ChecklistType } from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionButton.type';
import type { ChecklistSectionMessageBoxProps } from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionMessageBox.type';

export default function ChecklistSectionMessageBox({
  selected,
  onTextLayout,
  ...props
}: ChecklistSectionMessageBoxProps) {
  const lang = useSettingStore(state => state.lang);
  const [messageLine, setMessageLine] = useState(0);

  const message: LocalizedTextMap<ChecklistType> = {
    umbrella: {
      ko: `오후 4시에 비가 내려요. 우산을 잊지말고 꼭 챙기세요!`,
      en: `It’s going to rain this afternoon at 4. Make sure to bring an umbrella if you’re heading out!`,
    },
    mask: {
      ko: `미세먼지 농도가 00로 매우 높아요.\n마스크를 착용하세요!`,
      en: `It’s going to rain this afternoon at 4. Make sure to bring an umbrella if you’re heading out!`,
    },
    clothes: {
      ko: `일교차가 크고 쌀쌀해요. 긴팔을 입는 게 좋아요!`,
      en: `It’s going to rain this afternoon at 4. Make sure to bring an umbrella if you’re heading out!`,
    },
    suncream: {
      ko: `자외선 지수가 매우 높아요!\n썬크림으로 피부를 보호하세요!`,
      en: `It’s going to rain this afternoon at 4. Make sure to bring an umbrella if you’re heading out!`,
    },
  };

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
          {selected && message[selected][lang]}
        </PretendardText>
        <ChecklistSectionMessageBoxLabel selected={selected} />
      </View>
    </View>
  );
}
