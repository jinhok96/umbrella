import React from 'react';
import { Text } from 'react-native';

import { render, screen } from '@testing-library/react-native';

import { TestQueryClientProvider } from '@components/test/TestQueryClientProvider';

describe('TestQueryClientProvider', () => {
  beforeAll(() => {
    // 터미널에 console.error 표시되지 않도록 console.error 모킹
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('children이 정상적으로 렌더링되는지 테스트', async () => {
    const childrenText = 'Test Children';

    render(
      <TestQueryClientProvider>
        <Text>{childrenText}</Text>
      </TestQueryClientProvider>,
    );

    const children = await screen.findByText(childrenText);
    expect(children).toBeOnTheScreen();
  });

  test('Suspense fallback이 정상적으로 동작하는지 테스트', async () => {
    const SuspenseFallbackText = 'Loading Fallback Text';
    const ChildrenComponent = React.lazy(() => new Promise(() => {}));

    render(
      <TestQueryClientProvider fallback={<Text>{SuspenseFallbackText}</Text>}>
        <ChildrenComponent />
      </TestQueryClientProvider>,
    );

    const fallback = await screen.findByText(SuspenseFallbackText);
    expect(fallback).toBeOnTheScreen();
  });

  test('ErrorBoundary가 에러를 잡아 FallbackComponent를 렌더링하는지 테스트', () => {
    const ErrorFallbackText = 'Error Fallback Text';
    const ErrorComponent = () => {
      throw new Error(ErrorFallbackText);
    };

    render(
      <TestQueryClientProvider FallbackComponent={({ error }) => <Text>{error.message}</Text>}>
        <ErrorComponent />
      </TestQueryClientProvider>,
    );

    const errorFallback = screen.getByText(ErrorFallbackText);
    expect(errorFallback).toBeOnTheScreen();
  });
});
