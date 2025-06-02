import CheckSvg from '@assets/svg/Check.svg';
import { useGetColorHex } from '@hooks/useGetColorHex';

import type { IconProps } from '@components/icon/Icon.type';

export default function CheckIcon({ color = '--color-text-01', ...props }: IconProps) {
  const colorHex = useGetColorHex(color);
  return (
    <CheckSvg
      {...props}
      color={colorHex}
    />
  );
}
