import SuncreamDarkSvg from '@assets/svg/checklist/ChecklistSuncreamDark.svg';
import SuncreamLightSvg from '@assets/svg/checklist/ChecklistSuncreamLight.svg';
import ChecklistIcon from '@components/icon/checklist/ChecklistIcon';

export default function ChecklistSuncreamIcon() {
  return (
    <ChecklistIcon
      light={<SuncreamLightSvg />}
      dark={<SuncreamDarkSvg />}
      highContrast={<SuncreamDarkSvg />}
    />
  );
}
