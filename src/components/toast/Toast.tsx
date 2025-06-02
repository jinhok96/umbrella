import { useEffect, useState } from 'react';
import type { GestureResponderEvent } from 'react-native';
import { Pressable, View } from 'react-native';

import classNames from 'classnames';

import PretendardText from '@components/fontText/PretendardText';
import CheckCircleIcon from '@components/icon/CheckCircleIcon';
import XCircleIcon from '@components/icon/XCircleIcon';
import Show from '@components/wrapper/Show';
import { ANIMATION_DURATION } from '@libs/constants/duration.const';
import { shadowStyleList } from '@libs/utils/themes.util';
import { useToastStore } from '@store/toastStore/useToastStore';

import type { ToastProps } from '@components/toast/Toast.type';

const CLOSE_TOAST_DELAY = 3000;
const CLOSE_TOAST_ANIMATION_DELAY = ANIMATION_DURATION;

export default function Toast({ id, text, type = 'default', onPress, ...props }: ToastProps) {
  const [isOpened, setIsOpened] = useState(false);
  const closeToast = useToastStore(state => state.closeToast);

  const handleOpen = () => {
    setIsOpened(true);
  };

  const handleClose = () => {
    setIsOpened(false);
    // 토스트 닫기 애니메이션이 종료될 때까지 대기
    setTimeout(() => {
      closeToast(id);
    }, CLOSE_TOAST_ANIMATION_DELAY);
  };

  const handleToastPress = (e: GestureResponderEvent) => {
    handleClose();
    onPress?.(e);
  };

  useEffect(() => {
    handleOpen();
  }, []);

  useEffect(() => {
    if (!isOpened) {
      setTimeout(() => {
        handleClose();
      }, CLOSE_TOAST_DELAY);
    }
  }, [isOpened]);

  const toastClassName = classNames(
    'flex w-full flex-row items-center gap-3 rounded-xl bg-text-01 p-4 transition-[opacity,bottom]',
    isOpened && '!opacity-100 !-bottom-0',
    !isOpened && 'opacity-0 -bottom-14',
  );

  return (
    <Pressable
      {...props}
      id={id}
      className={toastClassName}
      onPress={handleToastPress}
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
