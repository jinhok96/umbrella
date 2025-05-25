import React from 'react';
import { Text } from 'react-native';

import { render, screen } from '@testing-library/react-native';

import StyledBottomTabBarButton from '@navigation/components/StyledBottomTabBarButton';

describe('StyledBottomTabBarButton', () => {
  test('children이 정상적으로 렌더링되는지 테스트', async () => {
    const childrenText = 'Test Children';

    render(
      <StyledBottomTabBarButton>
        <Text>{childrenText}</Text>
      </StyledBottomTabBarButton>,
    );

    const children = await screen.findByText(childrenText);
    expect(children).toBeOnTheScreen();
  });
});
