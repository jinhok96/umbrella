import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import KeyboardDismissGesture from '@components/gesture/KeyboardDismissGesture';
import ToastContainer from '@components/toast/ToastContainer';
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
          <GestureHandlerRootView>
            <KeyboardDismissGesture>
              <ColorThemeProvider>
                <RootNavigation />
                <ToastContainer />
              </ColorThemeProvider>
            </KeyboardDismissGesture>
          </GestureHandlerRootView>
        </StyledNavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
