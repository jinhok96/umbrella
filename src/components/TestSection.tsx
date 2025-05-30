import type { PropsWithChildren } from 'react';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Button from '@components/button/Button';
import EmptyContent from '@components/emptyContent/EmptyContent';
import MontserratText from '@components/fontText/MontserratText';
import PretendardText from '@components/fontText/PretendardText';
import CalenderIcon from '@components/icon/CalenderIcon';
import CaretIcon from '@components/icon/CaretIcon';
import CheckIcon from '@components/icon/CheckIcon';
import ChecklistLongSleeveIcon from '@components/icon/checklist/ChecklistLongSleeveIcon';
import ChecklistMaskIcon from '@components/icon/checklist/ChecklistMaskIcon';
import ChecklistSuncreamIcon from '@components/icon/checklist/ChecklistSuncreamIcon';
import ChecklistUmbrellaIcon from '@components/icon/checklist/ChecklistUmbrellaIcon';
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
import ToggleInput from '@components/toggleInput/ToggleInput';
import { useSettingStore } from '@store/settingStore/useSettingStore';

function FlexSection({ children }: PropsWithChildren) {
  return <View className="flex h-fit flex-row items-center gap-1 border-b py-1">{children}</View>;
}

function FontSection({ children }: PropsWithChildren) {
  return <View className="border-b">{children}</View>;
}

function ButtonSection() {
  const { navigate } = useNavigation();
  const setTheme = useSettingStore(state => state.setTheme);
  const setLang = useSettingStore(state => state.setLang);

  return (
    <>
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
      <View className="flex flex-row justify-between border-b">
        <Pressable
          className="w-1/2 border bg-morning"
          onPress={() => setLang('ko')}
        >
          <PretendardText
            className="text-center"
            typo="button-1"
          >
            Korean
          </PretendardText>
        </Pressable>
        <Pressable
          className="w-1/2 border bg-error"
          onPress={() => setLang('en')}
        >
          <PretendardText
            className="text-center"
            typo="button-1"
          >
            English
          </PretendardText>
        </Pressable>
      </View>
      <View className="flex flex-row justify-between border-b">
        <Pressable
          className="w-full border bg-success"
          onPress={() => navigate('Modal')}
        >
          <PretendardText
            className="text-center"
            typo="button-1"
          >
            Modal
          </PretendardText>
        </Pressable>
      </View>
    </>
  );
}

