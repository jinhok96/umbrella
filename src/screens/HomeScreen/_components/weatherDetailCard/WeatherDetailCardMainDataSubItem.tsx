import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import MontserratText from '@components/fontText/MontserratText';
import PretendardText from '@components/fontText/PretendardText';
import Show from '@components/wrapper/Show';

type WeatherDetailCardMainDataSubItemProps = Omit<ViewProps, 'className'> & {
  value?: string;
};

/**
 * `WeatherDetailCardMainData`의 서브 아이템 컴포넌트
 * @param children 메인 라벨
 * @param value 메인 수치
 * @jinhok96 25.06.12
 */
export default function WeatherDetailCardMainDataSubItem({
  children: label,
  value,
  ...props
}: WeatherDetailCardMainDataSubItemProps) {
  return (
    <Show when={!!label && value !== undefined}>
      <View
        {...props}
        className="flex flex-row items-center gap-1"
      >
        <Show when={!!label}>
          <PretendardText
            typo="title-5"
            className="text-text-01"
          >
            {label}
          </PretendardText>
        </Show>
        <MontserratText
          typo="title-5"
          className="text-text-01"
        >
          {value}
        </MontserratText>
      </View>
    </Show>
  );
}
