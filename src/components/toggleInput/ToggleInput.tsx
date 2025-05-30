import type { ReactNode } from 'react';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import classNames from 'classnames';

import PressableHitSlop from '@components/button/PressableHitSlop';
import PretendardText from '@components/fontText/PretendardText';
import CheckIcon from '@components/icon/CheckIcon';
import Show from '@components/wrapper/Show';
import { shadowStyleList } from '@libs/utils/themes.util';

import type { PressableHitSlopProps } from '@components/button/PressableHitSlop.type';

type ToggleInputIconProps = Omit<ViewProps, 'children' | 'className'> & {
  size?: 'sm' | 'lg';
  value: boolean;
  disabled?: boolean;
};

/**
 * 라디오 인디케이터
 * @jinhok96 25.05.30
 */
function Radio({ value, size, disabled, ...props }: ToggleInputIconProps) {
  const containerClassName = classNames(
    'flex items-center justify-center rounded-full border',
    size === 'sm' && 'size-[1.125rem] p-1',
    size === 'lg' && 'size-6 p-[0.3125rem]',
    disabled && 'border-text-08 bg-text-10',
    !disabled && value && 'border-morning bg-text-11',
    !disabled && !value && 'border-text-08 bg-text-11',
  );

  return (
    <View
      {...props}
      className={containerClassName}
    >
      <View
        className={`size-full overflow-hidden rounded-full transition-opacity ${value ? 'opacity-100' : 'opacity-0'}`}
      >
        <View className={`size-full ${disabled ? 'bg-text-08' : 'bg-morning'}`} />
      </View>
    </View>
  );
}

/**
 * 체크박스 인디케이터
 * @jinhok96 25.05.30
 */
function Checkbox({ value, size, disabled, ...props }: ToggleInputIconProps) {
  const containerClassName = classNames(
    'border',
    size === 'sm' && 'size-[1.125rem] rounded',
    size === 'lg' && 'size-6 rounded-md',
    disabled && 'border-text-08 bg-text-10',
    !disabled && value && 'border-morning bg-morning',
    !disabled && !value && 'border-text-08 bg-text-11',
  );

  const checkIconContainerClassName = classNames(
    'size-full',
    size === 'sm' && 'p-0.5',
    size === 'lg' && 'p-[0.1875rem]',
  );

  const checkIconClassName = classNames(
    'absolute left-0 top-0 size-full transition-opacity',
    value && 'opacity-100',
    !value && 'opacity-0',
  );

  return (
    <View
      {...props}
      className={containerClassName}
    >
      <View className={checkIconContainerClassName}>
        <View className="relative size-full">
          <View className={checkIconClassName}>
            <CheckIcon color={disabled ? '--color-text-08' : '--color-white'} />
          </View>
        </View>
      </View>
    </View>
  );
}

/**
 * 토글 인디케이터
 * @jinhok96 25.05.30
 */
function Toggle({ value, disabled, ...props }: ToggleInputIconProps) {
  return (
    <View
      {...props}
      className={`w-[2.625rem] rounded-full p-0.5 transition-all ${!disabled && value ? 'bg-morning' : 'bg-text-08'}`}
    >
      <View
        className={`aspect-square size-5 overflow-hidden rounded-full transition-transform ${value ? 'translate-x-[1.125rem]' : 'translate-x-0'}`}
        style={{ boxShadow: shadowStyleList.float }}
      >
        <View className={`size-full ${disabled ? 'bg-text-09' : 'bg-white'}`} />
      </View>
    </View>
  );
}

type ToggleInputProps = Omit<PressableHitSlopProps, 'children'> &
  Pick<ToggleInputIconProps, 'size' | 'value' | 'disabled'> & {
    type: 'radio' | 'checkbox' | 'toggle';
    onChange: (value: boolean) => void;
    text?: string;
    children?: ReactNode;
  };

/**
 * 토글 인풋 컴포넌트
 * @param type 인디케이터 타입; `radio` | `checkbox` | `toggle`
 * @param size 인풋 크기; `sm` | `lg` (`toggle` 타입은 크기 고정)
 * @param value 현재 값
 * @param disabled 인풋 비활성화 여부
 * @param onChange `value` 상태 변화 시 호출하는 함수
 * @param text 인풋 컴포넌트 텍스트
 * @param children `text` 우측에 렌더링하거나 대체하는 컴포넌트
 * @jinhok96 25.05.30
 */
export default function ToggleInput({
  type,
  size = 'sm',
  value,
  disabled = false,
  onChange,
  text,
  children,
  hitSlop,
  hitSlopX,
  hitSlopY,
  ...props
}: ToggleInputProps) {
  const handlePress = () => onChange(!value);

  const pressableClassName = classNames('flex flex-row items-center', {
    'gap-1.5': size === 'sm',
    'gap-2': size === 'lg',
  });

  return (
    <PressableHitSlop
      {...props}
      className={pressableClassName}
      onPress={handlePress}
      hitSlop={hitSlop}
      hitSlopX={hitSlopX}
      hitSlopY={hitSlopY}
    >
      <View>
        <Show when={type === 'radio'}>
          <Radio
            value={value}
            size={size}
            disabled={disabled}
          />
        </Show>
        <Show when={type === 'checkbox'}>
          <Checkbox
            value={value}
            size={size}
            disabled={disabled}
          />
        </Show>
        <Show when={type === 'toggle'}>
          <Toggle
            value={value}
            size={size}
            disabled={disabled}
          />
        </Show>
      </View>
      <View>
        <Show when={!!text}>
          <PretendardText
            typo={size === 'sm' ? 'body-3' : 'body-2'}
            className={disabled ? 'text-text-08' : 'text-text-01'}
          >
            {text}
          </PretendardText>
        </Show>
        {children}
      </View>
    </PressableHitSlop>
  );
}
