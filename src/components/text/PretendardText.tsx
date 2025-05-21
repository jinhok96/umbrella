import FontText from '@components/text/FontText';

import type { FontTextProps } from '@components/text/FontText.type';

type PretendardTextProps = Omit<FontTextProps, 'font'>;

/**
 * `font-pretendard-${weight}`를 적용하는 커스텀 Text 컴포넌트
 * @param className Text에 전달할 className
 * @param weight 폰트 굵기 (기본값: `regular`) `regular | medium | semibold | bold`
 * @returns `Text` 컴포넌트
 * @jinhok96 25.05.21
 */
export default function PretendardText({ children, ...props }: PretendardTextProps) {
  return (
    <FontText
      {...props}
      font="pretendard"
    >
      {children}
    </FontText>
  );
}
