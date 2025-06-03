import type { PropsWithChildren } from 'react';
import type { TextProps } from 'react-native';

type Font = 'pretendard' | 'montserrat';

export type PretendardTypography =
  // Title
  | 'title-1'
  | 'title-2'
  | 'title-3'
  | 'title-4'
  | 'title-5'
  // Body
  | 'body-1'
  | 'body-2'
  | 'body-3'
  | 'body-4'
  // Caption
  | 'caption-1'
  | 'caption-2'
  | 'caption-3'
  | 'caption-4'
  // Button
  | 'button-1'
  | 'button-2';

export type MontserratTypography =
  // Title
  | 'title-1'
  | 'title-2'
  | 'title-3'
  | 'title-4'
  | 'title-5'
  // Body
  | 'body-1'
  | 'body-2'
  | 'body-3'
  | 'body-4'
  // Caption
  | 'caption-1'
  | 'caption-2'
  | 'caption-3'
  | 'caption-4'
  // Button
  | 'button-1'
  | 'button-2';

export type Typography = PretendardTypography | MontserratTypography;

export type FontTextProps<T extends Typography> = PropsWithChildren<
  TextProps & {
    className: string;
    font: Font;
    typo: T;
    animate?: boolean;
  }
>;
