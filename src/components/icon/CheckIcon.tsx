import CheckSvg from '@assets/svg/Check.svg';
import { getColorHex } from '@libs/utils/getColorHex.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { GetColorHexProps } from '@libs/utils/getColorHex.type';

export default function CheckIcon({ color, ...props }: GetColorHexProps) {
  const theme = useSettingStore(state => state.theme);
  return (
    <CheckSvg
      {...props}
      color={getColorHex(theme, color)}
    />
  );
}
