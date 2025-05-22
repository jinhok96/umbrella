import CheckSvg from '@assets/svg/Check.svg';
import { getIconColor } from '@components/icon/Icon.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { DefaultIconProps } from '@components/icon/Icon.type';

export default function CheckIcon({ color }: DefaultIconProps) {
  const theme = useSettingStore(state => state.theme);
  return <CheckSvg color={getIconColor(theme, color)} />;
}
