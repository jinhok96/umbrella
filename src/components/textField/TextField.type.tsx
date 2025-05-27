import type { TextInputProps } from 'react-native';

export type TextFieldProps = Omit<TextInputProps, 'placeholderClassName'> & {
  value: NonNullable<TextInputProps['value']>;
  onChangeText: NonNullable<TextInputProps['onChangeText']>;
  isError?: boolean;
};
