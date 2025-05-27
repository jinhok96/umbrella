import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import { getColorHex } from '@libs/utils/getColorHex.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { NavigationContainerProps } from '@react-navigation/native';

type StyledNavigationContainerProps = Omit<NavigationContainerProps, 'theme'>;

/**
 * 스타일이 적용된 `NavigationContainer` 컴포넌트
 * @jinhok96 25.05.25
 */
export default function StyledNavigationContainer({ children, ...props }: StyledNavigationContainerProps) {
  const theme = useSettingStore(state => state.theme);
  const background = getColorHex(theme, '--color-test');

  return (
    <NavigationContainer
      {...props}
      theme={{
        ...DefaultTheme,
        dark: false,
        colors: { ...DefaultTheme.colors, background },
      }}
    >
      {children}
    </NavigationContainer>
  );
}