export default function TestSection() {
  const theme = useSettingStore(state => state.theme);
  const [value, onValueChange] = useState(false);

  return (
    <View>
      <Text className="border-b text-xl">Theme: {theme} (System Default)</Text>
      <ButtonSection />
      <FlexSection>
        <ToggleInput
          type="radio"
          size="sm"
          value={value}
          onChange={onValueChange}
          text="Content"
        />
        <ToggleInput
          type="checkbox"
          size="sm"
          value={value}
          onChange={onValueChange}
          text="Content"
        />
        <ToggleInput
          type="toggle"
          size="sm"
          value={value}
          onChange={onValueChange}
          text="Content"
        />
      </FlexSection>
      <FlexSection>
        <ToggleInput
          type="radio"
          size="lg"
          value={value}
          onChange={onValueChange}
          text="Content"
        />
        <ToggleInput
          type="checkbox"
          size="lg"
          value={value}
          onChange={onValueChange}
          text="Content"
        />
        <ToggleInput
          type="toggle"
          size="lg"
          value={value}
          onChange={onValueChange}
          text="Content"
        />
      </FlexSection>
      <FlexSection>
        <ToggleInput
          type="radio"
          size="lg"
          value={value}
          onChange={onValueChange}
          text="Content"
          disabled
        />
        <ToggleInput
          type="checkbox"
          size="lg"
          value={value}
          onChange={onValueChange}
          text="Content"
          disabled
        />
        <ToggleInput
          type="toggle"
          size="lg"
          value={value}
          onChange={onValueChange}
          text="Content"
          disabled
        />
      </FlexSection>
      <EmptyContent title="Title" />
      <EmptyContent subTitle="SubTitle" />
      <EmptyContent
        title="Title"
        subTitle="Subtitle"
      />
      <EmptyContent icon={<EmptyIcon />} />
      <EmptyContent
        icon={<EmptyIcon />}
        title="Title"
      />
      <EmptyContent
        icon={<EmptyIcon />}
        subTitle="SubTitle"
      />
      <EmptyContent
        icon={<EmptyIcon />}
        title="Title"
        subTitle="Subtitle"
      />
      <EmptyContent
        icon={<EmptyIcon />}
        buttonProps={{ text: 'Button' }}
      />
      <EmptyContent
        icon={<EmptyIcon />}
        title="Title"
        buttonProps={{ text: 'Button' }}
      />
      <EmptyContent
        icon={<EmptyIcon />}
        subTitle="SubTitle"
        buttonProps={{ text: 'Button' }}
      />
      <EmptyContent
        icon={<EmptyIcon />}
        title="Title"
        subTitle="Subtitle"
        buttonProps={{ text: 'Button' }}
      />
      <FlexSection>
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
      </FlexSection>
      <FlexSection>
        <Button
          text="Primary"
          size="sm"
          variant="primary"
          icon={color => <CalenderIcon color={color} />}
        />
        <Button
          text="Black"
          size="sm"
          variant="black"
          icon={color => <CalenderIcon color={color} />}
        />
        <Button
          text="GrayOutline"
          size="sm"
          variant="grayOutline"
          icon={color => <CalenderIcon color={color} />}
        />
        <Button
          text="Error"
          size="sm"
          variant="error"
          icon={color => <CalenderIcon color={color} />}
        />
      </FlexSection>
      <FlexSection>
        <Button
          text="Primary"
          size="md"
          variant="primary"
          icon={color => <CalenderIcon color={color} />}
        />
        <Button
          text="Black"
          size="md"
          variant="black"
          icon={color => <CalenderIcon color={color} />}
        />
        <Button
          text="GrayOutline"
          size="md"
          variant="grayOutline"
          icon={color => <CalenderIcon color={color} />}
        />
        <Button
          text="Error"
          size="md"
          variant="error"
          icon={color => <CalenderIcon color={color} />}
        />
      </FlexSection>
      <FlexSection>
        <Button
          text="Primary"
          size="lg"
          variant="primary"
          icon={color => <CalenderIcon color={color} />}
        />
        <Button
          text="Black"
          size="lg"
          variant="black"
          icon={color => <CalenderIcon color={color} />}
        />
        <Button
          text="GrayOutline"
          size="lg"
          variant="grayOutline"
          icon={color => <CalenderIcon color={color} />}
        />
        <Button
          text="Error"
          size="lg"
          variant="error"
          icon={color => <CalenderIcon color={color} />}
        />
      </FlexSection>
      <FlexSection>
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
          <HelpCircleIcon pressed />
        </View>
      </FlexSection>
      <FlexSection>
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
      </FlexSection>
      <FlexSection>
        <View className="size-10">
          <ChecklistLongSleeveIcon />
        </View>
        <View className="size-10">
          <ChecklistMaskIcon />
        </View>
        <View className="size-10">
          <ChecklistSuncreamIcon />
        </View>
        <View className="size-10">
          <ChecklistUmbrellaIcon />
        </View>
      </FlexSection>
      <FontSection>
        <PretendardText
          typo="title-1"
          className="text-text-01"
        >
          Pretendard Title1
        </PretendardText>
        <PretendardText
          typo="title-2"
          className="text-text-01"
        >
          Pretendard Title2
        </PretendardText>
        <PretendardText
          typo="title-3"
          className="text-text-01"
        >
          Pretendard Title3
        </PretendardText>
        <PretendardText
          typo="title-4"
          className="text-text-01"
        >
          Pretendard Title4
        </PretendardText>
        <PretendardText
          typo="title-5"
          className="text-text-01"
        >
          Pretendard Title5
        </PretendardText>
        <PretendardText
          typo="body-1"
          className="text-text-01"
        >
          Pretendard Body1
        </PretendardText>
        <PretendardText
          typo="body-2"
          className="text-text-01"
        >
          Pretendard Body2
        </PretendardText>
        <PretendardText
          typo="body-3"
          className="text-text-01"
        >
          Pretendard Body3
        </PretendardText>
        <PretendardText
          typo="body-4"
          className="text-text-01"
        >
          Pretendard Body4
        </PretendardText>
        <PretendardText
          typo="caption-1"
          className="text-text-01"
        >
          Pretendard Caption1
        </PretendardText>
        <PretendardText
          typo="caption-2"
          className="text-text-01"
        >
          Pretendard Caption2
        </PretendardText>
        <PretendardText
          typo="caption-3"
          className="text-text-01"
        >
          Pretendard Caption3
        </PretendardText>
        <PretendardText
          typo="caption-4"
          className="text-text-01"
        >
          Pretendard Caption4
        </PretendardText>
        <PretendardText
          typo="button-1"
          className="text-text-01"
        >
          Pretendard Button1
        </PretendardText>
        <PretendardText
          typo="button-2"
          className="text-text-01"
        >
          Pretendard Button2
        </PretendardText>
      </FontSection>
      <FontSection>
        <MontserratText
          typo="title-1"
          className="text-text-01"
        >
          Montserrat Title1
        </MontserratText>
        <MontserratText
          typo="title-2"
          className="text-text-01"
        >
          Montserrat Title2
        </MontserratText>
        <MontserratText
          typo="title-3"
          className="text-text-01"
        >
          Montserrat Title3
        </MontserratText>
        <MontserratText
          typo="title-4"
          className="text-text-01"
        >
          Montserrat Title4
        </MontserratText>
        <MontserratText
          typo="title-5"
          className="text-text-01"
        >
          Montserrat Title5
        </MontserratText>
        <MontserratText
          typo="body-1"
          className="text-text-01"
        >
          Montserrat Body1
        </MontserratText>
        <MontserratText
          typo="body-2"
          className="text-text-01"
        >
          Montserrat Body2
        </MontserratText>
        <MontserratText
          typo="body-3"
          className="text-text-01"
        >
          Montserrat Body3
        </MontserratText>
        <MontserratText
          typo="body-4"
          className="text-text-01"
        >
          Montserrat Body4
        </MontserratText>
        <MontserratText
          typo="caption-1"
          className="text-text-01"
        >
          Montserrat Caption1
        </MontserratText>
        <MontserratText
          typo="caption-2"
          className="text-text-01"
        >
          Montserrat Caption2
        </MontserratText>
        <MontserratText
          typo="caption-3"
          className="text-text-01"
        >
          Montserrat Caption3
        </MontserratText>
        <MontserratText
          typo="caption-4"
          className="text-text-01"
        >
          Montserrat Caption4
        </MontserratText>
        <MontserratText
          typo="button-1"
          className="text-text-01"
        >
          Montserrat Button1
        </MontserratText>
        <MontserratText
          typo="button-2"
          className="text-text-01"
        >
          Montserrat Button2
        </MontserratText>
      </FontSection>
      <ButtonSection />
    </View>
  );
}
