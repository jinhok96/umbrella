import CheckCircleSvg from '@assets/svg/CheckCircle.svg';
import { useGetColorHex } from '@hooks/useGetColorHex';

import type { IconProps } from '@components/icon/Icon.type';

export default function CheckCircleIcon({ color = '--color-text-01', ...props }: IconProps) {
  const colorHex = useGetColorHex(color);
  return (
    <CheckCircleSvg
      {...props}
      color={colorHex}
    />
  );
}
