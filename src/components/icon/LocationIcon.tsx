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
  const morningColor = useGetColorHex('--color-morning');
  const text01Color = useGetColorHex('--color-text-01');

  return (
    <>
      <Show when={!filled}>
        <LocationDefaultSvg
          {...props}
          color={text01Color}
        />
      </Show>
      <Show when={filled}>
        <LocationFilledSvg
          {...props}
          color={morningColor}
        />
      </Show>
    </>
  );
}
