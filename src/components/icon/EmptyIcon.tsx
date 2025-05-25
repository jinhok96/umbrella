import EmptySvg from '@assets/svg/Empty.svg';

import type { GetColorHexProps } from '@libs/utils/getColorHex.type';

export default function EmptyIcon(props: Omit<GetColorHexProps, 'color'>) {
  return <EmptySvg {...props} />;
}
