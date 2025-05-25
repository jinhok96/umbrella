import SuncreamDarkSvg from '@assets/svg/checklist/ChecklistSuncreamDark.svg';
import SuncreamLightSvg from '@assets/svg/checklist/ChecklistSuncreamLight.svg';
import ChecklistIcon from '@components/icon/checklist/ChecklistIcon';

import type { GetColorHexProps } from '@libs/utils/getColorHex.type';

export default function ChecklistSuncreamIcon(props: Omit<GetColorHexProps, 'color'>) {
  return (
    <ChecklistIcon
      light={<SuncreamLightSvg {...props} />}
      dark={<SuncreamDarkSvg {...props} />}
      highContrast={<SuncreamDarkSvg {...props} />}
    />
  );
}
