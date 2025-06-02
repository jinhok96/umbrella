import XCircleSvg from '@assets/svg/XCircle.svg';
import { useGetColorHex } from '@hooks/useGetColorHex';

import type { IconProps } from '@components/icon/Icon.type';

export default function XCircleIcon({ color = '--color-text-01', ...props }: IconProps) {
  const colorHex = useGetColorHex(color);
  return (
    <XCircleSvg
      {...props}
      color={colorHex}
    />
  );
}
