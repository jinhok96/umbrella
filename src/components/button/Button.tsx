import { Pressable, View } from 'react-native';

import classNames from 'classnames';

import MontserratText from '@components/fontText/MontserratText';
import PretendardText from '@components/fontText/PretendardText';
import Show from '@components/wrapper/Show';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { ButtonProps, ButtonSize, ButtonVariant } from '@components/button/Button.type';
import type { Typography } from '@components/fontText/FontText.type';
import type { ColorVar } from '@libs/utils/themes.type';

const smClassName = 'min-h-10';
const mdClassName = 'min-h-12';
const lgClassName = 'min-h-[3.25rem]';

const smIconClassName = 'size-4';
const mdIconClassName = 'size-[1.125rem]';
const lgIconClassName = 'size-[1.125rem]';

const buttonSizeClassName: Record<ButtonSize, { text: string; icon: string; typo: Typography }> = {
  sm: {
    text: smClassName,
    icon: smIconClassName,
    typo: 'button-2',
  },
  md: {
    text: mdClassName,
    icon: mdIconClassName,
    typo: 'button-1',
  },
  lg: {
    text: lgClassName,
    icon: lgIconClassName,
    typo: 'button-1',
  },
};

const primaryContainerClassName = 'bg-morning';
const primaryTextClassName = 'text-white';

const blackContainerClassName = 'bg-text-02 text-text-11';
const blackTextClassName = 'text-text-11';

const grayOutlineContainerClassName = 'border border-text-08 bg-text-11';
const grayOutlineTextClassName = 'text-text-01';

const errorContainerClassName = 'bg-error';
const errorTextClassName = 'text-white';

const buttonColorClassName: Record<ButtonVariant, { container: string; text: string; icon: ColorVar }> = {
  primary: {
    container: primaryContainerClassName,
    text: primaryTextClassName,
    icon: '--color-white',
  },
  black: {
    container: blackContainerClassName,
    text: blackTextClassName,
    icon: '--color-text-11',
  },
  grayOutline: {
    container: grayOutlineContainerClassName,
    text: grayOutlineTextClassName,
    icon: '--color-text-01',
  },
  error: {
    container: errorContainerClassName,
    text: errorTextClassName,
    icon: '--color-white',
  },
};

/**
 * 공통 버튼 컴포넌트
 * @param text 표시할 텍스트
 * @param size 버튼 크기; `sm` | `md` | `lg`
 * @param variant 버튼 색상; `primary` | `black` | `grayOutline` | `error`
 * @param icon 표시할 아이콘; (color: ColorVar) => ReactNode
 * @param iconPosition 아이콘 위치; `left` | `right` (기본값 `left`)
 * @jinhok96 25.05.29
 */
export default function Button({ text, size, variant, icon, iconPosition = 'left', ...props }: ButtonProps) {
  const lang = useSettingStore(state => state.lang);

  const buttonClassName = classNames(
    'flex flex-row justify-center items-center gap-2 px-4 rounded-lg',
    buttonSizeClassName[size].text,
    buttonColorClassName[variant].container,
  );

  const textClassName = classNames('text-center', buttonColorClassName[variant].text);

  return (
    <Pressable
      {...props}
      className={buttonClassName}
    >
      {/* 아이콘 */}
      <Show when={!!icon && iconPosition === 'left'}>
        <View className={buttonSizeClassName[size].icon}>{icon?.(buttonColorClassName[variant].icon)}</View>
      </Show>
      {/* 텍스트 */}
      <Show when={lang === 'ko'}>
        <PretendardText
          className={textClassName}
          typo={buttonSizeClassName[size].typo}
        >
          {text}
        </PretendardText>
      </Show>
      <Show when={lang === 'en'}>
        <MontserratText
          className={textClassName}
          typo={buttonSizeClassName[size].typo}
        >
          {text}
        </MontserratText>
      </Show>
      {/* 아이콘 */}
      <Show when={!!icon && iconPosition === 'right'}>{icon?.(buttonColorClassName[variant].icon)}</Show>
    </Pressable>
  );
}
