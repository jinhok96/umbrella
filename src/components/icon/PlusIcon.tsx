import { View } from 'react-native';

import PlusSvg from '@assets/svg/Plus.svg';
import { getColorHex } from '@libs/utils/getColorHex.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { IconProps } from '@components/icon/Icon.type';

export default function PlusIcon({ color = '--color-text-01', ...props }: IconProps) {
  const theme = useSettingStore(state => state.theme);
  return (
    <View className="p-0.5">
      <PlusSvg
        {...props}
        color={getColorHex(theme, color)}
      />
    </View>
  );
}
