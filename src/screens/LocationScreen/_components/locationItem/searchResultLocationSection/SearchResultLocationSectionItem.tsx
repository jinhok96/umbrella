import { Pressable } from 'react-native';

import PressableHitSlop from '@components/button/PressableHitSlop';
import CheckCircleIcon from '@components/icon/CheckCircleIcon';
import XCircleIcon from '@components/icon/XCircleIcon';
import Show from '@components/wrapper/Show';
import LocationSectionItemLabel from '@screens/LocationScreen/_components/locationItem/locationSectionItem/LocationSectionItemLabel';
import LocationSectionItemWrapper from '@screens/LocationScreen/_components/locationItem/locationSectionItem/LocationSectionItemWrapper';
import { useLocationStore } from '@store/locationStore/useLocationStore';

import type { SearchResultLocationSectionItemProps } from '@screens/LocationScreen/_components/locationItem/searchResultLocationSection/SearchResultLocationSectionItem.type';

/**
 * `(Current/Recent)SearchResultLocationSection`의 공통 아이템 컴포넌트
 * @param label 라벨
 * @param subLabel 서브 라벨
 * @param location 위치 정보
 * @jinhok96 25.06.27
 */
export default function SearchResultLocationSectionItem({
  label,
  subLabel,
  location,
  ...props
}: SearchResultLocationSectionItemProps) {
  const isFavorite = useLocationStore(state => state.isFavorite(location.id));
  const addFavoriteLocation = useLocationStore(state => state.addFavoriteLocation);
  const removeFavoriteLocationById = useLocationStore(state => state.removeFavoriteLocation);

  const handleFavoriteButtonPress = () => {
    if (isFavorite) return removeFavoriteLocationById(location.id);
    addFavoriteLocation(location);
  };

  return (
    <Pressable {...props}>
      <LocationSectionItemWrapper className="flex flex-row items-center justify-between gap-3">
        {/* 라벨 */}
        <LocationSectionItemLabel
          label={label}
          subLabel={subLabel}
        />
        {/* 버튼 */}
        <PressableHitSlop
          className="size-6"
          onPress={handleFavoriteButtonPress}
        >
          <Show when={isFavorite}>
            <CheckCircleIcon color="--color-morning" />
          </Show>
          <Show when={!isFavorite}>
            <XCircleIcon color="--color-text-01" />
          </Show>
        </PressableHitSlop>
      </LocationSectionItemWrapper>
    </Pressable>
  );
}
