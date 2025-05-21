import { Text } from 'react-native';

import type { FontTextProps } from '@components/text/FontText.type';

const FONT_CLASS_NAME_LIST: Record<FontTextProps['font'], Record<NonNullable<FontTextProps['weight']>, string>> = {
  pretendard: {
    regular: 'font-pretendard-regular',
    medium: 'font-pretendard-medium',
    semibold: 'font-pretendard-semibold',
    bold: 'font-pretendard-bold',
  },
  montserrat: {
    regular: 'font-montserrat-regular',
    medium: 'font-montserrat-medium',
    semibold: 'font-montserrat-semibold',
    bold: 'font-montserrat-bold',
  },
};

/**
 * `font-${font}-${weight}`를 적용하는 커스텀 Text 컴포넌트
 * @param className Text에 전달할 className
 * @param font 폰트 종류 `pretendard | montserrat`
 * @param weight 폰트 굵기 (기본값: `regular`) `regular | medium | semibold | bold`
 * @returns `Text` 컴포넌트
 * @jinhok96 25.05.21
 */
export default function FontText({ children, className = '', font, weight = 'regular' }: FontTextProps) {
  const fontClassName = FONT_CLASS_NAME_LIST[font][weight];
  return <Text className={`${className} ${fontClassName}`}>{children}</Text>;
}
