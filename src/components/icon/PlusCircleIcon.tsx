import PlusCircleSvg from '@assets/svg/PlusCircle.svg';
import { getColorHex } from '@libs/utils/getColorHex.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { GetColorHexProps } from '@libs/utils/getColorHex.type';

export default function PlusCircleIcon({ color, ...props }: GetColorHexProps) {
  const theme = useSettingStore(state => state.theme);
  return (
    <PlusCircleSvg
      {...props}
      color={getColorHex(theme, color)}
    />
  );
}
