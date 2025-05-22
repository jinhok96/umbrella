import HelpCircleDefaultSvg from '@assets/svg/HelpCircleDefault.svg';
import HelpCircleOnClickSvg from '@assets/svg/HelpCircleOnClick.svg';
import Show from '@components/common/Show';
import { getIconColor } from '@components/icon/Icon.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { IconProps } from '@components/icon/Icon.type';

type LocationIconProps = IconProps<{
  clicked?: boolean;
}>;

export default function HelpCircleIcon({ color, clicked = false }: LocationIconProps) {
  const theme = useSettingStore(state => state.theme);
  const currentColor = getIconColor(theme, color);
  return (
    <>
      <Show when={!clicked}>
        <HelpCircleDefaultSvg color={currentColor} />
      </Show>
      <Show when={clicked}>
        <HelpCircleOnClickSvg color={currentColor} />
      </Show>
    </>
  );
}
