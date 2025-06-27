import { View } from 'react-native';

import EmptyContent from '@components/emptyContent/EmptyContent';
import EmptyIcon from '@components/icon/EmptyIcon';
import Section from '@components/section/Section';
import AsyncBoundary from '@components/wrapper/AsyncBoundary';
import Show from '@components/wrapper/Show';
import CurrentSearchResultLocationSectionItem from '@screens/LocationScreen/_components/locationItem/searchResultLocationSection/CurrentSearchResultLocationSectionItem';
import { useGetAutocompleteRegions } from '@services/googleMaps/query';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { SectionProps } from '@components/section/Section.type';
import type { LocalizedText } from '@libs/utils/localize/localize.type';

const LABEL: LocalizedText = { ko: '검색 결과', en: 'Search Result' };

const EMPTY_PLACEHOLDER_TITLE: LocalizedText = {
  ko: '결과를 찾을 수 없습니다.',
  en: 'There is no result.',
};
const EMPTY_PLACEHOLDER_SUB_TITLE: LocalizedText = {
  ko: '검색어가 올바른지 다시 확인해보세요.',
  en: 'Please check your search keyword.',
};

const LOADING_PLACEHOLDER: LocalizedText = {
  ko: '검색 중...',
  en: 'Searching...',
};

type CurrentSearchResultLocationSectionProps = Omit<SectionProps, 'children' | 'label' | 'className'> & {
  input: string;
};

function Placeholder({ title, subTitle, icon }: { title?: string; subTitle?: string; icon?: boolean }) {
  return (
    <View className="flex items-center justify-center py-10">
      <EmptyContent
        icon={icon && <EmptyIcon />}
        title={title}
        subTitle={subTitle}
      />
    </View>
  );
}

function CurrentSearchAutocompleteList({ input }: { input: string }) {
  const lang = useSettingStore(state => state.lang);

  const { data } = useGetAutocompleteRegions({ input });
  const autocompleteList = data?.data || [];

  return (
    <Show
      when={!!autocompleteList.length}
      fallback={
        <Placeholder
          icon
          title={EMPTY_PLACEHOLDER_TITLE[lang]}
          subTitle={EMPTY_PLACEHOLDER_SUB_TITLE[lang]}
        />
      }
    >
      {autocompleteList.map(item => (
        <CurrentSearchResultLocationSectionItem
          key={item.placeId}
          placeId={item.placeId}
        />
      ))}
    </Show>
  );
}

export default function CurrentSearchResultLocationSection({
  input,
  ...props
}: CurrentSearchResultLocationSectionProps) {
  const lang = useSettingStore(state => state.lang);

  return (
    <Section
      {...props}
      label={LABEL}
    >
      <AsyncBoundary
        errorFallback={error => (
          <Placeholder
            icon
            title={error.error.message}
          />
        )}
        loadingFallback={<Placeholder subTitle={LOADING_PLACEHOLDER[lang]} />}
      >
        <CurrentSearchAutocompleteList input={input} />
      </AsyncBoundary>
    </Section>
  );
}
