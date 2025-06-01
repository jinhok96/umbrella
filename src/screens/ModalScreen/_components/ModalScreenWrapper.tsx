import { useEffect, useState } from 'react';
import { View } from 'react-native';

import classNames from 'classnames';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { shadowStyleList } from '@libs/utils/themes.util';
import ScreenWrapper from '@navigation/_components/screenWrapper/ScreenWrapper';
import { useModalStore } from '@store/modalStore/useModalStore';

import type { ModalProps } from '@components/modal/Modal.type';
import type { ScreenWrapperProps } from '@navigation/_components/screenWrapper/ScreenWrapper.type';

type ModalScreenWrapperProps = ScreenWrapperProps & { params: Readonly<ModalProps> };

export default function ModalScreenWrapper({ children, params, ...props }: ModalScreenWrapperProps) {
  const closeModal = useModalStore(state => state.closeModal);
  const isOpened = useModalStore(state => state.isOpened);
  const { top } = useSafeAreaInsets();
  const [animate, setAnimate] = useState(false);

  const { position } = params;

  useEffect(() => {
    setTimeout(() => {
      setAnimate(isOpened);
    }, 0);
  }, [isOpened]);

  const modalScreenWrapperClassName = classNames(
    'flex-1 items-center px-5 py-safe',
    position === 'center' && 'justify-center',
    position === 'bottom' && 'justify-end',
  );

  const modalContainerClassName = classNames(
    'h-fit transition-[bottom,opacity]',
    !animate && '-bottom-1/4 opacity-0',
    animate && 'bottom-0 opacity-100',
    position === 'center' && 'max-w-[22.5rem] w-full',
    position === 'bottom' && 'w-full',
  );

  return (
    <ScreenWrapper
      {...params}
      {...props}
      backgroundClassName="bg-transparency-06"
      className={modalScreenWrapperClassName}
      onTouchEnd={e => {
        if (e.target !== e.currentTarget) return;
        closeModal();
      }}
      style={{ paddingBottom: top }}
    >
      <View className={modalContainerClassName}>
        <View
          className="overflow-hidden rounded-[1.25rem]"
          style={{ boxShadow: shadowStyleList.float }}
        >
          {children}
        </View>
      </View>
    </ScreenWrapper>
  );
}
