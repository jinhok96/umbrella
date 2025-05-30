import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import { navigationRef } from '@navigation/_components/styledNavigationContainer/StyledNavigationContainer.const';
import { useRouteStore } from '@store/routeStore/useRouteStore';

import type { RouteName } from '@libs/types/navigation.type';
import type { NavigationContainerProps } from '@react-navigation/native';

type StyledNavigationContainerProps = Omit<NavigationContainerProps, 'theme'>;

/**
 * `NavigationContainer` 대체 컴포넌트
 * @jinhok96 25.05.30
 */
export default function StyledNavigationContainer({ children, ...props }: StyledNavigationContainerProps) {
  const setIsReady = useRouteStore(state => state.setIsReady);
  const setCurrentRouteName = useRouteStore(state => state.setCurrentRouteName);

  return (
    <>
      <NavigationContainer
        {...props}
        theme={{
          ...DefaultTheme,
          dark: false,
          colors: { ...DefaultTheme.colors, background: 'transparent' },
        }}
        onReady={() => {
          setIsReady(true);
          setCurrentRouteName('Home');
        }}
        onStateChange={state => setCurrentRouteName(state?.routeNames[state.index] as RouteName)}
        ref={navigationRef}
      >
        {children}
      </NavigationContainer>
    </>
  );
}
