import { View } from 'react-native';

import PretendardText from '@components/fontText/PretendardText';

import type { PretendardTextProps } from '@components/fontText/PretendardText.type';

type SectionLabelProps = Omit<PretendardTextProps, 'typo' | 'className'>;

export default function SectionLabel({ ...props }: SectionLabelProps) {
  return (
    <View className="px-5 py-3">
      <PretendardText
        {...props}
        typo="caption-2"
        className="text-text-05"
      />
    </View>
  );
}
