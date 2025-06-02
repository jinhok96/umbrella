import DownArrowSvg from '@assets/svg/DownArrow.svg';
import { useGetColorHex } from '@hooks/useGetColorHex';

import type { IconProps } from '@components/icon/Icon.type';

export default function DownArrowIcon({ color = '--color-text-01', ...props }: IconProps) {
  const colorHex = useGetColorHex(color);
  return (
    <DownArrowSvg
      {...props}
      color={colorHex}
    />
  );
}
