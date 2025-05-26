import PretendardText from '@components/text/PretendardText';

import type { PretendardTextProps } from '@components/text/PretendardText.type';

type StyledHeaderTitleProps = Omit<PretendardTextProps, 'typo' | 'className'>;

export default function StyledHeaderTitle({ children, ...props }: StyledHeaderTitleProps) {
  return (
    <PretendardText
      {...props}
      typo="title-3"
      className="flex-shrink text-center"
    >
      {children}
    </PretendardText>
  );
}
