import { render, screen } from '@testing-library/react-native';

import EmptyIcon from '@components/icon/EmptyIcon';

const TEST_ID = 'testId';

describe('EmptyIcon', () => {
  test('렌더링되는지 테스트', async () => {
    render(<EmptyIcon testID={TEST_ID} />);

    const element = await screen.findByTestId(TEST_ID);
    expect(element).toBeOnTheScreen();
  });
});
