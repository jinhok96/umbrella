import type { FontTextProps, PretendardTypography } from '@components/fontText/FontText.type';

export type PretendardTextProps = Omit<FontTextProps<PretendardTypography>, 'font'>;
