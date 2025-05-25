import type { FontTextProps, PretendardTypography } from '@components/text/FontText.type';

export type PretendardTextProps = Omit<FontTextProps<PretendardTypography>, 'font'>;
