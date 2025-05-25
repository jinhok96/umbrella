import LongSleeveDarkSvg from '@assets/svg/checklist/ChecklistLongSleeveDark.svg';
import LongSleeveLightSvg from '@assets/svg/checklist/ChecklistLongSleeveLight.svg';
import ChecklistIcon from '@components/icon/checklist/ChecklistIcon';

import type { GetColorHexProps } from '@libs/utils/getColorHex.type';

export default function ChecklistLongSleeveIcon(props: Omit<GetColorHexProps, 'color'>) {
  return (
    <ChecklistIcon
      light={<LongSleeveLightSvg {...props} />}
      dark={<LongSleeveDarkSvg {...props} />}
      highContrast={<LongSleeveDarkSvg {...props} />}
    />
  );
}
