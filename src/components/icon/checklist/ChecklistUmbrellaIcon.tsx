import UmbrellaDarkSvg from '@assets/svg/checklist/ChecklistUmbrellaDark.svg';
import UmbrellaLightSvg from '@assets/svg/checklist/ChecklistUmbrellaLight.svg';
import ChecklistIcon from '@components/icon/checklist/ChecklistIcon';

export default function ChecklistUmbrellaIcon() {
  return (
    <ChecklistIcon
      light={<UmbrellaLightSvg />}
      dark={<UmbrellaDarkSvg />}
      highContrast={<UmbrellaDarkSvg />}
    />
  );
}
