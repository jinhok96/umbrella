import DownArrowSvg from '@assets/svg/DownArrow.svg';
import { getColorHex } from '@libs/utils/getColorHex.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { IconProps } from '@components/icon/Icon.type';

export default function DownArrowIcon({ color = '--color-text-01', ...props }: IconProps) {
  const theme = useSettingStore(state => state.theme);
  return (
    <DownArrowSvg
      {...props}
      color={getColorHex(theme, color)}
    />
  );
}
