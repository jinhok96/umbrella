import type { PressableProps } from 'react-native';
import { Pressable, View } from 'react-native';

import PretendardText from '@components/fontText/PretendardText';
import Show from '@components/wrapper/Show';

type ToastProps = Omit<PressableProps, 'className' | 'children'> & {
  type?: 'default' | 'error';
  text: string;
};

export default function Toast({ text, type = 'default', ...props }: ToastProps) {
  return (
    <Pressable
      {...props}
      className="flex flex-row items-center gap-3 bg-text-01 p-4"
    >
      <View className="size-6">
        <Show when={type === 'default'}>svg</Show>
        <Show when={type === 'error'}>svg</Show>
      </View>
      <PretendardText
        typo="caption-1"
        className="text-text-11"
      >
        {text}
      </PretendardText>
    </Pressable>
  );
}
