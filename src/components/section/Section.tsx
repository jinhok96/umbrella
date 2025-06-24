import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import SectionLabel from '@components/section/SectionLabel';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { LocalizedText } from '@libs/utils/localize/localize.type';

type SectionProps = ViewProps & { label: LocalizedText };

export default function Section({ label, children, ...props }: SectionProps) {
  const lang = useSettingStore(state => state.lang);

  return (
    <View {...props}>
      <SectionLabel>{label[lang]}</SectionLabel>
      {children}
    </View>
  );
}
