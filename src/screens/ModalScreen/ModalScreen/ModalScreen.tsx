import Modal from '@components/modal/Modal';
import { ROOT_NAVIGATION_TEST_ID_LIST } from '@navigation/root/RootNavigation.const';
import ModalScreenWrapper from '@screens/ModalScreen/_components/ModalScreenWrapper';

import type { RootStackParamList } from '@navigation/root/RootNavigation.type';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type ModalScreenParams = NativeStackScreenProps<RootStackParamList, 'Modal'>;

export default function ModalScreen({ route }: ModalScreenParams) {
  return (
    <ModalScreenWrapper testID={ROOT_NAVIGATION_TEST_ID_LIST.Modal}>
      <Modal {...route.params} />
    </ModalScreenWrapper>
  );
}
