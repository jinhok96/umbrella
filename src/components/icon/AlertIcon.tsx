import AlertDefaultSvg from '@assets/svg/AlertDefault.svg';
import AlertErrorSvg from '@assets/svg/AlertError.svg';
import Show from '@components/wrapper/Show';

import type { IconProps } from '@components/icon/Icon.type';

type AlertIconProps = Omit<IconProps, 'color'> & {
  type?: 'default' | 'error';
};

export default function AlertIcon({ type = 'default', ...props }: AlertIconProps) {
  return (
    <>
      <Show when={type === 'default'}>
        <AlertDefaultSvg {...props} />
      </Show>
      <Show when={type === 'error'}>
        <AlertErrorSvg {...props} />
      </Show>
    </>
  );
}
