import type { ReactNode } from 'react';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import Button from '@components/button/Button';
import Show from '@components/common/Show';
import PretendardText from '@components/fontText/PretendardText';

import type { ButtonProps } from '@components/button/Button.type';

type EmptyContentProps = Omit<ViewProps, 'children' | 'className'> & {
  title?: string;
  subTitle?: string;
  icon?: ReactNode;
  buttonProps?: Omit<ButtonProps, 'size' | 'variant'>;
};

export default function EmptyContent({ title, subTitle, icon, buttonProps, ...props }: EmptyContentProps) {
  return (
    <View
      {...props}
      className="flex items-center justify-center gap-5 px-4 py-10"
    >
      <Show when={!!icon}>
        <View className="size-[3.75rem]">{icon}</View>
      </Show>
      <View className="flex items-center justify-center gap-1">
        <Show when={!!title}>
          <PretendardText
            typo="title-4"
            className="text-text-01"
          >
            {title}
          </PretendardText>
        </Show>
        <Show when={!!subTitle}>
          <PretendardText
            typo="body-3"
            className="text-text-01"
          >
            {subTitle}
          </PretendardText>
        </Show>
      </View>
      <Show when={!!buttonProps}>
        <Button
          {...buttonProps}
          size="sm"
          variant="black"
        />
      </Show>
    </View>
  );
}
