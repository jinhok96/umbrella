import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import EmptyContent from '@components/emptyContent/EmptyContent';
import Section from '@components/section/Section';
import Show from '@components/wrapper/Show';
import FavoriteLocationSectionItem from '@screens/LocationScreen/_components/locationItem/favoriteLocationSection/FavoriteLocationSectionItem';
import { useLocationStore } from '@store/locationStore/useLocationStore';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { SectionProps } from '@components/section/Section.type';
import type { LocalizedText } from '@libs/utils/localize/localize.type';
import type { Location } from '@store/locationStore/useLocationStore.type';

const LABEL: LocalizedText = { ko: '저장한 위치', en: 'Favorite' };

const PLACEHOLDER: LocalizedText = {
  ko: '저장한 위치가 없습니다.',
  en: 'There is no favorite location.',
};

type FavoriteLocationSectionProps = Omit<SectionProps, 'children' | 'label' | 'className'>;

/**
 * 플레이스홀더
 * @jinhok96 25.06.27
 */
function Placeholder() {
  const lang = useSettingStore(state => state.lang);

  return (
    <View className="flex h-32 items-center justify-center">
      <EmptyContent subTitle={PLACEHOLDER[lang]} />
    </View>
  );
}

/**
 * 저장한 위치 섹션
 * @jinhok96 25.06.27
 */
export default function FavoriteLocationSection({ ...props }: FavoriteLocationSectionProps) {
  const currentLocation = useLocationStore(state => state.currentLocation);
  const favoriteLocationList = useLocationStore(state => state.favoriteLocationList);
  const setCurrentLocation = useLocationStore(state => state.setCurrentLocation);
  const navigation = useNavigation();

  const handleItemPress = (item: Location) => {
    setCurrentLocation(item);
    navigation.goBack();
  };

  return (
    <Section
      {...props}
      label={LABEL}
    >
      <Show
        when={!!favoriteLocationList.length}
        fallback={<Placeholder />}
      >
        {favoriteLocationList.map(item => (
          <FavoriteLocationSectionItem
            key={item.id}
            label={item.name}
            subLabel={item.address}
            current={item.id === currentLocation?.id}
            onPress={() => handleItemPress(item)}
          />
        ))}
      </Show>
    </Section>
  );
}
