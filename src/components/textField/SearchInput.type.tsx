import type { TextFieldProps } from '@components/textField/TextField.type';
import type { LocalizedText } from '@libs/utils/localize/localize.type';

export type SearchInputProps = Omit<TextFieldProps, 'className'> & {
  placeholder?: LocalizedText;
};
