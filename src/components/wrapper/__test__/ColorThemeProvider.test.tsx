import { Text } from 'react-native';

import { render, screen } from '@testing-library/react-native';

import ColorThemeProvider from '@components/wrapper/ColorThemeProvider';

describe('ColorThemeProvider', () => {
  test('children이 정상적으로 렌더링되는지 테스트', async () => {
    const testChildren = 'Test Children';

    render(
      <ColorThemeProvider>
        <Text>{testChildren}</Text>
      </ColorThemeProvider>,
    );

    const children = await screen.findByText(testChildren);
    expect(children).toBeOnTheScreen();
  });
});
