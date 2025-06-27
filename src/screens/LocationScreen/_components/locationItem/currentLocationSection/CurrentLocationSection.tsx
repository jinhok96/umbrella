import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import EmptyContent from '@components/emptyContent/EmptyContent';
import Section from '@components/section/Section';
import Show from '@components/wrapper/Show';
import CurrentLocationSectionItem from '@screens/LocationScreen/_components/locationItem/currentLocationSection/CurrentLocationSectionItem';
import { useForecastsStore } from '@store/forecastsStore/useForecastsStore';
import { useLocationStore } from '@store/locationStore/useLocationStore';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { SectionProps } from '@components/section/Section.type';
import type { LocalizedText } from '@libs/utils/localize/localize.type';

const PLACEHOLDER: LocalizedText = {
  ko: '현재 위치 정보를 가져오지 못했습니다.',
  en: 'Failed to get current location information.',
};

const LABEL: LocalizedText = {
  ko: '현재 위치',
  en: 'Current',
};

type CurrentLocationSectionProps = Omit<SectionProps, 'children' | 'label' | 'className'>;

function Placeholder() {
  const lang = useSettingStore(state => state.lang);

  return (
    <View className="flex h-14 items-center justify-center">
      <EmptyContent subTitle={PLACEHOLDER[lang]} />
    </View>
  );
}

export default function CurrentLocationSection({ ...props }: CurrentLocationSectionProps) {
  const currentLocation = useLocationStore(state => state.currentLocation);
  const currentWeather = useForecastsStore(state => state.current);
  const navigation = useNavigation();

  const handleItemPress = () => {
    navigation.goBack();
  };

  return (
    <Section
      {...props}
      label={LABEL}
    >
      <Show
        when={!!currentLocation || !currentWeather}
        fallback={<Placeholder />}
      >
        <CurrentLocationSectionItem
          label={currentLocation!.name}
          subLabel={currentLocation!.address}
          temp={Math.round(currentWeather!.temp)}
          icon={currentWeather!.weather[0].icon}
          onPress={handleItemPress}
        />
      </Show>
    </Section>
  );
}
