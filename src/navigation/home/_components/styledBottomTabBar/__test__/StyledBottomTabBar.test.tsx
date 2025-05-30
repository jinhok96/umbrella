import { render, screen } from '@testing-library/react-native';

import StyledBottomTabBar from '@navigation/home/_components/styledBottomTabBar/StyledBottomTabBar';

import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

// BottomTabBar 모킹
jest.mock('@components/@react-navigation/bottom-tabs/BottomTabBar', () => jest.fn(() => null));

describe('StyledBottomTabBar', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('정상적으로 렌더링되는지 테스트', async () => {
    const mockProps = {} as BottomTabBarProps;
    const testId = 'testId';

    render(
      <StyledBottomTabBar
        {...mockProps}
        testID={testId}
      />,
    );

    const element = await screen.findByTestId(testId);
    expect(element).toBeOnTheScreen();
  });
});
