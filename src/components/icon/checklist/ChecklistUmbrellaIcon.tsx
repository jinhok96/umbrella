import UmbrellaDarkSvg from '@assets/svg/checklist/ChecklistUmbrellaDark.svg';
import UmbrellaLightSvg from '@assets/svg/checklist/ChecklistUmbrellaLight.svg';
import ChecklistIcon from '@components/icon/checklist/ChecklistIcon';

import type { GetColorHexProps } from '@libs/utils/getColorHex.type';

export default function ChecklistUmbrellaIcon(props: Omit<GetColorHexProps, 'color'>) {
  return (
    <ChecklistIcon
      light={<UmbrellaLightSvg {...props} />}
      dark={<UmbrellaDarkSvg {...props} />}
      highContrast={<UmbrellaDarkSvg {...props} />}
    />
  );
}
