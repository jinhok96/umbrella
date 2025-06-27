import { useState } from 'react';
import { ScrollView, View } from 'react-native';

import SectionPartition from '@components/section/SectionPartition';
import Show from '@components/wrapper/Show';
import { ROOT_NAVIGATION_TEST_ID_LIST } from '@navigation/root/RootNavigation.const';
import CurrentLocationSection from '@screens/LocationScreen/_components/locationItem/currentLocationSection/CurrentLocationSection';
import FavoriteLocationSection from '@screens/LocationScreen/_components/locationItem/favoriteLocationSection/FavoriteLocationSection';
import CurrentSearchResultLocationSection from '@screens/LocationScreen/_components/locationItem/searchResultLocationSection/CurrentSearchResultLocationSection';
import RecentSearchResultLocationSection from '@screens/LocationScreen/_components/locationItem/searchResultLocationSection/RecentSearchResultLocationSection';
import LocationScreenWrapper from '@screens/LocationScreen/_components/LocationScreenWrapper';
import LocationSearchHeader from '@screens/LocationScreen/_components/LocationSearchHeader';

export default function LocationScreen() {
  const [inputValue, onChangeText] = useState('');
  const [hasInputFocused, setHasInputFocused] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <LocationScreenWrapper testID={ROOT_NAVIGATION_TEST_ID_LIST.Location}>
      <ScrollView>
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
        <View className="pb-safe-offset-14">
          <Show when={!!inputValue}>
            <CurrentSearchResultLocationSection input={inputValue} />
          </Show>
          <Show when={!inputValue}>
            <Show when={hasInputFocused}>
              <RecentSearchResultLocationSection />
            </Show>
            <Show when={!hasInputFocused}>
              <CurrentLocationSection />
            </Show>
          </Show>
          <Show when={!isInputFocused}>
            <SectionPartition />
            <FavoriteLocationSection />
          </Show>
        </View>
      </ScrollView>
    </LocationScreenWrapper>
  );
}
