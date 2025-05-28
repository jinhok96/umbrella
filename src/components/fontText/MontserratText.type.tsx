import type { FontTextProps, MontserratTypography } from '@components/fontText/FontText.type';

export type MontserratTextProps = Omit<FontTextProps<MontserratTypography>, 'font'>;
