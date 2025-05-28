import { Pressable, View } from 'react-native';

import PressableHitSlop from '@components/common/PressableHitSlop';
import PretendardText from '@components/fontText/PretendardText';
import CaretIcon from '@components/icon/CaretIcon';
import SettingIcon from '@components/icon/SettingIcon';
import { navigationRef } from '@navigation/Navigation';
import {
  LOCATION_HEADER_TEST_ID_LIST,
  LocationNamePlaceholder,
} from '@screens/HomeScreen/_components/weatherInfoHeader/LocationHeader.const';
import { useLocationStore } from '@store/locationStore/useLocationStore';
import { useRouteStore } from '@store/routeStore/useRouteStore';
import { useSettingStore } from '@store/settingStore/useSettingStore';

export default function LocationHeader() {
  const isReady = useRouteStore(state => state.isReady);
  const currentLocation = useLocationStore(state => state.currentLocation);
  const lang = useSettingStore(state => state.lang);

  const locationName = currentLocation?.name || LocationNamePlaceholder[lang];

  const navigate = () => {
    if (!isReady) return;
    return navigationRef.navigate;
  };

  const handleNavigateLocationScreenButtonPress = () => {
    navigate()?.('Location');
  };

  const handleNavigateSettingScreenButtonPress = () => {
    navigate()?.('Setting');
  };

  return (
    <View className="flex w-full flex-row items-center justify-between px-5 py-4">
      {/* 현재 위치 버튼 */}
      <Pressable
        testID={LOCATION_HEADER_TEST_ID_LIST.navigateLocationScreenButton}
        className="flex flex-row items-center gap-1"
        onPress={handleNavigateLocationScreenButtonPress}
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
      {/* 설정 버튼 */}
      <PressableHitSlop
        testID={LOCATION_HEADER_TEST_ID_LIST.navigateSettingScreenButton}
        className="size-6"
        onPress={handleNavigateSettingScreenButtonPress}
      >
        <SettingIcon color="--color-white" />
      </PressableHitSlop>
    </View>
  );
}
