import MyLocationSvg from '@assets/svg/MyLocation.svg';
import { useGetColorHex } from '@hooks/useGetColorHex';

import type { IconProps } from '@components/icon/Icon.type';

export default function MyLocationIcon({ color = '--color-text-01', ...props }: IconProps) {
  const colorHex = useGetColorHex(color);
  return (
    <MyLocationSvg
      {...props}
      color={colorHex}
    />
  );
}
