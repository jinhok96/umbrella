import SearchSvg from '@assets/svg/Search.svg';
import { getColorHex } from '@libs/utils/getColorHex.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { IconProps } from '@components/icon/Icon.type';

export default function SearchIcon({ color = '--color-text-01', ...props }: IconProps) {
  const theme = useSettingStore(state => state.theme);
  return (
    <SearchSvg
      {...props}
      color={getColorHex(theme, color)}
    />
  );
}
