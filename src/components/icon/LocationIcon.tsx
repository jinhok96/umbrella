import LocationDefaultSvg from '@assets/svg/LocationDefault.svg';
import LocationFilledSvg from '@assets/svg/LocationFilled.svg';
import Show from '@components/wrapper/Show';
import { useGetColorHex } from '@hooks/useGetColorHex';

import type { IconProps } from '@components/icon/Icon.type';

type LocationIconProps = Omit<
  IconProps<{
    filled?: boolean;
  }>,
  'color'
>;

export default function LocationIcon({ filled = false, ...props }: LocationIconProps) {
  const colorHex = useGetColorHex('--color-morning');

  return (
    <>
      <Show when={!filled}>
        <LocationDefaultSvg
          {...props}
          color={colorHex}
        />
      </Show>
      <Show when={filled}>
        <LocationFilledSvg
          {...props}
          color={colorHex}
        />
      </Show>
    </>
  );
}
