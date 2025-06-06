import MoodBadSvg from '@assets/svg/MoodBad.svg';
import MoodGoodSvg from '@assets/svg/MoodGood.svg';
import MoodNormalSvg from '@assets/svg/MoodNormal.svg';
import Show from '@components/wrapper/Show';
import { useGetColorHex } from '@hooks/useGetColorHex';

import type { MoodIconProps } from '@components/icon/MoodIcon.type';

export default function MoodIcon({ type, ...props }: MoodIconProps) {
  const goodColor = useGetColorHex('--color-morning');
  const normalColor = useGetColorHex('--color-success');
  const badColor = useGetColorHex('--color-error');

  return (
    <>
      <Show when={type === 'good'}>
        <MoodGoodSvg
          {...props}
          color={goodColor}
        />
      </Show>
      <Show when={type === 'normal'}>
        <MoodNormalSvg
          {...props}
          color={normalColor}
        />
      </Show>
      <Show when={type === 'bad'}>
        <MoodBadSvg
          {...props}
          color={badColor}
        />
      </Show>
    </>
  );
}
