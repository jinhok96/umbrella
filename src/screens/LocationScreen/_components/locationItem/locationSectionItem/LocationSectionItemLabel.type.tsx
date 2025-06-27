import type { ViewProps } from 'react-native';

export type LocationSectionItemLabelProps = Omit<ViewProps, 'children' | 'className'> & {
  label: string;
  subLabel: string;
};
