import SuncreamDarkSvg from '@assets/svg/checklist/ChecklistSuncreamDark.svg';
import SuncreamLightSvg from '@assets/svg/checklist/ChecklistSuncreamLight.svg';
import ChecklistIcon from '@components/icon/checklist/ChecklistIcon';

import type { IconProps } from '@components/icon/Icon.type';

export default function ChecklistSuncreamIcon(props: Omit<IconProps, 'color'>) {
  return (
    <ChecklistIcon
      light={<SuncreamLightSvg {...props} />}
      dark={<SuncreamDarkSvg {...props} />}
      highContrast={<SuncreamDarkSvg {...props} />}
    />
  );
}
