import { Text } from 'react-native';

import { render, screen, waitFor } from '@testing-library/react-native';

import Show from '@components/common/Show';

describe('Show', () => {
  test('children을 정상적으로 렌더링하는지 테스트', async () => {
    const childrenText = 'Test Children';

    render(
      <Show when={true}>
        <Text>{childrenText}</Text>
      </Show>,
    );

    const children = await screen.findByText(childrenText);
    expect(children).toBeOnTheScreen();
  });

  test('fallback을 정상적으로 렌더링하는지 테스트', async () => {
    const childrenText = 'Test Children';
    const fallbackText = 'Test Fallback';

    render(
      <Show
        when={false}
        fallback={<Text>{fallbackText}</Text>}
      >
        <Text>{childrenText}</Text>
      </Show>,
    );

    const fallback = await screen.findByText(fallbackText);
    expect(fallback).toBeOnTheScreen();

    await waitFor(() => {
      const children = screen.queryByText(childrenText);
      expect(children).not.toBeOnTheScreen();
    });
  });
});
