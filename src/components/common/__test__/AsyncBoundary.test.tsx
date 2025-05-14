/**
 * @jest-environment jsdom
 */

import { act, render, screen } from '@testing-library/react';

import AsyncBoundary from '@components/common/AsyncBoundary';

describe('AsyncBoundary', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('children을 정상적으로 렌더링하는지 테스트', () => {
    const childrenText = 'Test Children';

    act(() => {
      render(
        <AsyncBoundary>
          <div>{childrenText}</div>
        </AsyncBoundary>,
      );
    });

    expect(screen.queryByText(childrenText)?.textContent).toBe(childrenText);
  });

  test('에러 발생 시 errorFallback이 렌더링되는지 테스트', () => {
    const errorText = 'Test Error';

    function TestComponent({ isError }: { isError: boolean }) {
      if (isError) throw new Error(errorText);
      return null;
    }

    act(() => {
      render(
        <AsyncBoundary errorFallback={error => <div>{error.error.message}</div>}>
          <TestComponent isError />
        </AsyncBoundary>,
      );
    });

    expect(screen.queryByText(errorText)?.textContent).toBe(errorText);
  });

  test('로딩 중일 때 loadingFallback이 렌더링되는지 테스트', () => {
    const loadingText = 'Test Loading';

    function TestComponent({ isLoading }: { isLoading: boolean }) {
      if (isLoading) throw new Promise(() => {});
      return null;
    }

    act(() => {
      render(
        <AsyncBoundary loadingFallback={<div>{loadingText}</div>}>
          <TestComponent isLoading />
        </AsyncBoundary>,
      );
    });

    expect(screen.queryByText(loadingText)?.textContent).toBe(loadingText);
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

    act(() => {
      render(
        <AsyncBoundary
          onError={(error, stackTrace) => {
            onErrorResult.errorMessage = error.message;
            onErrorResult.stackTrace = stackTrace;
          }}>
          <TestComponent isError />
        </AsyncBoundary>,
      );
    });

    expect(onErrorResult.errorMessage).toBe(errorText);
    expect(onErrorResult.stackTrace).not.toBe('');
  });
});
