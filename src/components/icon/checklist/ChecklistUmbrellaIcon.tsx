import UmbrellaDarkSvg from '@assets/svg/checklist/ChecklistUmbrellaDark.svg';
import UmbrellaLightSvg from '@assets/svg/checklist/ChecklistUmbrellaLight.svg';
import ChecklistIcon from '@components/icon/checklist/ChecklistIcon';

export default function ChecklistUmbrellaIcon(props: Omit<IconProps, 'color'>) {
  return (
    <ChecklistIcon
      light={<UmbrellaLightSvg {...props} />}
      dark={<UmbrellaDarkSvg {...props} />}
      highContrast={<UmbrellaDarkSvg {...props} />}
    />
  );
}
