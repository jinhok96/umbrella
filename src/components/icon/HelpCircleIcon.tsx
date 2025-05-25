import HelpCircleDefaultSvg from '@assets/svg/HelpCircleDefault.svg';
import HelpCircleOnClickSvg from '@assets/svg/HelpCircleOnClick.svg';
import Show from '@components/common/Show';
import { getColorHex } from '@libs/utils/getColorHex.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { GetColorHexProps } from '@libs/utils/getColorHex.type';

type LocationIconProps = GetColorHexProps<{
  clicked?: boolean;
}>;

export default function HelpCircleIcon({ color, clicked = false, ...props }: LocationIconProps) {
  const theme = useSettingStore(state => state.theme);
  const currentColor = getColorHex(theme, color);
  return (
    <>
      <Show when={!clicked}>
        <HelpCircleDefaultSvg
          {...props}
          color={currentColor}
        />
      </Show>
      <Show when={clicked}>
        <HelpCircleOnClickSvg
          {...props}
          color={currentColor}
        />
      </Show>
    </>
  );
}
