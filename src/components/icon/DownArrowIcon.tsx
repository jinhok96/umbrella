import DownArrowSvg from '@assets/svg/DownArrow.svg';
import { getColorHex } from '@libs/utils/getColorHex.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { GetColorHexProps } from '@libs/utils/getColorHex.type';

export default function DownArrowIcon({ color, ...props }: GetColorHexProps) {
  const theme = useSettingStore(state => state.theme);
  return (
    <DownArrowSvg
      {...props}
      color={getColorHex(theme, color)}
    />
  );
}
