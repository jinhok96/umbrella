import { View } from 'react-native';

import classNames from 'classnames';

import type { ScreenWrapperProps } from '@navigation/_components/screenWrapper/ScreenWrapper.type';

type ScreenWrapperPropsWithBackgroundClassName = ScreenWrapperProps & {
  backgroundClassName: string;
};

export default function ScreenWrapper({
  children,
  className,
  backgroundClassName,
  ...props
}: ScreenWrapperPropsWithBackgroundClassName) {
  const wrapperClassName = classNames('flex-1', backgroundClassName, className);
  const safeBackgroundClassName = classNames('absolute w-full -top-1 -z-50 h-2', backgroundClassName);

  return (
    <View className="relative flex-1">
      {/* 페이지 전환 애니메이션 시 헤더와 본문 사이 발생하는 빈 픽셀을 채우기 위한 배경 */}
      <View className={safeBackgroundClassName} />
      <View
        {...props}
        className={wrapperClassName}
      >
        {children}
      </View>
    </View>
  );
}
