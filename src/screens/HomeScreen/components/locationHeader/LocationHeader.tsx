import { Pressable, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import HitSlopPressable from '@components/common/HitSlopPressable';
import CaretIcon from '@components/icon/CaretIcon';
import SettingIcon from '@components/icon/SettingIcon';
import PretendardText from '@components/text/PretendardText';
import { useLocationStore } from '@store/locationStore/useLocationStore';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { LocalizedText } from '@libs/utils/localize/localize.type';

const LocationNamePlaceholder: LocalizedText = {
  ko: '위치를 선택해주세요',
  en: 'Select location',
};

export default function LocationHeader() {
  const { navigate } = useNavigation();
  const currentLocation = useLocationStore(state => state.currentLocation);
  const lang = useSettingStore(state => state.lang);

  const locationName = currentLocation?.name || LocationNamePlaceholder[lang];

  const handleLocationScreenButtonPress = () => navigate('Location');
  const handleSettingScreenButtonPress = () => navigate('Setting');

  return (
    <View className="flex w-full flex-row items-center justify-between px-5 py-4">
      <Pressable
        className="flex flex-row items-center gap-1"
        onPress={handleLocationScreenButtonPress}
      >
        <PretendardText
          typo="title-3"
          className="text-white"
        >
          {locationName}
        </PretendardText>
        <View className="size-3">
          <CaretIcon color="--color-white" />
        </View>
      </Pressable>
      <HitSlopPressable
        className="size-6"
        onPress={handleSettingScreenButtonPress}
      >
        <SettingIcon color="--color-white" />
      </HitSlopPressable>
    </View>
  );
}
