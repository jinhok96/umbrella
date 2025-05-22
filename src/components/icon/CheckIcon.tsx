import CheckSvg from '@assets/svg/Check.svg';
import { getIconColor } from '@components/icon/Icon.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { IconProps } from '@components/icon/Icon.type';

export default function CheckIcon({ color, ...props }: IconProps) {
  const theme = useSettingStore(state => state.theme);
  return (
    <CheckSvg
      {...props}
      color={getIconColor(theme, color)}
    />
  );
}
