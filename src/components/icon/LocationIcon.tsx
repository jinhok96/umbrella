import LocationDefaultSvg from '@assets/svg/LocationDefault.svg';
import LocationFilledSvg from '@assets/svg/LocationFilled.svg';
import Show from '@components/common/Show';
import { getColorHex } from '@libs/utils/getColorHex.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { GetColorHexProps } from '@libs/utils/getColorHex.type';

type LocationIconProps = GetColorHexProps<{
  filled?: boolean;
}>;

export default function LocationIcon({ color, filled = false, ...props }: LocationIconProps) {
  const theme = useSettingStore(state => state.theme);
  const currentColor = getColorHex(theme, color);
  return (
    <>
      <Show when={!filled}>
        <LocationDefaultSvg
          {...props}
          color={currentColor}
        />
      </Show>
      <Show when={filled}>
        <LocationFilledSvg
          {...props}
          color={currentColor}
        />
      </Show>
    </>
  );
}
