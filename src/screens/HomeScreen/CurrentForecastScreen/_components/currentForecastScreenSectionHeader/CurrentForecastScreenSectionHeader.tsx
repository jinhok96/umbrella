import PretendardText from '@components/fontText/PretendardText';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { PretendardTextProps } from '@components/fontText/PretendardText.type';
import type { LocalizedText } from '@libs/utils/localize/localize.type';

type CurrentForecastScreenSectionHeaderProps = Omit<PretendardTextProps, 'typo' | 'className' | 'children'> & {
  text: LocalizedText;
};

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
