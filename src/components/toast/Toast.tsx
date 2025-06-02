import { useEffect, useState } from 'react';
import type { PressableProps } from 'react-native';
import { Pressable, View } from 'react-native';

import classNames from 'classnames';

import PretendardText from '@components/fontText/PretendardText';
import CheckCircleIcon from '@components/icon/CheckCircleIcon';
import XCircleIcon from '@components/icon/XCircleIcon';
import Show from '@components/wrapper/Show';
import { shadowStyleList } from '@libs/utils/themes.util';

type ToastProps = Omit<PressableProps, 'className' | 'children'> & {
  type?: 'default' | 'error';
  text: string;
};

export default function Toast({ text, type = 'default', ...props }: ToastProps) {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOpened(true);
    }, 1000);
    setTimeout(() => {
      setIsOpened(false);
    }, 3000);
  }, []);

  const toastClassName = classNames(
    'flex w-full flex-row items-center gap-3 rounded-xl bg-text-01 p-4 transition-[opacity,bottom]',
    isOpened && 'opacity-100 bottom-0',
    !isOpened && 'opacity-0 -bottom-10',
  );

  return (
    <Pressable
      {...props}
      className={toastClassName}
      style={{ boxShadow: shadowStyleList.toast }}
    >
      <View className="size-6">
        <Show when={type === 'default'}>
          <CheckCircleIcon color="--color-morning" />
        </Show>
        <Show when={type === 'error'}>
          <XCircleIcon color="--color-error" />
        </Show>
      </View>
      <PretendardText
        typo="caption-1"
        className="text-text-11"
      >
        {text}
      </PretendardText>
    </Pressable>
  );
}
