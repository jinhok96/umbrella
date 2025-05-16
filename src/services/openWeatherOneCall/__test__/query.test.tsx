/**
 * @jest-environment jsdom
 */
import type { PropsWithChildren } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';

import ErrorBoundary from 'react-native-error-boundary';

import { openWeatherOneCallService } from '@services/openWeatherOneCall/axios';
import { OPEN_WEATHER_ONE_CALL_SERVICE_MOCK } from '@services/openWeatherOneCall/mock/test.mock';
import {
  useGetCurrentAndForecastsWeatherData,
  useGetDailyAggregation,
  useGetWeatherDataForTimestamp,
} from '@services/openWeatherOneCall/query';

// 서비스 모듈 모킹
jest.mock('@services/openWeatherOneCall/axios', () => ({
  openWeatherOneCallService: {
    getCurrentAndForecastsWeatherData: jest.fn(),
    getWeatherDataForTimestamp: jest.fn(),
    getDailyAggregation: jest.fn(),
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

describe('OpenWeatherOneCallService Hooks', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    queryClient.clear();

    // 터미널에 console.error 표시되지 않도록 console.error 모킹
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const errorMessageMock = OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.HTTP_CLIENT_ERROR.statusText;

  /**
   * useGetCurrentAndForecastsWeatherData 테스트
   * @jinhok96 25.05.16
   */
  describe('useGetCurrentAndForecastsWeatherData', () => {
    const service = openWeatherOneCallService.getCurrentAndForecastsWeatherData as jest.Mock;
    const useHook = useGetCurrentAndForecastsWeatherData;
    const mock = OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.GET_CURRENT_AND_FORECASTS_WEATHER_DATA;

    test('API 응답 성공', async () => {
      service.mockResolvedValue(mock.RESPONSE);

      const { result } = renderHook(() => useHook(mock.PARAMS), { wrapper });

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

      await waitFor(() => {
        expect(screen.queryByText(errorMessageMock)?.textContent).toBe(errorMessageMock);
      });
    });
  });

  /**
   * useGetWeatherDataForTimestamp 테스트
   * @jinhok96 25.05.16
   */
  describe('useGetWeatherDataForTimestamp', () => {
    const service = openWeatherOneCallService.getWeatherDataForTimestamp as jest.Mock;
    const useHook = useGetWeatherDataForTimestamp;
    const mock = OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.GET_WEATHER_DATA_FOR_TIMESTAMP;

    test('API 응답 성공', async () => {
      service.mockResolvedValue(mock.RESPONSE);

      const { result } = renderHook(() => useHook(mock.PARAMS), { wrapper });

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

      await waitFor(() => {
        expect(screen.queryByText(errorMessageMock)?.textContent).toBe(errorMessageMock);
      });
    });
  });

  /**
   * useGetDailyAggregation 테스트
   * @jinhok96 25.05.16
   */
  describe('useGetDailyAggregation', () => {
    const service = openWeatherOneCallService.getDailyAggregation as jest.Mock;
    const useHook = useGetDailyAggregation;
    const mock = OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.GET_DAILY_AGGREGATION;

    test('API 응답 성공', async () => {
      service.mockResolvedValue(mock.RESPONSE);

      const { result } = renderHook(() => useHook(mock.PARAMS), { wrapper });

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

      await waitFor(() => {
        expect(screen.queryByText(errorMessageMock)?.textContent).toBe(errorMessageMock);
      });
    });
  });
});
