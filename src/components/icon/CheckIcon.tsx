import CheckSvg from '@assets/svg/Check.svg';
import { getIconColor } from '@components/icon/Icon.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

export default function CheckIcon() {
  const theme = useSettingStore(state => state.theme);
  return <CheckSvg color={getIconColor(theme)} />;
}
