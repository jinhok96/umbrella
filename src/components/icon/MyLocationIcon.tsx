import MyLocationSvg from '@assets/svg/MyLocation.svg';
import { getColorHex } from '@libs/utils/getColorHex.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { GetColorHexProps } from '@libs/utils/getColorHex.type';

export default function MyLocationIcon({ color, ...props }: GetColorHexProps) {
  const theme = useSettingStore(state => state.theme);
  return (
    <MyLocationSvg
      {...props}
      color={getColorHex(theme, color)}
    />
  );
}
