import LeftArrowSvg from '@assets/svg/LeftArrow.svg';
import { getIconColor } from '@components/icon/Icon.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { IconProps } from '@components/icon/Icon.type';

export default function LeftArrowIcon({ color }: IconProps) {
  const theme = useSettingStore(state => state.theme);
  return <LeftArrowSvg color={getIconColor(theme, color)} />;
}
