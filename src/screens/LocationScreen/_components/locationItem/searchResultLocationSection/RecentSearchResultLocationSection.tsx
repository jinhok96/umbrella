import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import EmptyContent from '@components/emptyContent/EmptyContent';
import EmptyIcon from '@components/icon/EmptyIcon';
import Section from '@components/section/Section';
import Show from '@components/wrapper/Show';
import SearchResultLocationSectionItem from '@screens/LocationScreen/_components/locationItem/searchResultLocationSection/SearchResultLocationSectionItem';
import { useLocationStore } from '@store/locationStore/useLocationStore';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { SectionProps } from '@components/section/Section.type';
import type { LocalizedText } from '@libs/utils/localize/localize.type';
import type { Location } from '@store/locationStore/useLocationStore.type';

const LABEL: LocalizedText = { ko: '최근 검색한 위치', en: 'Recent Search' };

const PLACEHOLDER: LocalizedText = {
  ko: '최근 검색한 위치가 없습니다.',
  en: 'There is no recent search location.',
};

type RecentSearchResultLocationSectionProps = Omit<SectionProps, 'children' | 'label' | 'className'>;

/**
 * 플레이스홀더
 * @jinhok96 25.06.27
 */
function Placeholder() {
  const lang = useSettingStore(state => state.lang);

  return (
    <View className="flex items-center justify-center py-10">
      <EmptyContent
        icon={<EmptyIcon />}
        subTitle={PLACEHOLDER[lang]}
      />
    </View>
  );
}

/**
 * 최근 검색한 위치 섹션
 * @jinhok96 25.06.27
 */
export default function RecentSearchResultLocationSection({ ...props }: RecentSearchResultLocationSectionProps) {
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
      label={LABEL}
    >
      <Show
        when={!!recentLocationList.length}
        fallback={<Placeholder />}
      >
        {recentLocationList.map(item => (
          <SearchResultLocationSectionItem
            key={item.id}
            label={item.name}
            subLabel={item.address}
            location={item}
            onPress={() => handleItemPress(item)}
          />
        ))}
      </Show>
    </Section>
  );
}
