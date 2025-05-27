import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import type { NavigationContainerProps } from '@react-navigation/native';

type StyledNavigationContainerProps = Omit<NavigationContainerProps, 'theme'>;

/**
 * 스타일이 적용된 `NavigationContainer` 컴포넌트
 * @jinhok96 25.05.25
 */
export default function StyledNavigationContainer({ children, ...props }: StyledNavigationContainerProps) {
  return (
    <NavigationContainer
      {...props}
      theme={{
        ...DefaultTheme,
        dark: false,
        colors: { ...DefaultTheme.colors, background: 'transparent' },
      }}
    >
      {children}
    </NavigationContainer>
  );
}
