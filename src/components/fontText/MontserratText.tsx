import FontText from '@components/fontText/FontText';

import type { MontserratTextProps } from '@components/fontText/MontserratText.type';

/**
 * `font-montserrat-${weight}`를 적용하는 커스텀 Text 컴포넌트
 * @param className Text에 전달할 className
 * @param typo 타이포그래피
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
