import PretendardText from '@components/text/PretendardText';

import type { PretendardTextProps } from '@components/text/PretendardText.type';

type StyledHeaderTitleProps = Omit<PretendardTextProps, 'typo'>;

/**
 * 상단 헤더 타이틀 컴포넌트
 * @jinhok96 25.05.26
 */
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
