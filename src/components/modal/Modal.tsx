import { View } from 'react-native';

import Button from '@components/button/Button';
import PretendardText from '@components/fontText/PretendardText';
import AlertIcon from '@components/icon/AlertIcon';
import Show from '@components/wrapper/Show';
import { shadowStyleList } from '@libs/utils/themes.util';
import { useModalStore } from '@store/modalStore/useModalStore';

import type { ButtonVariant } from '@components/button/Button.type';
import type { ModalProps, ModalType } from '@components/modal/Modal.type';

const SUBMIT_BUTTON_VARIANT: Record<ModalType, ButtonVariant> = {
  default: 'black',
  error: 'error',
};

/**
 * 공통 모달 컴포넌트
 * @param type - 모달 타입; `default` | `error`
 * @param hideIcon - 모달 아이콘 표시 여부 (기본값: `false`)
 * @param title - 모달 제목
 * @param subTitle - 모달 부제목
 * @param cancelButtonProps - 취소 버튼에 전달할 `props`
 * @param submitButtonProps - 확인 버튼에 전달할 `props`
 * @jinhok96 25.05.30
 */
export default function Modal({
  type = 'default',
  hideIcon = false,
  title,
  subTitle,
  cancelButtonProps,
  submitButtonProps,
  ...props
}: ModalProps) {
  const { onCancel, onSubmit } = useModalStore();

  return (
    <View
      {...props}
      className="flex w-[21rem] items-center justify-center gap-7 rounded-[1.25rem] bg-background-02 px-5 pb-7 pt-10"
      style={{ boxShadow: shadowStyleList.float }}
    >
      <Show when={!hideIcon}>
        <View className="size-[4.5rem]">
          <Show when={type === 'default'}>
            <AlertIcon type="default" />
          </Show>
          <Show when={type === 'error'}>
            <AlertIcon type="error" />
          </Show>
        </View>
      </Show>
      <PretendardText
        typo="title-3"
        className="text-text-01"
      >
        {title}
      </PretendardText>
      <Show when={!!subTitle}>
        <PretendardText
          typo="body-2"
          className="text-text-03"
        >
          {subTitle}
        </PretendardText>
      </Show>
      <View className="flex w-full flex-row items-center gap-2">
        <Button
          {...cancelButtonProps}
          className="flex-1"
          size="md"
          variant="grayOutline"
          onPress={onCancel}
        />
        <Button
          {...submitButtonProps}
          className="flex-1"
          size="md"
          variant={SUBMIT_BUTTON_VARIANT[type]}
          onPress={onSubmit}
        />
      </View>
    </View>
  );
}
