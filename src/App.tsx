import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import ColorThemeProvider from '@components/common/ColorThemeProvider';
import StyledNavigationContainer from '@navigation/components/StyledNavigationContainer';
import { RootNavigation } from '@navigation/RootNavigation';

import './global.css';
import './reanimatedSetting';

const queryClient = new QueryClient();

export default function App(): React.JSX.Element {
  return (
    <ColorThemeProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <StyledNavigationContainer>
            <RootNavigation />
          </StyledNavigationContainer>
        </SafeAreaProvider>
      </QueryClientProvider>
    </ColorThemeProvider>
  );
}
