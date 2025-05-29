import type { Insets } from 'react-native';

import { render, screen } from '@testing-library/react-native';

import PressableHitSlop from '@components/button/PressableHitSlop';

const TEST_ID = 'testId';
const TEST_HIT_SLOP = 15;

describe('PressableHitSlop', () => {
  test('hitSlop이 정상적으로 전달되는지 테스트', async () => {
    render(
      <PressableHitSlop
        hitSlop={TEST_HIT_SLOP}
        testID={TEST_ID}
      />,
    );

    const element = await screen.findByTestId(TEST_ID);
    expect(element.props.hitSlop).toBe(TEST_HIT_SLOP);
  });

  test('hitSlopX가 정상적으로 전달되는지 테스트', async () => {
    render(
      <PressableHitSlop
        hitSlopX={TEST_HIT_SLOP}
        testID={TEST_ID}
      />,
    );

    const TestHitSlop: Insets = {
      top: 0,
      bottom: 0,
      left: TEST_HIT_SLOP,
      right: TEST_HIT_SLOP,
    };

    const element = await screen.findByTestId(TEST_ID);
    expect(element.props.hitSlop).toMatchObject(TestHitSlop);
  });

  test('hitSlopY가 정상적으로 전달되는지 테스트', async () => {
    render(
      <PressableHitSlop
        hitSlopY={TEST_HIT_SLOP}
        testID={TEST_ID}
      />,
    );

    const TestHitSlop: Insets = {
      top: TEST_HIT_SLOP,
      bottom: TEST_HIT_SLOP,
      left: 0,
      right: 0,
    };

    const element = await screen.findByTestId(TEST_ID);
    expect(element.props.hitSlop).toMatchObject(TestHitSlop);
  });
});
