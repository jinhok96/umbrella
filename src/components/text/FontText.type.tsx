import type { PropsWithChildren } from 'react';

type Font = 'pretendard' | 'montserrat';
type Weight = 'regular' | 'medium' | 'semibold' | 'bold';

export type FontTextProps = PropsWithChildren<{
  className?: string;
  font: Font;
  weight?: Weight;
}>;
