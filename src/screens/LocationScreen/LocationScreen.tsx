import { useState } from 'react';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Section from '@components/section/Section';
import SectionPartition from '@components/section/SectionPartition';
import Show from '@components/wrapper/Show';
import { ROOT_NAVIGATION_TEST_ID_LIST } from '@navigation/root/RootNavigation.const';
import CurrentLocationSection from '@screens/LocationScreen/_components/locationItem/CurrentLocationSection';
import FavoriteLocationSection from '@screens/LocationScreen/_components/locationItem/FavoriteLocationSection';
import LocationScreenWrapper from '@screens/LocationScreen/_components/LocationScreenWrapper';
import LocationSearchHeader from '@screens/LocationScreen/_components/LocationSearchHeader';

export default function LocationScreen() {
  const [inputValue, onChangeText] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <LocationScreenWrapper testID={ROOT_NAVIGATION_TEST_ID_LIST.Location}>
      <LocationSearchHeader
        value={inputValue}
        onChangeText={onChangeText}
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
      />
      <SectionPartition />
      <KeyboardAwareScrollView className="flex-1">
        <Show when={!!inputValue}>
          <Section label={{ ko: '검색 결과', en: 'Search Result' }} />
          <SectionPartition />
        </Show>
        <Show when={!inputValue}>
          <Show when={isInputFocused}>
            <Section label={{ ko: '최근 검색한 위치', en: 'Recent Search' }} />
            <SectionPartition />
          </Show>
          <Show when={!isInputFocused}>
            <CurrentLocationSection />
            <SectionPartition />
            <FavoriteLocationSection />
          </Show>
        </Show>
      </KeyboardAwareScrollView>
    </LocationScreenWrapper>
  );
}
