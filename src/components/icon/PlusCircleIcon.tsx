import PlusCircleSvg from '@assets/svg/PlusCircle.svg';
import { useGetColorHex } from '@hooks/useGetColorHex';

import type { IconProps } from '@components/icon/Icon.type';

export default function PlusCircleIcon({ color = '--color-text-01', ...props }: IconProps) {
  const colorHex = useGetColorHex(color);
  return (
    <PlusCircleSvg
      {...props}
      color={colorHex}
    />
  );
}
