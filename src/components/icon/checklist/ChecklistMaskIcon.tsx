import MaskDarkSvg from '@assets/svg/checklist/ChecklistMaskDark.svg';
import MaskLightSvg from '@assets/svg/checklist/ChecklistMaskLight.svg';
import ChecklistIcon from '@components/icon/checklist/ChecklistIcon';

import type { IconProps } from '@components/icon/Icon.type';

export default function ChecklistMaskIcon(props: Omit<IconProps, 'color'>) {
  return (
    <ChecklistIcon
      light={<MaskLightSvg {...props} />}
      dark={<MaskDarkSvg {...props} />}
      highContrast={<MaskDarkSvg {...props} />}
    />
  );
}
