import classNames from 'classnames';

import PretendardText from '@components/fontText/PretendardText';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { PretendardTextProps } from '@components/fontText/PretendardText.type';
import type { LocalizedText } from '@libs/utils/localize/localize.type';

type StyledBottomTabBarLabelProps = Omit<PretendardTextProps, 'className' | 'typo'> & {
  text: LocalizedText;
  focused: boolean;
};

/**
 * 스타일이 적용된 `BottomTabBar` 라벨 컴포넌트
 * @param text 라벨 텍스트
 * @param focused 현재 선택된 탭인지 여부
 * @jinhok96 25.05.29
 */
export default function StyledBottomTabBarLabel({ text, focused, ...props }: StyledBottomTabBarLabelProps) {
  const lang = useSettingStore(state => state.lang);

  const textColorClassName = classNames('w-full pt-1 text-center', {
    'text-morning': focused,
    'text-text-06': !focused,
  });

  return (
    <PretendardText
      {...props}
      typo="caption-3"
      className={textColorClassName}
    >
      {text[lang]}
    </PretendardText>
  );
}
