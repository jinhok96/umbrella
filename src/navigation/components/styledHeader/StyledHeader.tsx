import type { ViewProps } from 'react-native';
import { StatusBar, View } from 'react-native';

import { useSettingStore } from '@store/settingStore/useSettingStore';

type StyledHeaderProps = Omit<ViewProps, 'className'>;

export default function StyledHeader({ children, ...props }: StyledHeaderProps) {
  const theme = useSettingStore(state => state.theme);

  return (
    <View
      {...props}
      className="pt-safe bg-background-02"
    >
      {/* 상단 스테이터스 바 */}
      <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />
      {/* 헤더 */}
      <View className="w-full flex-row items-center justify-between p-5">{children}</View>
    </View>
  );
}
