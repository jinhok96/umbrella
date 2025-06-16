import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import MontserratText from '@components/fontText/MontserratText';
import PretendardText from '@components/fontText/PretendardText';
import Show from '@components/wrapper/Show';

type WeatherDetailCardMainDataMainItemProps = Omit<ViewProps, 'className'> & {
  value?: string;
};

/**
 * `WeatherDetailCardMainData`의 메인 아이템 컴포넌트
 * @param children 메인 라벨
 * @param value 메인 수치
 * @jinhok96 25.06.12
 */
export default function WeatherDetailCardMainDataMainItem({
  children: label,
  value,
  ...props
}: WeatherDetailCardMainDataMainItemProps) {
  return (
    <Show when={!!label && value !== undefined}>
      <View
        {...props}
        className="flex flex-row items-center gap-1"
      >
        <Show when={!!label}>
          <PretendardText
            typo="title-4"
            className="text-text-01"
          >
            {label}
          </PretendardText>
          <PretendardText
            typo="title-4"
            className="text-text-01"
          >
            •
          </PretendardText>
        </Show>
        <MontserratText
          typo="title-4"
          className="text-text-01"
        >
          {value}
        </MontserratText>
      </View>
    </Show>
  );
}
