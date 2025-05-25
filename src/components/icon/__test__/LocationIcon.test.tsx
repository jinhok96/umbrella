import { render, screen } from '@testing-library/react-native';

import LocationIcon from '@components/icon/LocationIcon';

const TEST_ID = 'testId';

describe('LocationIcon', () => {
  test('filled=false일 때 정상적으로 렌더링되는지 테스트', async () => {
    render(<LocationIcon testID={TEST_ID} />);

    const element = await screen.findByTestId(TEST_ID);
    expect(element).toBeOnTheScreen();
  });

  test('filled=true일 때 정상적으로 렌더링되는지 테스트', async () => {
    render(
      <LocationIcon
        testID={TEST_ID}
        filled
      />,
    );

    const element = await screen.findByTestId(TEST_ID);
    expect(element).toBeOnTheScreen();
  });
});
