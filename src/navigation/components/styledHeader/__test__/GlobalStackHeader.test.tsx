import { Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { render, screen } from '@testing-library/react-native';

import TestNavigationContainer from '@components/testComponent/TestNavigationContainer';
import GlobalStackHeader from '@navigation/components/styledHeader/GlobalStackHeader';

const Stack = createNativeStackNavigator();

const TEST_CHILDREN = 'Test Children';

function TestComponent() {
  return <Text>{TEST_CHILDREN}</Text>;
}

describe('GlobalStackHeader', () => {
  test('title이 렌더링되는지 테스트', async () => {
    const testTitle = 'Test Title';

    render(
      <TestNavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: true, header: props => <GlobalStackHeader {...props} /> }}>
          <Stack.Screen
            name="Home"
            component={TestComponent}
            options={{ title: testTitle }}
          />
        </Stack.Navigator>
      </TestNavigationContainer>,
    );

    const element = await screen.findByText(testTitle);
    expect(element).toBeOnTheScreen();
  });
});
