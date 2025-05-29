import { forwardRef, useState } from 'react';
import type { TextInputProps } from 'react-native';
import { TextInput, View } from 'react-native';

import classNames from 'classnames';

import { getColorHex } from '@libs/utils/getColorHex.util';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { TextFieldProps } from '@components/textField/TextField.type';

/**
 * 커스텀 `TextInput` 컴포넌트
 *
 * 기본 스타일 적용
 * @jinhok96 25.05.28
 */
export default forwardRef<TextInput, TextFieldProps>(function TextField(
  { className, value = '', onChangeText, onFocus, onBlur, children, isError, testID, ...props }: TextFieldProps,
  ref,
) {
  const theme = useSettingStore(state => state.theme);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus: TextInputProps['onFocus'] = e => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur: TextInputProps['onBlur'] = e => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const containerClassName = classNames(
    isError && 'border-error',
    !isError && isFocused && 'border-morning',
    !isError && !isFocused && 'border-background-01',
    className,
  );

  return (
    <View
      className={`flex h-fit shrink flex-row items-center gap-2.5 rounded-lg border bg-background-01 px-4 ${containerClassName}`}
      testID={`${testID}_container`}
    >
      <TextInput
        {...props}
        className="flex-1 px-0 py-3 text-text-01 text-pretendard-body-2"
        placeholderTextColor={getColorHex(theme, '--color-text-06')}
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        testID={testID}
        ref={ref}
      />
      {children}
    </View>
  );
});
