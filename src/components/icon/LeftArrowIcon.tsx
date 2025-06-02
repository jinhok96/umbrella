import LeftArrowSvg from '@assets/svg/LeftArrow.svg';
import { useGetColorHex } from '@hooks/useGetColorHex';

import type { IconProps } from '@components/icon/Icon.type';

export default function LeftArrowIcon({ color = '--color-text-01', ...props }: IconProps) {
  const colorHex = useGetColorHex(color);
  return (
    <LeftArrowSvg
      {...props}
      color={colorHex}
    />
  );
}
