import MenuSvg from '@assets/svg/Menu.svg';
import { getColorHex } from '@libs/utils/getColorHex.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { GetColorHexProps } from '@libs/utils/getColorHex.type';

export default function MenuIcon({ color, ...props }: GetColorHexProps) {
  const theme = useSettingStore(state => state.theme);
  return (
    <MenuSvg
      {...props}
      color={getColorHex(theme, color)}
    />
  );
}
