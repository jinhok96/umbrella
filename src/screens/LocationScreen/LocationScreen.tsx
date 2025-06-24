import { useState } from 'react';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Section from '@components/section/Section';
import SectionPartition from '@components/section/SectionPartition';
import Show from '@components/wrapper/Show';
import { ROOT_NAVIGATION_TEST_ID_LIST } from '@navigation/root/RootNavigation.const';
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
      />
      <SectionPartition />
      <KeyboardAwareScrollView className="flex-1">
        <Show when={!!inputValue}>
          <Section label={{ ko: '검색 결과', en: 'Search Result' }} />
          <SectionPartition />
        </Show>
        <Show when={!inputValue && isInputFocused}>
          <Section label={{ ko: '최근 검색한 위치', en: 'Recent Search' }} />
          <SectionPartition />
        </Show>
        <Show when={!inputValue}>
          <Show when={!isInputFocused}>
            <Section label={{ ko: '현재 위치', en: 'Current Location' }} />
            <SectionPartition />
          </Show>
          <Section label={{ ko: '저장한 위치', en: 'Bookmark' }} />
        </Show>
      </KeyboardAwareScrollView>
    </LocationScreenWrapper>
  );
}
