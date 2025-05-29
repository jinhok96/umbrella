import { useRef } from 'react';
import type { TextInput } from 'react-native';
import { View } from 'react-native';

import PressableHitSlop from '@components/common/PressableHitSlop';
import Show from '@components/common/Show';
import PretendardText from '@components/fontText/PretendardText';
import SearchIcon from '@components/icon/SearchIcon';
import TextField from '@components/textField/TextField';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { TextFieldProps } from '@components/textField/TextField.type';
import type { LocalizedTextMap } from '@libs/utils/localize/localize.type';

const SEARCH_INPUT_TEXT: LocalizedTextMap<'cancel' | 'placeholder'> = {
  cancel: {
    ko: '취소',
    en: 'Cancel',
  },
  placeholder: {
    ko: '주소를 입력해주세요.',
    en: 'Please enter an address.',
  },
};

type SearchInputProps = Omit<TextFieldProps, 'className'>;

/**
 * 검색 인풋 컴포넌트
 * @jinhok96 25.05.29
 */
export default function SearchInput({ value, onChangeText, ...props }: SearchInputProps) {
  const lang = useSettingStore(state => state.lang);
  const textFieldRef = useRef<TextInput>(null);

  const handleSearchButtonPress = () => {
    onChangeText(value);
    textFieldRef.current?.blur();
  };

  const handleCancelButtonPress = () => {
    onChangeText('');
    textFieldRef.current?.focus();
  };

  return (
    <View className="flex flex-row items-center gap-0 overflow-hidden">
      {/* 인풋 */}
      <TextField
        {...props}
        value={value}
        onChangeText={onChangeText}
        placeholder={SEARCH_INPUT_TEXT.placeholder[lang]}
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
        <View className="pl-2">
          <PressableHitSlop
            className="flex justify-center px-2"
            onPress={handleCancelButtonPress}
            hitSlopX={8}
            hitSlopY={12}
          >
            <PretendardText
              typo="button-2"
              className="text-text-01"
            >
              {SEARCH_INPUT_TEXT.cancel[lang]}
            </PretendardText>
          </PressableHitSlop>
        </View>
      </Show>
    </View>
  );
}
