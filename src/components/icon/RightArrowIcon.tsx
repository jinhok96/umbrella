import RightArrowSvg from '@assets/svg/RightArrow.svg';
import { useGetColorHex } from '@hooks/useGetColorHex';

import type { IconProps } from '@components/icon/Icon.type';

export default function RightArrowIcon({ color = '--color-text-01', ...props }: IconProps) {
  const colorHex = useGetColorHex(color);
  return (
    <RightArrowSvg
      {...props}
      color={colorHex}
    />
  );
}
