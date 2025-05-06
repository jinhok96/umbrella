/**
 * @jest-environment jsdom
 */
import { ReactNode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, render, renderHook, waitFor } from '@testing-library/react';

import ErrorBoundary from 'react-native-error-boundary';

import { templateService } from '@services/template/axios';
import { TEMPLATE_SERVICE_MOCK } from '@services/template/mock/mock';
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

const wrapper = ({ children }: { children: ReactNode }) => (
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

  /**
   * useGetTemplate 테스트
   * @jinhok96 25.05.06
   */
  describe('useGetTemplate', () => {
    test('API 응답 성공', async () => {
      (templateService.getTemplate as jest.Mock).mockResolvedValue(TEMPLATE_SERVICE_MOCK.GET_TEMPLATE.RESPONSE);

      const { result } = renderHook(() => useGetTemplate(TEMPLATE_SERVICE_MOCK.GET_TEMPLATE.PARAMS), {
        wrapper,
      });

      await waitFor(() => {
        expect(result.current.isSuccess).toBe(true);
        expect(result.current.data).toEqual(TEMPLATE_SERVICE_MOCK.GET_TEMPLATE.RESPONSE);
      });
    });

    test('에러 throw 테스트', async () => {
      (templateService.getTemplate as jest.Mock).mockRejectedValue(
        new Error(TEMPLATE_SERVICE_MOCK.HTTP_CLIENT_ERROR.statusText),
      );

      function TestComponent() {
        useGetTemplate(TEMPLATE_SERVICE_MOCK.GET_TEMPLATE.PARAMS);
        return null;
      }

      await act(async () => {
        render(
          <ErrorBoundary
            onError={error => {
              expect(error).toBeInstanceOf(Error);
              expect(error.message).toBe(TEMPLATE_SERVICE_MOCK.HTTP_CLIENT_ERROR.statusText);
            }}>
            {wrapper({ children: <TestComponent /> })}
          </ErrorBoundary>,
        );
      });
    });
  });
});
