import { useRef } from 'react';
import type { TextInput } from 'react-native';
import { View } from 'react-native';

import PressableHitSlop from '@components/button/PressableHitSlop';
import PretendardText from '@components/fontText/PretendardText';
import { BlockKeyboardDismissGesture } from '@components/gesture/BlockKeyboardDismissGesture';
import SearchIcon from '@components/icon/SearchIcon';
import TextField from '@components/textField/TextField';
import Show from '@components/wrapper/Show';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { TextFieldProps } from '@components/textField/TextField.type';
import type { LocalizedText } from '@libs/utils/localize/localize.type';

const SEARCH_INPUT_CANCEL_LABEL: LocalizedText = {
  ko: '취소',
  en: 'Cancel',
};

type SearchInputProps = Omit<TextFieldProps, 'className' | 'placeholder'> & {
  placeholder?: LocalizedText;
};

/**
 * 검색 인풋 컴포넌트
 * @jinhok96 25.06.23
 */
export default function SearchInput({ value, onChangeText, placeholder, ...props }: SearchInputProps) {
  const lang = useSettingStore(state => state.lang);
  const textFieldRef = useRef<TextInput>(null);

  const handleSearchButtonPress = () => {
    onChangeText(value);
  };

  const handleCancelButtonPress = () => {
    onChangeText('');
    textFieldRef.current?.focus();
  };

  return (
    <View className="flex h-12 flex-row items-center overflow-hidden">
      {/* 인풋 */}
      <TextField
        {...props}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder?.[lang]}
        ref={textFieldRef}
      >
        <PressableHitSlop
          className="size-6"
          onPress={handleSearchButtonPress}
        >
          <SearchIcon color="--color-text-06" />
        </PressableHitSlop>
      </TextField>
      {/* 취소 버튼 */}
      <Show when={!!value}>
        <BlockKeyboardDismissGesture>
          <View className="pl-2">
            <PressableHitSlop
              className="flex h-full justify-center px-2"
              onPress={handleCancelButtonPress}
              hitSlopX={8}
            >
              <PretendardText
                typo="button-2"
                className="text-text-01"
              >
                {SEARCH_INPUT_CANCEL_LABEL[lang]}
              </PretendardText>
            </PressableHitSlop>
          </View>
        </BlockKeyboardDismissGesture>
      </Show>
    </View>
  );
}
