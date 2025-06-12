import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import PretendardText from '@components/fontText/PretendardText';
import Show from '@components/wrapper/Show';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { LocalizedText } from '@libs/utils/localize/localize.type';

type WeatherDetailCardItemProps = Omit<ViewProps, 'children'> & {
  label: LocalizedText;
  value?: string | LocalizedText;
};

/**
 * `WeatherDetailCard`의 데이터를 표시하는 아이템 컴포넌트
 *
 * `value`가 없으면 렌더링되지 않음
 * @param label 라벨
 * @param value 수치
 * @jinhok96 25.06.12
 */
export default function WeatherDetailCardItem({ label, value, ...props }: WeatherDetailCardItemProps) {
  const lang = useSettingStore(state => state.lang);

  return (
    <Show when={value !== undefined}>
      <View
        {...props}
        className="flex w-full flex-row items-center"
      >
        {/* 라벨 */}
        <PretendardText
          typo="body-2"
          className="text-text-04"
        >
          {label[lang]}
        </PretendardText>
        {/* 수치 */}
        <PretendardText
          typo="title-5"
          className="text-text-04"
        >
          {typeof value === 'string' ? value : value?.[lang]}
        </PretendardText>
      </View>
    </Show>
  );
}
