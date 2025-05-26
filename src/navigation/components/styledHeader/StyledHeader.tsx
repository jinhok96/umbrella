import type { ViewProps } from 'react-native';
import { StatusBar, View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useSettingStore } from '@store/settingStore/useSettingStore';

type StyledHeaderProps = Omit<ViewProps, 'className'>;

export default function StyledHeader({ children, ...props }: StyledHeaderProps) {
  const theme = useSettingStore(state => state.theme);
  const { top } = useSafeAreaInsets();

  const statusBarHeightClassName = `h-[${top}]`;

  return (
    <View
      {...props}
      className="bg-background-02"
    >
      {/* 상단 스테이터스 바 */}
      <View className={statusBarHeightClassName}>
        <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />
      </View>
      {/* 헤더 */}
      <View className="w-full flex-row items-center justify-between p-5">{children}</View>
    </View>
  );
}
