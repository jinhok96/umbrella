import type { PretendardTextProps } from '@components/fontText/PretendardText.type';
import type { LocalizedText } from '@libs/utils/localize/localize.type';

export type CurrentForecastScreenSectionHeaderProps = Omit<PretendardTextProps, 'typo' | 'className' | 'children'> & {
  text: LocalizedText;
};
