import LongSleeveDarkSvg from '@assets/svg/checklist/ChecklistLongSleeveDark.svg';
import LongSleeveLightSvg from '@assets/svg/checklist/ChecklistLongSleeveLight.svg';
import ChecklistIcon from '@components/icon/checklist/ChecklistIcon';

export default function ChecklistLongSleeveIcon() {
  return (
    <ChecklistIcon
      light={<LongSleeveLightSvg />}
      dark={<LongSleeveDarkSvg />}
      highContrast={<LongSleeveDarkSvg />}
    />
  );
}
