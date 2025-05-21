import type { PropsWithChildren } from 'react';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import { colorTheme } from '@libs/utils/themes.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

type ColorThemeProviderProps = PropsWithChildren<Omit<ViewProps, 'style' | 'needsOffscreenAlphaCompositing'>>;

export default function ColorThemeProvider({ children, ...props }: ColorThemeProviderProps) {
  const theme = useSettingStore(state => state.theme);

  return (
    <View
      {...props}
      style={colorTheme[theme] as Record<string, string>}
      needsOffscreenAlphaCompositing={true}
    >
      {children}
    </View>
  );
}
