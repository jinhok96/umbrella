import React from 'react';
import { Text } from 'react-native';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import ColorThemeProvider from '@components/common/ColorThemeProvider';
import Section from '@components/Section';
import TestSection from '@components/TestSection';

import './global.css';
import './reanimatedSetting';

const queryClient = new QueryClient();

export default function App(): React.JSX.Element {
  return (
    <ColorThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TestSection />
        <Section title="Step One">
          Edit <Text>App.tsx</Text> to change this screen and then come back to see your edits.
        </Section>
      </QueryClientProvider>
    </ColorThemeProvider>
  );
}
