import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import ColorThemeProvider from '@components/wrapper/ColorThemeProvider';
import StyledNavigationContainer from '@navigation/_components/styledNavigationContainer/StyledNavigationContainer';
import { RootNavigation } from '@navigation/root/RootNavigation';

import './global.css';
import './reanimatedSetting';

const queryClient = new QueryClient();

export default function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <StyledNavigationContainer>
          <ColorThemeProvider>
            <RootNavigation />
          </ColorThemeProvider>
        </StyledNavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
