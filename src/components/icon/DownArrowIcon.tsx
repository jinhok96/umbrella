import DownArrowSvg from '@assets/svg/DownArrow.svg';
import { getIconColor } from '@components/icon/Icon.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { IconProps } from '@components/icon/Icon.type';

export default function DownArrowIcon({ color, ...props }: IconProps) {
  const theme = useSettingStore(state => state.theme);
  return (
    <DownArrowSvg
      {...props}
      color={getIconColor(theme, color)}
    />
  );
}
