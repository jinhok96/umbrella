import MenuSvg from '@assets/svg/Menu.svg';
import { useGetColorHex } from '@hooks/useGetColorHex';

import type { IconProps } from '@components/icon/Icon.type';

export default function MenuIcon({ color = '--color-text-01', ...props }: IconProps) {
  const colorHex = useGetColorHex(color);
  return (
    <MenuSvg
      {...props}
      color={colorHex}
    />
  );
}
