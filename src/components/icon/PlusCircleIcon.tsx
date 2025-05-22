import PlusCircleSvg from '@assets/svg/PlusCircle.svg';
import { getIconColor } from '@components/icon/Icon.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { IconProps } from '@components/icon/Icon.type';

export default function PlusCircleIcon({ color }: IconProps) {
  const theme = useSettingStore(state => state.theme);
  return <PlusCircleSvg color={getIconColor(theme, color)} />;
}
