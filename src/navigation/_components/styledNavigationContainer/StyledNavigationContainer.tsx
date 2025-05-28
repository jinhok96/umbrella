import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import { navigationRef } from '@navigation/Navigation';
import WeatherInfoHeader from '@screens/HomeScreen/_components/weatherInfoHeader/WeatherInfoHeader';
import { useRouteStore } from '@store/routeStore/useRouteStore';

import type { RouteName } from '@navigation/Navigation.type';
import type { NavigationContainerProps } from '@react-navigation/native';

type StyledNavigationContainerProps = Omit<NavigationContainerProps, 'theme'>;

/**
 * `NavigationContainer` 대체 컴포넌트
 *
 * `NavigationContainer` 외부 컴포넌트 렌더링
 * @jinhok96 25.05.29
 */
export default function StyledNavigationContainer({ children, ...props }: StyledNavigationContainerProps) {
  const setIsReady = useRouteStore(state => state.setIsReady);
  const setCurrentRouteName = useRouteStore(state => state.setCurrentRouteName);

  return (
    <>
      <WeatherInfoHeader />
      <NavigationContainer
        {...props}
        theme={{
          ...DefaultTheme,
          dark: false,
          colors: { ...DefaultTheme.colors, background: 'transparent' },
        }}
        ref={navigationRef}
        onReady={() => {
          setIsReady(true);
          setCurrentRouteName(navigationRef.getCurrentRoute()?.name);
        }}
        onStateChange={state => setCurrentRouteName(state && (state.routeNames[state.index] as RouteName))}
      >
        {children}
      </NavigationContainer>
    </>
  );
}
