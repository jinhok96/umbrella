import Show from '@components/common/Show';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { ChecklistProps } from '@components/icon/checklist/ChecklistIcon.type';

/**
 * ChecklistIcon 코어 컴포넌트
 * @param light Light 테마 아이콘
 * @param dark Dark 테마 아이콘
 * @param highContrast HighContrast 테마 아이콘
 * @jinhok96 25.05.22
 */
export default function ChecklistIcon({ light, dark, highContrast }: ChecklistProps) {
  const theme = useSettingStore(state => state.theme);

  return (
    <>
      <Show when={theme === 'light'}>{light}</Show>
      <Show when={theme === 'dark'}>{dark}</Show>
      <Show when={theme === 'highContrast'}>{highContrast}</Show>
    </>
  );
}
