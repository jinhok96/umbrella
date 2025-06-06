import { act, render, screen } from '@testing-library/react-native';

import TestNavigationContainer from '@components/testComponent/TestNavigationContainer';
import { RootNavigation } from '@navigation/root/RootNavigation';
import { ROOT_NAVIGATION_TEST_ID_LIST } from '@navigation/root/RootNavigation.const';

const NAVIGATION_TEST_ID_LIST = ROOT_NAVIGATION_TEST_ID_LIST;

function Navigation() {
  return (
    <TestNavigationContainer>
      <RootNavigation />
    </TestNavigationContainer>
  );
}

describe('RootNavigation', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('시작 화면이 Home인지 테스트', async () => {
    render(<Navigation />);

    act(() => jest.runAllTimers());

    const currentScreen = await screen.findByTestId(NAVIGATION_TEST_ID_LIST.Home);
    expect(currentScreen).toBeOnTheScreen();
  });
});
