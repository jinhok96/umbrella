import MaskDarkSvg from '@assets/svg/checklist/ChecklistMaskDark.svg';
import MaskLightSvg from '@assets/svg/checklist/ChecklistMaskLight.svg';
import ChecklistIcon from '@components/icon/checklist/ChecklistIcon';

export default function ChecklistMaskIcon() {
  return (
    <ChecklistIcon
      light={<MaskLightSvg />}
      dark={<MaskDarkSvg />}
      highContrast={<MaskDarkSvg />}
    />
  );
}
