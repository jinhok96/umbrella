import { Text } from 'react-native';

import classNames from 'classnames';

import type {
  FontTextProps,
  MontserratTypography,
  PretendardTypography,
  Typography,
} from '@components/fontText/FontText.type';

type FontClassNameListType = {
  pretendard: Record<FontTextProps<PretendardTypography>['typo'], string>;
  montserrat: Record<FontTextProps<MontserratTypography>['typo'], string>;
};

const FONT_CLASS_NAME_LIST: FontClassNameListType = {
  pretendard: {
    'title-1': 'font-pretendard-bold text-pretendard-title-1',
    'title-2': 'font-pretendard-bold text-pretendard-title-2',
    'title-3': 'font-pretendard-bold text-pretendard-title-3',
    'title-4': 'font-pretendard-bold text-pretendard-title-4',
    'title-5': 'font-pretendard-bold text-pretendard-title-5',
    'body-1': 'font-pretendard-regular text-pretendard-body-1',
    'body-2': 'font-pretendard-regular text-pretendard-body-2',
    'body-3': 'font-pretendard-regular text-pretendard-body-3',
    'body-4': 'font-pretendard-regular text-pretendard-body-4',
    'caption-1': 'font-pretendard-medium text-pretendard-caption-1',
    'caption-2': 'font-pretendard-medium text-pretendard-caption-2',
    'caption-3': 'font-pretendard-medium text-pretendard-caption-3',
    'caption-4': 'font-pretendard-medium text-pretendard-caption-4',
    'button-1': 'font-pretendard-semibold text-pretendard-button-1',
    'button-2': 'font-pretendard-semibold text-pretendard-button-2',
  },
  montserrat: {
    'title-1': 'font-montserrat-bold text-montserrat-title-1',
    'title-2': 'font-montserrat-bold text-montserrat-title-2',
    'title-3': 'font-montserrat-bold text-montserrat-title-3',
    'title-4': 'font-montserrat-bold text-montserrat-title-4',
    'title-5': 'font-montserrat-bold text-montserrat-title-5',
    'body-1': 'font-montserrat-regular text-montserrat-body-1',
    'body-2': 'font-montserrat-regular text-montserrat-body-2',
    'body-3': 'font-montserrat-regular text-montserrat-body-3',
    'body-4': 'font-montserrat-regular text-montserrat-body-4',
    'caption-1': 'font-montserrat-medium text-montserrat-caption-1',
    'caption-2': 'font-montserrat-medium text-montserrat-caption-2',
    'caption-3': 'font-montserrat-medium text-montserrat-caption-3',
    'caption-4': 'font-montserrat-medium text-montserrat-caption-4',
    'button-1': 'font-montserrat-semibold text-montserrat-button-1',
    'button-2': 'font-montserrat-semibold text-montserrat-button-2',
  },
};

/**
 * `font-${font}-${weight}`를 적용하는 커스텀 Text 컴포넌트
 * @param className Text에 전달할 className
 * @param font 폰트 종류 `pretendard | montserrat`
 * @param typo 타이포그래피
 * @returns `Text` 컴포넌트
 * @jinhok96 25.05.28
 */
export default function FontText<T extends Typography>({ children, className = '', font, typo }: FontTextProps<T>) {
  const textClassName = classNames(FONT_CLASS_NAME_LIST[font][typo], className);

  return <Text className={textClassName}>{children}</Text>;
}
