import { render, screen } from '@testing-library/react-native';

import ChecklistUmbrellaIcon from '@components/icon/checklist/ChecklistUmbrellaIcon';

const TEST_ID = 'testId';

describe('ChecklistUmbrellaIcon', () => {
  test('렌더링되는지 테스트', async () => {
    render(<ChecklistUmbrellaIcon testID={TEST_ID} />);

    const element = await screen.findByTestId(TEST_ID);
    expect(element).toBeOnTheScreen();
  });
});
