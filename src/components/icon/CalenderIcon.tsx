import CalenderSvg from '@assets/svg/Calender.svg';
import { useGetColorHex } from '@hooks/useGetColorHex';

import type { IconProps } from '@components/icon/Icon.type';

export default function CalenderIcon({ color = '--color-text-01', ...props }: IconProps) {
  const colorHex = useGetColorHex(color);
  return (
    <CalenderSvg
      {...props}
      color={colorHex}
    />
  );
}
