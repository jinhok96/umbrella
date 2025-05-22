import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import ColorThemeProvider from '@components/common/ColorThemeProvider';
import CaretIcon from '@components/icon/CaretIcon';
import CheckIcon from '@components/icon/CheckIcon';
import DownArrowIcon from '@components/icon/DownArrowIcon';
import EmptyIcon from '@components/icon/EmptyIcon';
import HelpCircleIcon from '@components/icon/HelpCircleIcon';
import LeftArrowIcon from '@components/icon/LeftArrowIcon';
import LocationIcon from '@components/icon/LocationIcon';
import MenuIcon from '@components/icon/MenuIcon';
import MyLocationIcon from '@components/icon/MyLocationIcon';
import PlusCircleIcon from '@components/icon/PlusCircleIcon';
import RightArrowIcon from '@components/icon/RightArrowIcon';
import SearchIcon from '@components/icon/SearchIcon';
import UpArrowIcon from '@components/icon/UpArrowIcon';
import WeatherIcon from '@components/icon/WeatherIcon';
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
          <Text className="border-b text-xl">Theme: {theme} (System Default)</Text>
          <View className="flex h-fit flex-row items-center border-b">
            <View className="size-6">
              <CheckIcon />
            </View>
            <View className="size-6">
              <MenuIcon />
            </View>
            <View className="size-6">
              <PlusCircleIcon />
            </View>
            <View className="size-6">
              <MyLocationIcon />
            </View>
            <View className="size-6">
              <SearchIcon />
            </View>
            <View className="size-6">
              <LeftArrowIcon />
            </View>
            <View className="size-6">
              <RightArrowIcon />
            </View>
            <View className="size-6">
              <UpArrowIcon />
            </View>
            <View className="size-6">
              <DownArrowIcon />
            </View>
          </View>
          <View className="flex h-fit flex-row items-center border-b">
            <View className="size-6">
              <LocationIcon />
            </View>
            <View className="size-6">
              <LocationIcon filled />
            </View>
            <View className="size-3">
              <CaretIcon />
            </View>
            <View className="size-6">
              <HelpCircleIcon />
            </View>
            <View className="size-6">
              <HelpCircleIcon clicked />
            </View>
          </View>
          <View className="flex h-fit flex-row items-center border-b">
            <View className="size-10">
              <EmptyIcon />
            </View>
            <View className="size-10">
              <WeatherIcon icon="01d" />
            </View>
            <View className="size-10">
              <WeatherIcon icon="02d" />
            </View>
            <View className="size-10">
              <WeatherIcon icon="03d" />
            </View>
            <View className="size-10">
              <WeatherIcon icon="04d" />
            </View>
            <View className="size-10">
              <WeatherIcon icon="09d" />
            </View>
            <View className="size-10">
              <WeatherIcon icon="10d" />
            </View>
            <View className="size-10">
              <WeatherIcon icon="11d" />
            </View>
            <View className="size-10">
              <WeatherIcon icon="13d" />
            </View>
            <View className="size-10">
              <WeatherIcon icon="50d" />
            </View>
          </View>
          <View className="border-b">
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
          <View className="border-b">
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
          <View className="flex flex-row justify-between border-b">
            <Pressable
              className="w-1/3 border bg-morning"
              onPress={() => setTheme('light')}
            >
              <PretendardText
                className="text-center"
                typo="button-1"
              >
                Theme Light
              </PretendardText>
            </Pressable>
            <Pressable
              className="w-1/3 border bg-error"
              onPress={() => setTheme('dark')}
            >
              <PretendardText
                className="text-center"
                typo="button-1"
              >
                Theme Dark
              </PretendardText>
            </Pressable>
            <Pressable
              className="w-1/3 border bg-success"
              onPress={() => setTheme('highContrast')}
            >
              <PretendardText
                className="text-center"
                typo="button-1"
              >
                Theme HighContrast
              </PretendardText>
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
