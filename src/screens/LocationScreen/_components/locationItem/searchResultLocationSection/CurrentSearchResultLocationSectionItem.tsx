import { useEffect, useState } from 'react';
import type { GestureResponderEvent } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import SearchResultLocationSectionItem from '@screens/LocationScreen/_components/locationItem/searchResultLocationSection/SearchResultLocationSectionItem';
import { useGetPlaceDetail } from '@services/googleMaps/query';
import { useLocationStore } from '@store/locationStore/useLocationStore';

import type { SearchResultLocationSectionItemProps } from '@screens/LocationScreen/_components/locationItem/searchResultLocationSection/SearchResultLocationSectionItem.type';
import type { Location } from '@store/locationStore/useLocationStore.type';

type CurrentSearchResultLocationSectionItemProps = Omit<
  SearchResultLocationSectionItemProps,
  'label' | 'subLabel' | 'location'
> & {
  placeId: string;
};

/**
 * `CurrentSearchResultLocationSection`의 아이템 컴포넌트
 * @param placeId 장소 ID
 * @jinhok96 25.06.27
 */
export default function CurrentSearchResultLocationSectionItem({
  placeId,
  onPress,
  ...props
}: CurrentSearchResultLocationSectionItemProps) {
  const navigation = useNavigation();
  const setCurrentLocation = useLocationStore(state => state.setCurrentLocation);
  const addRecentLocation = useLocationStore(state => state.addRecentLocation);

  const { data } = useGetPlaceDetail({ placeId });

  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    if (!data?.data) return;

    const { displayName, formattedAddress, location: coord } = data.data;

    if (!coord) return;

    const newLocation: Location = {
      id: placeId,
      name: displayName.text,
      address: formattedAddress,
      lat: coord.latitude,
      lon: coord.longitude,
    };

    setLocation(newLocation);
  }, [data?.data]);

  const handleItemPress = (e: GestureResponderEvent) => {
    onPress?.(e);

    if (!location) return;

    setCurrentLocation(location);
    addRecentLocation(location);
    navigation.goBack();
  };

  if (!location) return <></>;

  return (
    <SearchResultLocationSectionItem
      {...props}
      key={location.id}
      label={location.name}
      subLabel={location.address}
      location={location}
      onPress={handleItemPress}
    />
  );
}
