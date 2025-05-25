import SearchSvg from '@assets/svg/Search.svg';
import { getColorHex } from '@libs/utils/getColorHex.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { GetColorHexProps } from '@libs/utils/getColorHex.type';

export default function SearchIcon({ color, ...props }: GetColorHexProps) {
  const theme = useSettingStore(state => state.theme);
  return (
    <SearchSvg
      {...props}
      color={getColorHex(theme, color)}
    />
  );
}
