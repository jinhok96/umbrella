import LeftArrowSvg from '@assets/svg/LeftArrow.svg';
import { getColorHex } from '@libs/utils/getColorHex.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { GetColorHexProps } from '@libs/utils/getColorHex.type';

export default function LeftArrowIcon({ color, ...props }: GetColorHexProps) {
  const theme = useSettingStore(state => state.theme);
  return (
    <LeftArrowSvg
      {...props}
      color={getColorHex(theme, color)}
    />
  );
}
