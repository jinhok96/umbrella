import { Text } from 'react-native';

import { render, screen } from '@testing-library/react-native';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

import SafeView from '@components/common/SafeView';

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

describe('SafeView', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('children을 정상적으로 렌더링하는지 테스트', async () => {
    const childrenText = 'Test Children';

    render(
      <SafeView testID="safeView">
        <Text>{childrenText}</Text>
      </SafeView>,
    );

    const children = await screen.findByText(childrenText);
    expect(children).toBeOnTheScreen();
  });
});
