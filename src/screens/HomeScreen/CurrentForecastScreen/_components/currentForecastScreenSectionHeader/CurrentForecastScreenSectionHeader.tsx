import PretendardText from '@components/fontText/PretendardText';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { CurrentForecastScreenSectionHeaderProps } from '@screens/HomeScreen/CurrentForecastScreen/_components/currentForecastScreenSectionHeader/CurrentForecastScreenSectionHeader.type';

export default function CurrentForecastScreenSectionHeader({
  text,
  ...props
}: CurrentForecastScreenSectionHeaderProps) {
  const lang = useSettingStore(state => state.lang);

  return (
    <PretendardText
      {...props}
      typo="title-3"
      className="p-5 pb-4 text-text-01"
    >
      {text[lang]}
    </PretendardText>
  );
}
