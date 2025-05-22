import RightArrowSvg from '@assets/svg/RightArrow.svg';
import { getIconColor } from '@components/icon/Icon.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { IconProps } from '@components/icon/Icon.type';

export default function RightArrowIcon({ color }: IconProps) {
  const theme = useSettingStore(state => state.theme);
  return <RightArrowSvg color={getIconColor(theme, color)} />;
}
