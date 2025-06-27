import type { PressableProps } from 'react-native';

import type { LocationSectionItemLabelProps } from '@screens/LocationScreen/_components/locationItem/locationSectionItem/LocationSectionItemLabel.type';
import type { Location } from '@store/locationStore/useLocationStore.type';

export type SearchResultLocationSectionItemProps = Omit<PressableProps, 'children'> &
  Pick<LocationSectionItemLabelProps, 'label' | 'subLabel'> & {
    location: Location;
  };
