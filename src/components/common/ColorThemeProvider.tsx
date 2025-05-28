import type { PropsWithChildren } from 'react';
import { View } from 'react-native';

import { colorTheme } from '@libs/utils/themes.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

export default function ColorThemeProvider({ children }: PropsWithChildren) {
  const theme = useSettingStore(state => state.theme);

  return (
    <View
      className="flex-1"
      style={colorTheme[theme] as Record<string, string>}
      needsOffscreenAlphaCompositing={true}
    >
      <View className="flex-1 bg-background-02">{children}</View>
    </View>
  );
}
