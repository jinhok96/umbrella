import EmptySvg from '@assets/svg/Empty.svg';

import type { IconProps } from '@components/icon/Icon.type';

export default function EmptyIcon(props: Omit<IconProps, 'color'>) {
  return <EmptySvg {...props} />;
}
