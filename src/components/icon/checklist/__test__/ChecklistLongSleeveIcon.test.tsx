import { render, screen } from '@testing-library/react-native';

import ChecklistLongSleeveIcon from '@components/icon/checklist/ChecklistLongSleeveIcon';

const TEST_ID = 'testId';

describe('ChecklistLongSleeveIcon', () => {
  test('렌더링되는지 테스트', async () => {
    render(<ChecklistLongSleeveIcon testID={TEST_ID} />);

    const element = await screen.findByTestId(TEST_ID);
    expect(element).toBeOnTheScreen();
  });
});
