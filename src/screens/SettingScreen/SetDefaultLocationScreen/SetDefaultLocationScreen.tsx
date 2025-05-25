import { Text, View } from 'react-native';

import { ROOT_NAVIGATION_TEST_ID_LIST } from '@navigation/RootNavigation.const';

export default function SetDefaultLocationScreen() {
  return (
    <View testID={ROOT_NAVIGATION_TEST_ID_LIST.SetDefaultLocation}>
      <Text>SetDefaultLocationScreen</Text>
    </View>
  );
}
