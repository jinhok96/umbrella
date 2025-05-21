import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import ColorThemeProvider from '@components/common/ColorThemeProvider';
import Section from '@components/Section';
import MontserratText from '@components/text/MontserratText';
import PretendardText from '@components/text/PretendardText';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import './global.css';
import './reanimatedSetting';

const queryClient = new QueryClient();

export default function App(): React.JSX.Element {
  const theme = useSettingStore(state => state.theme);
  const setTheme = useSettingStore(state => state.setTheme);

  return (
    <ColorThemeProvider>
      <QueryClientProvider client={queryClient}>
        <View className="bg-test">
          <Text className="text-xl">Theme: {theme} (System Default)</Text>
          <View className="border">
            <PretendardText className="text-xl">Theme: {theme} (Pretendard Regular)</PretendardText>
            <PretendardText
              className="text-xl"
              weight="medium"
            >
              Theme: {theme} (Pretendard Medium)
            </PretendardText>
            <PretendardText
              className="text-xl"
              weight="semibold"
            >
              Theme: {theme} (Pretendard SemiBold)
            </PretendardText>
            <PretendardText
              className="text-xl"
              weight="bold"
            >
              Theme: {theme} (Pretendard Bold)
            </PretendardText>
            <MontserratText className="text-xl">Theme: {theme} (Montserrat Regular)</MontserratText>
            <MontserratText
              className="text-xl"
              weight="medium"
            >
              Theme: {theme} (Montserrat Medium)
            </MontserratText>
            <MontserratText
              className="text-xl"
              weight="semibold"
            >
              Theme: {theme} (Montserrat SemiBold)
            </MontserratText>
            <MontserratText
              className="text-xl"
              weight="bold"
            >
              Theme: {theme} (Montserrat Bold)
            </MontserratText>
          </View>
          <View className="border">
            <PretendardText
              className="text-title-1"
              weight="bold"
            >
              Title1
            </PretendardText>
            <PretendardText
              className="text-title-2"
              weight="bold"
            >
              Title2
            </PretendardText>
            <PretendardText
              className="text-title-3"
              weight="bold"
            >
              Title3
            </PretendardText>
            <PretendardText
              className="text-title-4"
              weight="bold"
            >
              Title4
            </PretendardText>
            <PretendardText
              className="text-title-5"
              weight="bold"
            >
              Title5
            </PretendardText>
            <PretendardText className="text-body-1">Body1</PretendardText>
            <PretendardText className="text-body-2">Body2</PretendardText>
            <PretendardText className="text-body-3">Body3</PretendardText>
            <PretendardText className="text-body-4">Body4</PretendardText>
            <PretendardText
              className="text-caption-1"
              weight="medium"
            >
              Caption1
            </PretendardText>
            <PretendardText
              className="text-caption-2"
              weight="medium"
            >
              Caption2
            </PretendardText>
            <PretendardText
              className="text-caption-3"
              weight="medium"
            >
              Caption3
            </PretendardText>
            <PretendardText
              className="text-caption-4"
              weight="medium"
            >
              Caption4
            </PretendardText>
            <PretendardText
              className="text-button-1"
              weight="semibold"
            >
              Button1
            </PretendardText>
            <PretendardText
              className="text-button-2"
              weight="semibold"
            >
              Button2
            </PretendardText>
          </View>
          <View className="border">
            <Pressable onPress={() => setTheme('light')}>
              <PretendardText className="text-2xl">Change Theme Light</PretendardText>
            </Pressable>
            <Pressable onPress={() => setTheme('dark')}>
              <PretendardText className="text-2xl">Change Theme Dark</PretendardText>
            </Pressable>
            <Pressable onPress={() => setTheme('highContrast')}>
              <PretendardText className="text-2xl">Change Theme HighContrast</PretendardText>
            </Pressable>
          </View>
          <Section title="Step One">
            Edit <Text>App.tsx</Text> to change this screen and then come back to see your edits.
          </Section>
        </View>
      </QueryClientProvider>
    </ColorThemeProvider>
  );
}
