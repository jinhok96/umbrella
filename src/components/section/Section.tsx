import { View } from 'react-native';

import SectionLabel from '@components/section/SectionLabel';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { SectionProps } from '@components/section/Section.type';

export default function Section({ label, children, ...props }: SectionProps) {
  const lang = useSettingStore(state => state.lang);

  return (
    <View
      {...props}
      className="flex gap-3 py-3"
    >
      <View className="px-5">
        <SectionLabel>{label[lang]}</SectionLabel>
      </View>
      {children}
    </View>
  );
}
