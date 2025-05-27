import type { PropsWithChildren } from 'react';

import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';

export default function TestNavigationContainer({ children }: PropsWithChildren) {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>{children}</NavigationContainer>
    </NavigationIndependentTree>
  );
}
