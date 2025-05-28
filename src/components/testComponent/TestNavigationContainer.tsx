import type { PropsWithChildren } from 'react';

import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';

import { navigationRef } from '@navigation/Navigation';

export default function TestNavigationContainer({ children }: PropsWithChildren) {
  return (
    <NavigationIndependentTree>
      <NavigationContainer ref={navigationRef}>{children}</NavigationContainer>
    </NavigationIndependentTree>
  );
}
