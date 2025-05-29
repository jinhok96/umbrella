import { Text } from 'react-native';

import { render, screen } from '@testing-library/react-native';

import AsyncBoundary from '@components/wrapper/AsyncBoundary';

describe('AsyncBoundary', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('children을 정상적으로 렌더링하는지 테스트', async () => {
    const childrenText = 'Test Children';

    render(
      <AsyncBoundary>
        <Text>{childrenText}</Text>
      </AsyncBoundary>,
    );

    const children = await screen.findByText(childrenText);
    expect(children).toBeOnTheScreen();
  });

  test('에러 발생 시 errorFallback이 렌더링되는지 테스트', async () => {
    const errorText = 'Test Error';

    function TestComponent({ isError }: { isError: boolean }) {
      if (isError) throw new Error(errorText);
      return null;
    }

    render(
      <AsyncBoundary errorFallback={error => <Text>{error.error.message}</Text>}>
        <TestComponent isError />
      </AsyncBoundary>,
    );

    const children = await screen.findByText(errorText);
    expect(children).toBeOnTheScreen();
  });

  test('로딩 중일 때 loadingFallback이 렌더링되는지 테스트', async () => {
    const loadingText = 'Test Loading';

    function TestComponent({ isLoading }: { isLoading: boolean }) {
      if (isLoading) throw new Promise(() => {});
      return null;
    }

    render(
      <AsyncBoundary loadingFallback={<Text>{loadingText}</Text>}>
        <TestComponent isLoading />
      </AsyncBoundary>,
    );

    const children = await screen.findByText(loadingText);
    expect(children).toBeOnTheScreen();
  });

  test('onError 콜백이 에러 발생 시 호출되는지 테스트', () => {
    const errorText = 'Test Error';

    function TestComponent({ isError }: { isError: boolean }) {
      if (isError) throw new Error(errorText);
      return null;
    }

    const onErrorResult = {
      errorMessage: '',
      stackTrace: '',
    };

    render(
      <AsyncBoundary
        onError={(error, stackTrace) => {
          onErrorResult.errorMessage = error.message;
          onErrorResult.stackTrace = stackTrace;
        }}
      >
        <TestComponent isError />
      </AsyncBoundary>,
    );

    expect(onErrorResult.errorMessage).toBe(errorText);
    expect(onErrorResult.stackTrace).not.toBe('');
  });
});
