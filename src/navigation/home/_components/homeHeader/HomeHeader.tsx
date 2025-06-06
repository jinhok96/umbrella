import { Pressable, StatusBar, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import classNames from 'classnames';

import PressableHitSlop from '@components/button/PressableHitSlop';
import PretendardText from '@components/fontText/PretendardText';
import CaretIcon from '@components/icon/CaretIcon';
import SettingIcon from '@components/icon/SettingIcon';
import {
  HOME_HEADER_TEST_ID_LIST,
  LocationNamePlaceholder,
} from '@navigation/home/_components/homeHeader/HomeHeader.const';
import { useLocationStore } from '@store/locationStore/useLocationStore';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { RouteName } from '@libs/types/navigation.type';

export default function HomeHeader() {
  const navigation = useNavigation();
  const currentLocation = useLocationStore(state => state.currentLocation);
  const lang = useSettingStore(state => state.lang);
  const theme = useSettingStore(state => state.theme);

  const locationName = currentLocation?.name || LocationNamePlaceholder[lang];

  const handleNavigateLocationScreenButtonPress = () => {
    navigation.navigate('Location');
  };

  const handleNavigateSettingScreenButtonPress = () => {
    navigation.navigate('Setting');
  };

  const currentRouteIndex = navigation.getState()?.routes[0].state?.index || 0;
  const currentRouteName: RouteName =
    (navigation.getState()?.routes[0].state?.routeNames?.[currentRouteIndex] as RouteName) || 'CurrentForecast';
  const isCurrentForecast = currentRouteName === 'CurrentForecast';

  const textColorClassName = classNames(isCurrentForecast && 'text-white', !isCurrentForecast && 'text-text-01');

  const iconColorLightClassName = classNames(
    'absolute transition-opacity',
    isCurrentForecast && 'opacity-100',
    !isCurrentForecast && 'opacity-0',
  );

  const iconColorDarkClassName = classNames(
    'absolute transition-opacity',
    isCurrentForecast && 'opacity-0',
    !isCurrentForecast && 'opacity-100',
  );

  return (
    <View className="pt-safe-offset-4 absolute top-0 flex w-full flex-row items-center justify-between bg-transparent px-5 pb-4">
      <StatusBar barStyle={isCurrentForecast || theme !== 'light' ? 'light-content' : 'dark-content'} />
      {/* 현재 위치 버튼 */}
      <Pressable
        testID={HOME_HEADER_TEST_ID_LIST.navigateLocationScreenButton}
        className="flex flex-row items-center gap-2"
        onPress={handleNavigateLocationScreenButtonPress}
      >
        <PretendardText
          typo="title-3"
          className={textColorClassName}
        >
          {locationName}
        </PretendardText>
        <View className="relative size-3">
          <View className={`size-3 ${iconColorLightClassName}`}>
            <CaretIcon color="--color-white" />
          </View>
          <View className={`size-3 ${iconColorDarkClassName}`}>
            <CaretIcon color="--color-text-01" />
          </View>
        </View>
      </Pressable>
      {/* 설정 버튼 */}
      <PressableHitSlop
        testID={HOME_HEADER_TEST_ID_LIST.navigateSettingScreenButton}
        className="relative size-6"
        onPress={handleNavigateSettingScreenButtonPress}
      >
        <View className={`size-6 ${iconColorLightClassName}`}>
          <SettingIcon color="--color-white" />
        </View>
        <View className={`size-6 ${iconColorDarkClassName}`}>
          <SettingIcon color="--color-text-06" />
        </View>
      </PressableHitSlop>
    </View>
  );
}
