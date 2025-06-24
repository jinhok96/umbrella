import type { ViewProps } from 'react-native';

export type LocationItemLabelProps = Omit<ViewProps, 'children' | 'className'> & {
  label: string;
  subLabel: string;
};
