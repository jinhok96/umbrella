import { render, screen } from '@testing-library/react-native';

import ChecklistMaskIcon from '@components/icon/checklist/ChecklistMaskIcon';

const TEST_ID = 'testId';

describe('ChecklistMaskIcon', () => {
  test('렌더링되는지 테스트', async () => {
    render(<ChecklistMaskIcon testID={TEST_ID} />);

    const element = await screen.findByTestId(TEST_ID);
    expect(element).toBeOnTheScreen();
  });
});
