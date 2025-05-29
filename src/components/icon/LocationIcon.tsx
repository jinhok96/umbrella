import LocationDefaultSvg from '@assets/svg/LocationDefault.svg';
import LocationFilledSvg from '@assets/svg/LocationFilled.svg';
import Show from '@components/wrapper/Show';
import { getColorHex } from '@libs/utils/getColorHex.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { IconProps } from '@components/icon/Icon.type';

type LocationIconProps = Omit<
  IconProps<{
    filled?: boolean;
  }>,
  'color'
>;

export default function LocationIcon({ filled = false, ...props }: LocationIconProps) {
  const theme = useSettingStore(state => state.theme);
  const currentColor = getColorHex(theme, '--color-morning');

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
