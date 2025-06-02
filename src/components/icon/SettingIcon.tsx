import SettingSvg from '@assets/svg/Setting.svg';
import { useGetColorHex } from '@hooks/useGetColorHex';

import type { IconProps } from '@components/icon/Icon.type';

export default function SettingIcon({ color = '--color-text-01', ...props }: IconProps) {
  const colorHex = useGetColorHex(color);
  return (
    <SettingSvg
      {...props}
      color={colorHex}
    />
  );
}
