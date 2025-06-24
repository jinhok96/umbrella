import { useState } from 'react';
import { ScrollView } from 'react-native';

import Section from '@components/section/Section';
import SectionPartition from '@components/section/SectionPartition';
import Show from '@components/wrapper/Show';
import { ROOT_NAVIGATION_TEST_ID_LIST } from '@navigation/root/RootNavigation.const';
import CurrentLocationSection from '@screens/LocationScreen/_components/locationItem/CurrentLocationSection';
import FavoriteLocationSection from '@screens/LocationScreen/_components/locationItem/FavoriteLocationSection';
import RecentSearchLocationSection from '@screens/LocationScreen/_components/locationItem/RecentSearchLocationSection';
import LocationScreenWrapper from '@screens/LocationScreen/_components/LocationScreenWrapper';
import LocationSearchHeader from '@screens/LocationScreen/_components/LocationSearchHeader';

export default function LocationScreen() {
  const [inputValue, onChangeText] = useState('');
  const [hasInputFocused, setHasInputFocused] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <LocationScreenWrapper testID={ROOT_NAVIGATION_TEST_ID_LIST.Location}>
      <LocationSearchHeader
        value={inputValue}
        onChangeText={onChangeText}
        onFocus={() => {
          setHasInputFocused(true);
          setIsInputFocused(true);
        }}
        onBlur={() => setIsInputFocused(false)}
      />
      <SectionPartition />
      <ScrollView>
        <Show when={!!inputValue}>
          <Section label={{ ko: '검색 결과', en: 'Search Result' }} />
        </Show>
        <Show when={!inputValue}>
          <Show when={hasInputFocused}>
            <RecentSearchLocationSection />
          </Show>
          <Show when={!hasInputFocused}>
            <CurrentLocationSection />
          </Show>
        </Show>
        <Show when={!isInputFocused}>
          <SectionPartition />
          <FavoriteLocationSection />
        </Show>
      </ScrollView>
    </LocationScreenWrapper>
  );
}
