import PretendardText from '@components/fontText/PretendardText';

import type { PretendardTextProps } from '@components/fontText/PretendardText.type';

type SectionLabelProps = Omit<PretendardTextProps, 'typo' | 'className'>;

export default function SectionLabel({ ...props }: SectionLabelProps) {
  return (
    <PretendardText
      {...props}
      typo="caption-2"
      className="text-text-05"
    />
  );
}
