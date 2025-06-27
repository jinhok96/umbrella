import { View } from 'react-native';

import PretendardText from '@components/fontText/PretendardText';

import type { LocationSectionItemLabelProps } from '@screens/LocationScreen/_components/locationItem/locationSectionItem/LocationSectionItemLabel.type';

/**
 * `LocationSectionItem` 컴포넌트의 라벨 컴포넌트
 * @param label 라벨
 * @param subLabel 서브 라벨
 * @jinhok96 25.06.27
 */
export default function LocationSectionItemLabel({ label, subLabel, ...props }: LocationSectionItemLabelProps) {
  return (
    <View
      {...props}
      className="flex gap-1"
    >
      <PretendardText
        typo="button-1"
        className="text-text-01"
      >
        {label}
      </PretendardText>
      <PretendardText
        typo="caption-4"
        className="text-text-05"
      >
        {subLabel}
      </PretendardText>
    </View>
  );
}
