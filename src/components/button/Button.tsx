import { Pressable, View } from 'react-native';

import classNames from 'classnames';

import MontserratText from '@components/fontText/MontserratText';
import PretendardText from '@components/fontText/PretendardText';
import Show from '@components/wrapper/Show';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { ButtonProps, ButtonSize, ButtonVariant } from '@components/button/Button.type';
import type { Typography } from '@components/fontText/FontText.type';
import type { ColorVar } from '@libs/utils/themes.type';

const size40ClassName = 'min-h-10';
const size48ClassName = 'min-h-12';
const size52ClassName = 'min-h-[3.25rem]';

const size40IconClassName = 'size-4';
const size48IconClassName = 'size-[1.125rem]';
const size52IconClassName = 'size-[1.125rem]';

const buttonSizeClassName: Record<ButtonSize, { text: string; icon: string; typo: Typography }> = {
  40: {
    text: size40ClassName,
    icon: size40IconClassName,
    typo: 'button-2',
  },
  48: {
    text: size48ClassName,
    icon: size48IconClassName,
    typo: 'button-1',
  },
  52: {
    text: size52ClassName,
    icon: size52IconClassName,
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

const disabledContainerClassName = 'bg-text-07';
const disabledTextClassName = 'text-white';

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
  disabled: {
    container: disabledContainerClassName,
    text: disabledTextClassName,
    icon: '--color-white',
  },
};

/**
 * 공통 버튼 컴포넌트
 * @param text 표시할 텍스트
 * @param size 버튼 크기; `40` | `48` | `52`
 * @param variant 버튼 색상; `primary` | `black` | `grayOutline` | `error` | `disabled`
 * @param icon 표시할 아이콘; (color: ColorVar) => ReactNode
 * @param iconPosition 아이콘 위치; `left` | `right` (기본값 `left`)
 * @jinhok96 25.06.23
 */
export default function Button({ text, size, variant, icon, iconPosition = 'left', className, ...props }: ButtonProps) {
  const lang = useSettingStore(state => state.lang);

  const buttonClassName = classNames(
    'flex flex-row justify-center items-center gap-2 px-4 rounded-lg',
    buttonSizeClassName[size].text,
    buttonColorClassName[variant].container,
    className,
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
