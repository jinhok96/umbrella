import { Text, View } from 'react-native';

import { ROOT_NAVIGATION_TEST_ID_LIST } from '@navigation/RootNavigation.const';

export default function InquiryScreen() {
  return (
    <View testID={ROOT_NAVIGATION_TEST_ID_LIST.Inquiry}>
      <Text>InquiryScreen</Text>
    </View>
  );
}
