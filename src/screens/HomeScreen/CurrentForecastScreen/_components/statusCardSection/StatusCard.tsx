import { View } from 'react-native';

import classNames from 'classnames';

import PretendardText from '@components/fontText/PretendardText';
import MoodIcon from '@components/icon/MoodIcon';
import { useSettingStore } from '@store/settingStore/useSettingStore';

import type { MoodIconProps } from '@components/icon/MoodIcon.type';
import type { LocalizedText, LocalizedTextMap } from '@libs/utils/localize/localize.type';
import type { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';

const DEFAULT_STATUS_TEXT_LIST: LocalizedTextMap<MoodIconProps['type']> = {
  good: {
    ko: '좋음',
    en: 'Good',
  },
  normal: {
    ko: '보통',
    en: 'Normal',
  },
  bad: {
    ko: '나쁨',
    en: 'Bad',
  },
};

type StatusCardProps = Omit<ViewProps, 'className'> &
  Pick<MoodIconProps, 'type'> & {
    label: LocalizedText;
    statusTextList?: LocalizedTextMap<MoodIconProps['type']>;
  };

/**
 * 현재 날씨 상태를 보여주는 카드
 * @jinhok96 25.06.06
 */
export default function StatusCard({
  type,
  label,
  statusTextList = DEFAULT_STATUS_TEXT_LIST,
  ...props
}: StatusCardProps) {
  const lang = useSettingStore(state => state.lang);

  const textColorClassName = classNames(
    type === 'good' && 'text-morning',
    type === 'normal' && 'text-success',
    type === 'bad' && 'text-error',
  );

  return (
    <View
      {...props}
      className="flex-1 gap-[0.625rem] rounded-[1.25rem] bg-background-02 px-5 py-4"
    >
      <PretendardText
        typo="title-5"
        className="text-text-02"
      >
        {label[lang]}
      </PretendardText>
      <View className="flex flex-row items-center justify-end gap-2">
        <View className="size-6">
          <MoodIcon type={type} />
        </View>
        <PretendardText
          typo="title-4"
          className={textColorClassName}
        >
          {statusTextList[type][lang]}
        </PretendardText>
      </View>
    </View>
  );
}
