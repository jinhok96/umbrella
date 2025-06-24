import type { PressableProps } from 'react-native';
import { Pressable, View } from 'react-native';

import LocationIcon from '@components/icon/LocationIcon';
import LocationItemLabel from '@screens/LocationScreen/_components/locationItem/LocationItemLabel';
import LocationSectionItemWrapper from '@screens/LocationScreen/_components/locationItem/LocationSectionItemWrapper';

import type { LocationItemLabelProps } from '@screens/LocationScreen/_components/locationItem/LocationItemLabel.type';

type FavoriteLocationSectionItemProps = Omit<PressableProps, 'children'> &
  Pick<LocationItemLabelProps, 'label' | 'subLabel'> & {
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
        <LocationItemLabel
          label={label}
          subLabel={subLabel}
        />
      </LocationSectionItemWrapper>
    </Pressable>
  );
}
