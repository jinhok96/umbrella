import React from 'react';
import { Text } from 'react-native';

import { render, screen } from '@testing-library/react-native';

import StyledNavigationContainer from '@navigation/_components/styledNavigationContainer/StyledNavigationContainer';

describe('StyledNavigationContainer', () => {
  test('children이 정상적으로 렌더링되는지 테스트', async () => {
    const childrenText = 'Test Children';

    render(
      <StyledNavigationContainer>
        <Text>{childrenText}</Text>
      </StyledNavigationContainer>,
    );

    const children = await screen.findByText(childrenText);
    expect(children).toBeOnTheScreen();
  });
});
