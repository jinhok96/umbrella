import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import type { NavigationContainerProps } from '@react-navigation/native';

type StyledNavigationContainerProps = Omit<NavigationContainerProps, 'theme'>;

/**
 * `NavigationContainer` 대체 컴포넌트
 * @jinhok96 25.05.29
 */
export default function StyledNavigationContainer({ children, ...props }: StyledNavigationContainerProps) {
  return (
    <>
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
    </>
  );
}
