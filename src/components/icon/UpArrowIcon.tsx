import UpArrowSvg from '@assets/svg/UpArrow.svg';
import { getIconColor } from '@components/icon/Icon.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { IconProps } from '@components/icon/Icon.type';

export default function UpArrowIcon({ color }: IconProps) {
  const theme = useSettingStore(state => state.theme);
  return <UpArrowSvg color={getIconColor(theme, color)} />;
}
