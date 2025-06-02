import ClockSvg from '@assets/svg/Clock.svg';
import { useGetColorHex } from '@hooks/useGetColorHex';

import type { IconProps } from '@components/icon/Icon.type';

export default function ClockIcon({ color = '--color-text-01', ...props }: IconProps) {
  const colorHex = useGetColorHex(color);
  return (
    <ClockSvg
      {...props}
      color={colorHex}
    />
  );
}
