import type { PressableProps } from 'react-native';
import { Pressable, View } from 'react-native';

import LocationIcon from '@components/icon/LocationIcon';
import LocationSectionItemLabel from '@screens/LocationScreen/_components/locationItem/locationSectionItem/LocationSectionItemLabel';
import LocationSectionItemWrapper from '@screens/LocationScreen/_components/locationItem/locationSectionItem/LocationSectionItemWrapper';

import type { LocationSectionItemLabelProps } from '@screens/LocationScreen/_components/locationItem/locationSectionItem/LocationSectionItemLabel.type';

type FavoriteLocationSectionItemProps = Omit<PressableProps, 'children'> &
  Pick<LocationSectionItemLabelProps, 'label' | 'subLabel'> & {
    current: boolean;
  };

export default function FavoriteLocationSectionItem({
  label,
  subLabel,
  current,
  ...props
}: FavoriteLocationSectionItemProps) {
  return (
    <Pressable {...props}>
      <LocationSectionItemWrapper className="flex flex-row items-center gap-3">
        <View className="size-6">
          <LocationIcon filled={current} />
        </View>
        <LocationSectionItemLabel
          label={label}
          subLabel={subLabel}
        />
      </LocationSectionItemWrapper>
    </Pressable>
  );
}
