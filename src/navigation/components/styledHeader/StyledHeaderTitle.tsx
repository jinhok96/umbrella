import PretendardText from '@components/text/PretendardText';

import type { PretendardTextProps } from '@components/text/PretendardText.type';

type StyledHeaderTitleProps = Omit<PretendardTextProps, 'typo'>;

export default function StyledHeaderTitle({ children, className, ...props }: StyledHeaderTitleProps) {
  return (
    <PretendardText
      {...props}
      typo="title-3"
      className={`flex-shrink text-center text-text-01 ${className}`}
    >
      {children}
    </PretendardText>
  );
}
