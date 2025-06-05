import { View } from 'react-native';

import PretendardText from '@components/fontText/PretendardText';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { LocalizedTextMap } from '@libs/utils/localize/localize.type';
import type { ChecklistType } from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionButton.type';
import type { ChecklistSectionMessageBoxProps } from '@screens/HomeScreen/CurrentForecastScreen/_components/checklistSection/ChecklistSectionMessageBox.type';

export default function ChecklistSectionMessageBox({ selected, ...props }: ChecklistSectionMessageBoxProps) {
  const lang = useSettingStore(state => state.lang);

  const message: LocalizedTextMap<ChecklistType> = {
    umbrella: {
      ko: `오후 4시에 비가 내려요. 우산을 잊지말고 꼭 챙기세요!`,
      en: `It’s going to rain this afternoon at 4. Make sure to bring an umbrella if you’re heading out!`,
    },
    mask: {
      ko: `미세먼지 농도가 00로 매우 높아요.\n마스크를 착용해야 해요!`,
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

  return (
    <View className="pt-5">
      <PretendardText
        {...props}
        typo="body-2"
        className="size-full rounded-xl bg-morning-light p-4 pt-7 text-morning"
      >
        {selected && message[selected][lang]}
      </PretendardText>
    </View>
  );
}
