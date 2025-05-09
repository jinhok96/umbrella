/**
 * @jest-environment jsdom
 */
import type { PropsWithChildren } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';

import ErrorBoundary from 'react-native-error-boundary';

import { templateService } from '@services/template/axios';
import { TEMPLATE_SERVICE_MOCK } from '@services/template/mock/test.mock';
import { useGetTemplate } from '@services/template/query';

// 서비스 모듈 모킹
jest.mock('@services/template/axios', () => ({
  templateService: {
    getTemplate: jest.fn(),
  },
}));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('templateService Hooks', () => {
  let container: HTMLDivElement | null;

  beforeEach(() => {
    jest.clearAllMocks();
    queryClient.clear();

    // 터미널에 console.error 표시되지 않도록 console.error 모킹
    jest.spyOn(console, 'error').mockImplementation(() => {});

    // 테스트 컨테이너 생성
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    jest.restoreAllMocks();

    // 테스트 컨테이너 제거
    container?.remove();
    container = null;
  });

  const errorMessageMock = TEMPLATE_SERVICE_MOCK.HTTP_CLIENT_ERROR.statusText;

  /**
   * useGetTemplate 테스트
   * @jinhok96 25.05.07
   */
  describe('useGetTemplate', () => {
    const service = templateService.getTemplate as jest.Mock;
    const useHook = useGetTemplate;
    const mock = TEMPLATE_SERVICE_MOCK.GET_TEMPLATE;

    test('API 응답 성공', async () => {
      service.mockResolvedValue(mock.RESPONSE);

      const { result } = renderHook(() => useHook(mock.PARAMS), {
        wrapper,
      });

      await waitFor(() => {
        expect(result.current.isSuccess).toBe(true);
        expect(result.current.data).toEqual(mock.RESPONSE);
      });
    });

    test('에러 throw 테스트', async () => {
      service.mockRejectedValue(new Error(errorMessageMock));

      function TestComponent() {
        useHook(mock.PARAMS);
        return null;
      }

      await act(async () => {
        render(
          <ErrorBoundary
            FallbackComponent={error => <div>{error.error.message}</div>}
            onError={error => {
              expect(error).toBeInstanceOf(Error);
              expect(error.message).toBe(errorMessageMock);
            }}>
            {wrapper({ children: <TestComponent /> })}
          </ErrorBoundary>,
        );
      });

      expect(screen.queryByText(errorMessageMock)?.textContent).toBe(errorMessageMock);
    });
  });
});
