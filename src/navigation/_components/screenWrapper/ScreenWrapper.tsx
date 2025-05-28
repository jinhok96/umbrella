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

  return (
    <View
      {...props}
      className={wrapperClassName}
    >
      {children}
    </View>
  );
}
