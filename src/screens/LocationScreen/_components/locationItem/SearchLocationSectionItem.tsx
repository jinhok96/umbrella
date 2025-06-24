import type { PressableProps } from 'react-native';
import { Pressable } from 'react-native';

import PressableHitSlop from '@components/button/PressableHitSlop';
import CheckCircleIcon from '@components/icon/CheckCircleIcon';
import XCircleIcon from '@components/icon/XCircleIcon';
import Show from '@components/wrapper/Show';
import LocationItemLabel from '@screens/LocationScreen/_components/locationItem/LocationItemLabel';
import LocationSectionItemWrapper from '@screens/LocationScreen/_components/locationItem/LocationSectionItemWrapper';
import { useLocationStore } from '@store/locationStore/useLocationStore';

import type { LocationItemLabelProps } from '@screens/LocationScreen/_components/locationItem/LocationItemLabel.type';
import type { Location } from '@store/locationStore/useLocationStore.type';

type SearchLocationSectionItemProps = Omit<PressableProps, 'children'> &
  Pick<LocationItemLabelProps, 'label' | 'subLabel'> & {
    location: Location;
  };

export default function SearchLocationSectionItem({
  label,
  subLabel,
  location,
  ...props
}: SearchLocationSectionItemProps) {
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
        <LocationItemLabel
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
