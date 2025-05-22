import { render, screen } from '@testing-library/react-native';

import ChecklistSuncreamIcon from '@components/icon/checklist/ChecklistSuncreamIcon';

const TEST_ID = 'testId';

describe('ChecklistSuncreamIcon', () => {
  test('렌더링되는지 테스트', async () => {
    render(<ChecklistSuncreamIcon testID={TEST_ID} />);

    const element = await screen.findByTestId(TEST_ID);
    expect(element).toBeOnTheScreen();
  });
});
