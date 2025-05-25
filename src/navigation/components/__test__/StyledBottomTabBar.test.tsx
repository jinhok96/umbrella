import { render, screen } from '@testing-library/react-native';

import StyledBottomTabBar from '@navigation/components/StyledBottomTabBar';

import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

// react-navigation의 모듈 모킹
jest.mock('@react-navigation/bottom-tabs', () => ({
  BottomTabBar: jest.fn(() => null),
}));

describe('StyledBottomTabBar', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('정상적으로 렌더링되는지 테스트', async () => {
    // @ts-expect-error - BottomTabBar를 null로 모킹했기 때문에 props도 null로 모킹
    const mockProps = null as BottomTabBarProps;
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
