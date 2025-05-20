import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import ColorThemeProvider from '@components/common/ColorThemeProvider';
import Section from '@components/Section';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import './global.css';

const queryClient = new QueryClient();

export default function App(): React.JSX.Element {
  const theme = useSettingStore(state => state.theme);
  const setTheme = useSettingStore(state => state.setTheme);

  return (
    <ColorThemeProvider>
      <QueryClientProvider client={queryClient}>
        <View className="bg-morning">
          <Text className="text-black">Theme: {theme}</Text>
          <Pressable
            className="text-black"
            onPress={() => setTheme('light')}
          >
            <Text>Change Theme Light</Text>
          </Pressable>
          <Pressable
            className="text-black"
            onPress={() => setTheme('dark')}
          >
            <Text>Change Theme Dark</Text>
          </Pressable>
          <Pressable
            className="text-black"
            onPress={() => setTheme('highContrast')}
          >
            <Text>Change Theme HighContrast</Text>
          </Pressable>
          <Section title="Step One">
            Edit <Text>App.tsx</Text> to change this screen and then come back to see your edits.
          </Section>
        </View>
      </QueryClientProvider>
    </ColorThemeProvider>
  );
}
