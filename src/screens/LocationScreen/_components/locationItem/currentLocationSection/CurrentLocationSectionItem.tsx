import type { PressableProps } from 'react-native';
import { Pressable, View } from 'react-native';

import MontserratText from '@components/fontText/MontserratText';
import LocationIcon from '@components/icon/LocationIcon';
import WeatherIcon from '@components/icon/WeatherIcon';
import LocationSectionItemLabel from '@screens/LocationScreen/_components/locationItem/locationSectionItem/LocationSectionItemLabel';
import LocationSectionItemWrapper from '@screens/LocationScreen/_components/locationItem/locationSectionItem/LocationSectionItemWrapper';

import type { LocationSectionItemLabelProps } from '@screens/LocationScreen/_components/locationItem/locationSectionItem/LocationSectionItemLabel.type';
import type { WeatherIconId } from '@services/openWeatherOneCall/axios.type';

type CurrentLocationSectionItemProps = Omit<PressableProps, 'children'> &
  Pick<LocationSectionItemLabelProps, 'label' | 'subLabel'> & {
    temp: number;
    icon: WeatherIconId;
  };

export default function CurrentLocationSectionItem({
  label,
  subLabel,
  temp,
  icon,
  ...props
}: CurrentLocationSectionItemProps) {
  return (
    <Pressable {...props}>
      <LocationSectionItemWrapper className="flex flex-row items-center justify-between gap-3">
        <View className="flex flex-row items-center gap-3">
          <View className="size-6">
            <LocationIcon filled />
          </View>
          <LocationSectionItemLabel
            label={label}
            subLabel={subLabel}
          />
        </View>
        <View className="flex flex-row items-center gap-1">
          <MontserratText
            typo="title-3"
            className="text-text-01"
          >
            {temp}°
          </MontserratText>
          <View className="size-8">
            <WeatherIcon icon={icon} />
          </View>
        </View>
      </LocationSectionItemWrapper>
    </Pressable>
  );
}
