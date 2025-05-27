import HelpCircleDefaultSvg from '@assets/svg/HelpCircleDefault.svg';
import HelpCirclePressedSvg from '@assets/svg/HelpCirclePressed.svg';
import Show from '@components/common/Show';

import type { IconProps } from '@components/icon/Icon.type';

type HelpCircleIconProps = Omit<
  IconProps<{
    pressed?: boolean;
  }>,
  'color'
>;

export default function HelpCircleIcon({ pressed = false, ...props }: HelpCircleIconProps) {
  return (
    <>
      <Show when={!pressed}>
        <HelpCircleDefaultSvg {...props} />
      </Show>
      <Show when={pressed}>
        <HelpCirclePressedSvg {...props} />
      </Show>
    </>
  );
}
