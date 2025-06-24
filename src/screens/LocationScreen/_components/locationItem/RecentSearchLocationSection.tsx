import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import EmptyContent from '@components/emptyContent/EmptyContent';
import EmptyIcon from '@components/icon/EmptyIcon';
import Section from '@components/section/Section';
import Show from '@components/wrapper/Show';
import SearchLocationSectionItem from '@screens/LocationScreen/_components/locationItem/SearchLocationSectionItem';
import { useLocationStore } from '@store/locationStore/useLocationStore';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { SectionProps } from '@components/section/Section.type';
import type { LocalizedText } from '@libs/utils/localize/localize.type';
import type { Location } from '@store/locationStore/useLocationStore.type';

const PLACEHOLDER: LocalizedText = {
  ko: '최근 검색한 위치가 없습니다.',
  en: 'There is no recent search location.',
};

type RecentSearchLocationSectionProps = Omit<SectionProps, 'children' | 'label' | 'className'>;

function Placeholder() {
  const lang = useSettingStore(state => state.lang);

  return (
    <View className="flex h-32 items-center justify-center">
      <EmptyContent
        icon={<EmptyIcon />}
        subTitle={PLACEHOLDER[lang]}
      />
    </View>
  );
}

export default function RecentSearchLocationSection({ ...props }: RecentSearchLocationSectionProps) {
  const lang = useSettingStore(state => state.lang);
  const recentLocationList = useLocationStore(state => state.recentLocationList);
  const setCurrentLocation = useLocationStore(state => state.setCurrentLocation);
  const navigation = useNavigation();

  const handleItemPress = (item: Location) => {
    setCurrentLocation(item);
    navigation.goBack();
  };

  return (
    <Section
      {...props}
      label={{ ko: '최근 검색한 위치', en: 'Recent Search' }}
    >
      <Show
        when={!!recentLocationList.length}
        fallback={<Placeholder />}
      >
        {recentLocationList.map(item => (
          <SearchLocationSectionItem
            key={item.id}
            label={item.name}
            subLabel={item.address[lang]}
            location={item}
            onPress={() => handleItemPress(item)}
          />
        ))}
      </Show>
    </Section>
  );
}
