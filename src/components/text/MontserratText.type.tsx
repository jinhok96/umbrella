import type { FontTextProps, MontserratTypography } from '@components/text/FontText.type';

export type MontserratTextProps = Omit<FontTextProps<MontserratTypography>, 'font'>;
