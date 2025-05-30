import Modal from '@components/modal/Modal';
import { ROOT_NAVIGATION_TEST_ID_LIST } from '@navigation/root/RootNavigation.const';
import ModalScreenWrapper from '@screens/ModalScreen/_components/ModalScreenWrapper';

export default function ModalScreen() {
  return (
    <ModalScreenWrapper testID={ROOT_NAVIGATION_TEST_ID_LIST.Modal}>
      <Modal />
    </ModalScreenWrapper>
  );
}
