import UpArrowSvg from '@assets/svg/UpArrow.svg';
import { getColorHex } from '@libs/utils/getColorHex.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { GetColorHexProps } from '@libs/utils/getColorHex.type';

export default function UpArrowIcon({ color, ...props }: GetColorHexProps) {
  const theme = useSettingStore(state => state.theme);
  return (
    <UpArrowSvg
      {...props}
      color={getColorHex(theme, color)}
    />
  );
}
