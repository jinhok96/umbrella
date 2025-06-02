import SearchSvg from '@assets/svg/Search.svg';
import { useGetColorHex } from '@hooks/useGetColorHex';

import type { IconProps } from '@components/icon/Icon.type';

export default function SearchIcon({ color = '--color-text-01', ...props }: IconProps) {
  const colorHex = useGetColorHex(color);
  return (
    <SearchSvg
      {...props}
      color={colorHex}
    />
  );
}
