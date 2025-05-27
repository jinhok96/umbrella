import { render, screen } from '@testing-library/react-native';

import HelpCircleIcon from '@components/icon/HelpCircleIcon';

const TEST_ID = 'testId';

describe('HelpCircleIcon', () => {
  test('pressed=false일 때 정상적으로 렌더링되는지 테스트', async () => {
    render(<HelpCircleIcon testID={TEST_ID} />);

    const element = await screen.findByTestId(TEST_ID);
    expect(element).toBeOnTheScreen();
  });

  test('pressed=true일 때 정상적으로 렌더링되는지 테스트', async () => {
    render(
      <HelpCircleIcon
        testID={TEST_ID}
        pressed
      />,
    );

    const element = await screen.findByTestId(TEST_ID);
    expect(element).toBeOnTheScreen();
  });
});
