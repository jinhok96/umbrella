import LocationDefaultSvg from '@assets/svg/LocationDefault.svg';
import LocationFilledSvg from '@assets/svg/LocationFilled.svg';
import Show from '@components/common/Show';
import { getIconColor } from '@components/icon/Icon.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { IconProps } from '@components/icon/Icon.type';

type LocationIconProps = IconProps<{
  filled?: boolean;
}>;

export default function LocationIcon({ color, filled = false }: LocationIconProps) {
  const theme = useSettingStore(state => state.theme);
  const currentColor = getIconColor(theme, color);
  return (
    <>
      <Show when={!filled}>
        <LocationDefaultSvg color={currentColor} />
      </Show>
      <Show when={filled}>
        <LocationFilledSvg color={currentColor} />
      </Show>
    </>
  );
}
