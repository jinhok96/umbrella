import CheckSvg from '@assets/svg/Check.svg';
import { colorThemeVarList } from '@libs/utils/themes.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

export default function CheckIcon() {
  const theme = useSettingStore(state => state.theme);
  const color = colorThemeVarList[theme]['--color-gray-90'];
  return <CheckSvg color={color} />;
}
