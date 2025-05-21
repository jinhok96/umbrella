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
            <PretendardText typo="body-1">Theme: {theme} (Pretendard Regular)</PretendardText>
            <PretendardText typo="caption-1">Theme: {theme} (Pretendard Medium)</PretendardText>
            <PretendardText typo="button-1">Theme: {theme} (Pretendard SemiBold)</PretendardText>
            <PretendardText typo="title-4">Theme: {theme} (Pretendard Bold)</PretendardText>
            <MontserratText typo="body-1">Theme: {theme} (Montserrat Regular)</MontserratText>
            <MontserratText typo="caption-1">Theme: {theme} (Montserrat Medium)</MontserratText>
            <MontserratText typo="button-1">Theme: {theme} (Montserrat SemiBold)</MontserratText>
            <MontserratText typo="title-4">Theme: {theme} (Montserrat Bold)</MontserratText>
          </View>
          <View className="border">
            <PretendardText typo="title-1">Pretendard Title1</PretendardText>
            <PretendardText typo="title-2">Pretendard Title2</PretendardText>
            <PretendardText typo="title-3">Pretendard Title3</PretendardText>
            <PretendardText typo="title-4">Pretendard Title4</PretendardText>
            <PretendardText typo="title-5">Pretendard Title5</PretendardText>
            <PretendardText typo="body-1">Pretendard Body1</PretendardText>
            <PretendardText typo="body-2">Pretendard Body2</PretendardText>
            <PretendardText typo="body-3">Pretendard Body3</PretendardText>
            <PretendardText typo="body-4">Pretendard Body4</PretendardText>
            <PretendardText typo="caption-1">Pretendard Caption1</PretendardText>
            <PretendardText typo="caption-2">Pretendard Caption2</PretendardText>
            <PretendardText typo="caption-3">Pretendard Caption3</PretendardText>
            <PretendardText typo="caption-4">Pretendard Caption4</PretendardText>
            <PretendardText typo="button-1">Pretendard Button1</PretendardText>
            <PretendardText typo="button-2">Pretendard Button2</PretendardText>
          </View>
          <View className="border">
            <MontserratText typo="title-1">Montserrat Title1</MontserratText>
            <MontserratText typo="title-2">Montserrat Title2</MontserratText>
            <MontserratText typo="title-3">Montserrat Title3</MontserratText>
            <MontserratText typo="title-4">Montserrat Title4</MontserratText>
            <MontserratText typo="title-5">Montserrat Title5</MontserratText>
            <MontserratText typo="body-1">Montserrat Body1</MontserratText>
            <MontserratText typo="body-2">Montserrat Body2</MontserratText>
            <MontserratText typo="body-3">Montserrat Body3</MontserratText>
            <MontserratText typo="body-4">Montserrat Body4</MontserratText>
            <MontserratText typo="caption-1">Montserrat Caption1</MontserratText>
            <MontserratText typo="caption-2">Montserrat Caption2</MontserratText>
            <MontserratText typo="caption-3">Montserrat Caption3</MontserratText>
            <MontserratText typo="caption-4">Montserrat Caption4</MontserratText>
            <MontserratText typo="button-1">Montserrat Button1</MontserratText>
            <MontserratText typo="button-2">Montserrat Button2</MontserratText>
          </View>
          <View className="border">
            <Pressable onPress={() => setTheme('light')}>
              <PretendardText typo="button-1">Change Theme Light</PretendardText>
            </Pressable>
            <Pressable onPress={() => setTheme('dark')}>
              <PretendardText typo="button-1">Change Theme Dark</PretendardText>
            </Pressable>
            <Pressable onPress={() => setTheme('highContrast')}>
              <PretendardText typo="button-1">Change Theme HighContrast</PretendardText>
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
