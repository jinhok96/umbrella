import type { ViewProps } from 'react-native';

import type { LocalizedText } from '@libs/utils/localize/localize.type';

export type SectionProps = Omit<ViewProps, 'className'> & { label: LocalizedText };
