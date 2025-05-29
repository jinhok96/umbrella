import type { ReactNode } from 'react';
import { Pressable, View } from 'react-native';

import classNames from 'classnames';

import Show from '@components/common/Show';
import PretendardText from '@components/fontText/PretendardText';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { PressableHitSlopProps } from '@components/common/PressableHitSlop.type';
import type { Typography } from '@components/fontText/FontText.type';
import type { ColorVar } from '@libs/utils/themes.type';

type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonVariant = 'primary' | 'black' | 'grayOutline' | 'error';

type ButtonProps = PressableHitSlopProps & {
  text?: string;
  size: ButtonSize;
  variant: ButtonVariant;
  icon?: (color: ColorVar) => ReactNode;
  iconPosition?: 'left' | 'right';
};

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
      {/* 아이콘 */}
      <Show when={!!icon && iconPosition === 'right'}>{icon?.(buttonColorClassName[variant].icon)}</Show>
    </Pressable>
  );
}
