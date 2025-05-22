import MyLocationSvg from '@assets/svg/MyLocation.svg';
import { getIconColor } from '@components/icon/Icon.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { IconProps } from '@components/icon/Icon.type';

export default function MyLocationIcon({ color }: IconProps) {
  const theme = useSettingStore(state => state.theme);
  return <MyLocationSvg color={getIconColor(theme, color)} />;
}
