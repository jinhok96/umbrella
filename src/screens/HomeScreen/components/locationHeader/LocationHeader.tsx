import { Pressable, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import HitSlopPressable from '@components/common/HitSlopPressable';
import CaretIcon from '@components/icon/CaretIcon';
import SettingIcon from '@components/icon/SettingIcon';
import PretendardText from '@components/text/PretendardText';
import { LocationNamePlaceholder } from '@screens/HomeScreen/components/locationHeader/LocationHeader.const';
import { useLocationStore } from '@store/locationStore/useLocationStore';
import { useSettingStore } from '@store/settingStore/useSettingStore';

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
        testID="navigate-location-screen-button"
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
        testID="navigate-setting-screen-button"
        className="size-6"
        onPress={handleSettingScreenButtonPress}
      >
        <SettingIcon color="--color-white" />
      </HitSlopPressable>
    </View>
  );
}
