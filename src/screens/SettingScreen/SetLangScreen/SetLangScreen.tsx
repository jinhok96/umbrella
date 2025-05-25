import { Text, View } from 'react-native';

import { ROOT_NAVIGATION_TEST_ID_LIST } from '@navigation/RootNavigation.const';

export default function SetLangScreen() {
  return (
    <View testID={ROOT_NAVIGATION_TEST_ID_LIST.SetLang}>
      <Text>SetLangScreen</Text>
    </View>
  );
}
