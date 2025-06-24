import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import Button from '@components/button/Button';
import PlusIcon from '@components/icon/PlusIcon';
import SearchInput from '@components/textField/SearchInput';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { SearchInputProps } from '@components/textField/SearchInput.type';
import type { LocalizedText } from '@libs/utils/localize/localize.type';

const SEARCH_INPUT_PLACEHOLDER: LocalizedText = {
  ko: '주소를 입력해주세요.',
  en: 'Please enter an address.',
};

const SEARCH_INPUT_BUTTON_LABEL: LocalizedText = {
  ko: '내 위치로 찾기',
  en: 'Find my location',
};

type LocationSearchHeaderProps = Omit<ViewProps, 'children' | 'className'> &
  Pick<SearchInputProps, 'value' | 'onChangeText' | 'onFocus' | 'onBlur'> & {};

/**
 * 위치 검색 헤더
 * @param
 * @jinhok96 25.06.23
 */
export default function LocationSearchHeader({
  value,
  onChangeText,
  onFocus,
  onBlur,
  ...props
}: LocationSearchHeaderProps) {
  const lang = useSettingStore(state => state.lang);

  return (
    <View
      {...props}
      className="flex gap-3 p-5"
    >
      <SearchInput
        value={value}
        onChangeText={onChangeText}
        placeholder={SEARCH_INPUT_PLACEHOLDER}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <Button
        text={SEARCH_INPUT_BUTTON_LABEL[lang]}
        size="48"
        variant="primary"
        icon={color => <PlusIcon color={color} />}
      />
    </View>
  );
}
