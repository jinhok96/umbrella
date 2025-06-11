import { View } from 'react-native';

import classNames from 'classnames';

import type { HomeScreenHeaderWrapperProps } from '@screens/HomeScreen/_components/homeScreenHeaderWrapper/HomeScreenHeaderWrapper.type';

/**
 * 홈스크린 헤더 컴포넌트 래퍼
 * @jinhok96 25.06.11
 */
export default function HomeScreenHeaderWrapper({ children, className, ...props }: HomeScreenHeaderWrapperProps) {
  const wrapperClassName = classNames('pt-safe-offset-14', className);

  return (
    <View
      {...props}
      className={wrapperClassName}
    >
      {children}
    </View>
  );
}
