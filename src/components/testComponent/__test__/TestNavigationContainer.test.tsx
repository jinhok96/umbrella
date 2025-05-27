import React from 'react';
import { Text } from 'react-native';

import { render, screen } from '@testing-library/react-native';

import TestNavigationContainer from '@components/testComponent/TestNavigationContainer';

describe('TestNavigationContainer', () => {
  test('children이 정상적으로 렌더링되는지 테스트', async () => {
    const childrenText = 'Test Children';

    render(
      <TestNavigationContainer>
        <Text>{childrenText}</Text>
      </TestNavigationContainer>,
    );

    const children = await screen.findByText(childrenText);
    expect(children).toBeOnTheScreen();
  });
});
