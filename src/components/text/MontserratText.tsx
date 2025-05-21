import FontText from '@components/text/FontText';

import type { FontTextProps } from '@components/text/FontText.type';

type MontserratTextProps = Omit<FontTextProps, 'font'>;

/**
 * `font-montserrat-${weight}`를 적용하는 커스텀 Text 컴포넌트
 * @param className Text에 전달할 className
 * @param weight 폰트 굵기 (기본값: `regular`) `regular | medium | semibold | bold`
 * @returns `Text` 컴포넌트
 * @jinhok96 25.05.21
 */
export default function MontserratText({ children, ...props }: MontserratTextProps) {
  return (
    <FontText
      {...props}
      font="montserrat"
    >
      {children}
    </FontText>
  );
}
