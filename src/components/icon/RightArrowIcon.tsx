import RightArrowSvg from '@assets/svg/RightArrow.svg';
import { getColorHex } from '@libs/utils/getColorHex.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { GetColorHexProps } from '@libs/utils/getColorHex.type';

export default function RightArrowIcon({ color, ...props }: GetColorHexProps) {
  const theme = useSettingStore(state => state.theme);
  return (
    <RightArrowSvg
      {...props}
      color={getColorHex(theme, color)}
    />
  );
}
