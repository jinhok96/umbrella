import LongSleeveDarkSvg from '@assets/svg/checklist/ChecklistLongSleeveDark.svg';
import LongSleeveLightSvg from '@assets/svg/checklist/ChecklistLongSleeveLight.svg';
import ChecklistIcon from '@components/icon/checklist/ChecklistIcon';

import type { IconProps } from '@components/icon/Icon.type';

export default function ChecklistLongSleeveIcon(props: Omit<IconProps, 'color'>) {
  return (
    <ChecklistIcon
      light={<LongSleeveLightSvg {...props} />}
      dark={<LongSleeveDarkSvg {...props} />}
      highContrast={<LongSleeveDarkSvg {...props} />}
    />
  );
}
