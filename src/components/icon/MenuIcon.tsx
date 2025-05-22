import MenuSvg from '@assets/svg/Menu.svg';
import { getIconColor } from '@components/icon/Icon.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { IconProps } from '@components/icon/Icon.type';

export default function MenuIcon({ color, ...props }: IconProps) {
  const theme = useSettingStore(state => state.theme);
  return (
    <MenuSvg
      {...props}
      color={getIconColor(theme, color)}
    />
  );
}
