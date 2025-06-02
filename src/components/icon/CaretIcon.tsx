import CaretSvg from '@assets/svg/Caret.svg';
import { useGetColorHex } from '@hooks/useGetColorHex';

import type { IconProps } from '@components/icon/Icon.type';

export default function CaretIcon({ color = '--color-text-01', ...props }: IconProps) {
  const colorHex = useGetColorHex(color);
  return (
    <CaretSvg
      {...props}
      color={colorHex}
    />
  );
}
