import CaretSvg from '@assets/svg/Caret.svg';
import { getIconColor } from '@components/icon/Icon.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { IconProps } from '@components/icon/Icon.type';

export default function CaretIcon({ color }: IconProps) {
  const theme = useSettingStore(state => state.theme);
  return <CaretSvg color={getIconColor(theme, color)} />;
}
