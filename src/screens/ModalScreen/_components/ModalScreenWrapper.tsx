import { useEffect, useState } from 'react';
import { View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { shadowStyleList } from '@libs/utils/themes.util';
import ScreenWrapper from '@navigation/_components/screenWrapper/ScreenWrapper';
import { useModalStore } from '@store/modalStore/useModalStore';

import type { ScreenWrapperProps } from '@navigation/_components/screenWrapper/ScreenWrapper.type';

export default function ModalScreenWrapper({ children, ...props }: ScreenWrapperProps) {
  const closeModal = useModalStore(state => state.closeModal);
  const isOpened = useModalStore(state => state.isOpened);
  const { top } = useSafeAreaInsets();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(isOpened);
    }, 0);
  }, [isOpened]);

  return (
    <ScreenWrapper
      {...props}
      backgroundClassName="bg-transparency-05"
      className="flex-1 items-center justify-center border-4"
      onTouchEnd={e => {
        if (e.target !== e.currentTarget) return;
        closeModal();
      }}
      style={{ paddingBottom: top }}
    >
      <View
        className={`size-fit overflow-hidden rounded-[1.25rem] transition-[bottom,opacity] ${animate ? 'bottom-0 opacity-100' : '-bottom-1/4 opacity-0'}`}
        style={{ boxShadow: shadowStyleList.float }}
      >
        {children}
      </View>
    </ScreenWrapper>
  );
}
