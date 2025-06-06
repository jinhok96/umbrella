import PretendardText from '@components/fontText/PretendardText';

import type { PretendardTextProps } from '@components/fontText/PretendardText.type';

type StyledHeaderTitleProps = Omit<Partial<PretendardTextProps>, 'typo'>;

/**
 * 상단 헤더 타이틀 컴포넌트
 * @jinhok96 25.05.26
 */
export default function StyledHeaderTitle({ children, className, ...props }: StyledHeaderTitleProps) {
  return (
    <PretendardText
      {...props}
      typo="title-3"
      className={`shrink text-center text-text-01 ${className}`}
    >
      {children}
    </PretendardText>
  );
}
