import SettingSvg from '@assets/svg/Setting.svg';
import { getColorHex } from '@libs/utils/getColorHex.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { IconProps } from '@components/icon/Icon.type';

export default function SettingIcon({ color = '--color-text-01', ...props }: IconProps) {
  const theme = useSettingStore(state => state.theme);
  return (
    <SettingSvg
      {...props}
      color={getColorHex(theme, color)}
    />
  );
}
