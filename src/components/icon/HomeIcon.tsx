import HomeSvg from '@assets/svg/Home.svg';
import { useGetColorHex } from '@hooks/useGetColorHex';

import type { IconProps } from '@components/icon/Icon.type';

export default function HomeIcon({ color = '--color-text-01', ...props }: IconProps) {
  const colorHex = useGetColorHex(color);
  return (
    <HomeSvg
      {...props}
      color={colorHex}
    />
  );
}
