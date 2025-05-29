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

// pretendard
const pretendardTitle1ClassName = 'font-pretendard-bold text-pretendard-title-1';
const pretendardTitle2ClassName = 'font-pretendard-bold text-pretendard-title-2';
const pretendardTitle3ClassName = 'font-pretendard-bold text-pretendard-title-3';
const pretendardTitle4ClassName = 'font-pretendard-bold text-pretendard-title-4';
const pretendardTitle5ClassName = 'font-pretendard-bold text-pretendard-title-5';
const pretendardBody1ClassName = 'font-pretendard-regular text-pretendard-body-1';
const pretendardBody2ClassName = 'font-pretendard-regular text-pretendard-body-2';
const pretendardBody3ClassName = 'font-pretendard-regular text-pretendard-body-3';
const pretendardBody4ClassName = 'font-pretendard-regular text-pretendard-body-4';
const pretendardCaption1ClassName = 'font-pretendard-medium text-pretendard-caption-1';
const pretendardCaption2ClassName = 'font-pretendard-medium text-pretendard-caption-2';
const pretendardCaption3ClassName = 'font-pretendard-medium text-pretendard-caption-3';
const pretendardCaption4ClassName = 'font-pretendard-medium text-pretendard-caption-4';
const pretendardButton1ClassName = 'font-pretendard-semibold text-pretendard-button-1';
const pretendardButton2ClassName = 'font-pretendard-semibold text-pretendard-button-2';

// montserrat
const montserratTitle1ClassName = 'font-montserrat-bold text-montserrat-title-1';
const montserratTitle2ClassName = 'font-montserrat-bold text-montserrat-title-2';
const montserratTitle3ClassName = 'font-montserrat-bold text-montserrat-title-3';
const montserratTitle4ClassName = 'font-montserrat-bold text-montserrat-title-4';
const montserratTitle5ClassName = 'font-montserrat-bold text-montserrat-title-5';
const montserratBody1ClassName = 'font-montserrat-regular text-montserrat-body-1';
const montserratBody2ClassName = 'font-montserrat-regular text-montserrat-body-2';
const montserratBody3ClassName = 'font-montserrat-regular text-montserrat-body-3';
const montserratBody4ClassName = 'font-montserrat-regular text-montserrat-body-4';
const montserratCaption1ClassName = 'font-montserrat-medium text-montserrat-caption-1';
const montserratCaption2ClassName = 'font-montserrat-medium text-montserrat-caption-2';
const montserratCaption3ClassName = 'font-montserrat-medium text-montserrat-caption-3';
const montserratCaption4ClassName = 'font-montserrat-medium text-montserrat-caption-4';
const montserratButton1ClassName = 'font-montserrat-semibold text-montserrat-button-1';
const montserratButton2ClassName = 'font-montserrat-semibold text-montserrat-button-2';

const FONT_CLASS_NAME_LIST: FontClassNameListType = {
  pretendard: {
    'title-1': pretendardTitle1ClassName,
    'title-2': pretendardTitle2ClassName,
    'title-3': pretendardTitle3ClassName,
    'title-4': pretendardTitle4ClassName,
    'title-5': pretendardTitle5ClassName,
    'body-1': pretendardBody1ClassName,
    'body-2': pretendardBody2ClassName,
    'body-3': pretendardBody3ClassName,
    'body-4': pretendardBody4ClassName,
    'caption-1': pretendardCaption1ClassName,
    'caption-2': pretendardCaption2ClassName,
    'caption-3': pretendardCaption3ClassName,
    'caption-4': pretendardCaption4ClassName,
    'button-1': pretendardButton1ClassName,
    'button-2': pretendardButton2ClassName,
  },
  montserrat: {
    'title-1': montserratTitle1ClassName,
    'title-2': montserratTitle2ClassName,
    'title-3': montserratTitle3ClassName,
    'title-4': montserratTitle4ClassName,
    'title-5': montserratTitle5ClassName,
    'body-1': montserratBody1ClassName,
    'body-2': montserratBody2ClassName,
    'body-3': montserratBody3ClassName,
    'body-4': montserratBody4ClassName,
    'caption-1': montserratCaption1ClassName,
    'caption-2': montserratCaption2ClassName,
    'caption-3': montserratCaption3ClassName,
    'caption-4': montserratCaption4ClassName,
    'button-1': montserratButton1ClassName,
    'button-2': montserratButton2ClassName,
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
