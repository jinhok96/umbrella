import UpArrowSvg from '@assets/svg/UpArrow.svg';
import { useGetColorHex } from '@hooks/useGetColorHex';

import type { IconProps } from '@components/icon/Icon.type';

export default function UpArrowIcon({ color = '--color-text-01', ...props }: IconProps) {
  const colorHex = useGetColorHex(color);
  return (
    <UpArrowSvg
      {...props}
      color={colorHex}
    />
  );
}
