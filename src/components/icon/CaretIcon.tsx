import CaretSvg from '@assets/svg/Caret.svg';
import { getColorHex } from '@libs/utils/getColorHex.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { GetColorHexProps } from '@libs/utils/getColorHex.type';

export default function CaretIcon({ color, ...props }: GetColorHexProps) {
  const theme = useSettingStore(state => state.theme);
  return (
    <CaretSvg
      {...props}
      color={getColorHex(theme, color)}
    />
  );
}
