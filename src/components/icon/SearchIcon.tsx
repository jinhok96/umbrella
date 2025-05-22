import SearchSvg from '@assets/svg/Search.svg';
import { getIconColor } from '@components/icon/Icon.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { IconProps } from '@components/icon/Icon.type';

export default function SearchIcon({ color, ...props }: IconProps) {
  const theme = useSettingStore(state => state.theme);
  return (
    <SearchSvg
      {...props}
      color={getIconColor(theme, color)}
    />
  );
}
