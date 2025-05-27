import type { ViewProps } from 'react-native';
import { StatusBar, View } from 'react-native';

import { useSettingStore } from '@store/settingStore/useSettingStore';

type StyledHeaderProps = ViewProps;

/**
 * 상단 헤더 컨테이너
 * @jinhok96 25.05.26
 */
export default function StyledHeader({ children, className, ...props }: StyledHeaderProps) {
  const theme = useSettingStore(state => state.theme);

  return (
    <View
      {...props}
      className={`pt-safe bg-background-02 ${className}`}
    >
      {/* 상단 스테이터스 바 */}
      <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />
      {/* 헤더 */}
      <View className="w-full flex-row items-center justify-between px-5 py-4">{children}</View>
    </View>
  );
}
