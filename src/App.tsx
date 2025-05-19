import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, View, useColorScheme } from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Section from '@components/Section';

import './global.css';

const queryClient = new QueryClient();

export default function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const safePadding = '5%';

  return (
    <QueryClientProvider client={queryClient}>
      <View style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView style={backgroundStyle}>
          <View style={{ paddingRight: safePadding }}>
            <Header />
          </View>
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
              paddingHorizontal: safePadding,
              paddingBottom: safePadding,
            }}>
            <Section title="Step One">
              Edit <Text style={styles.highlight}>App.tsx</Text> to change this screen and then come back to see your
              edits.
            </Section>
            <Section title="See Your Changes">
              <ReloadInstructions />
            </Section>
            <Section title="Debug">
              <DebugInstructions />
            </Section>
            <Section title="Learn More">Read the docs to discover what to do next:</Section>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});
