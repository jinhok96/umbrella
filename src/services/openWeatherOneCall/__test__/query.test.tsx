/**
 * @jest-environment jsdom
 */
import { ReactNode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, render, renderHook, waitFor } from '@testing-library/react';

import ErrorBoundary from 'react-native-error-boundary';

import { openWeatherOneCallService } from '@services/openWeatherOneCall/axios';
import { OPEN_WEATHER_ONE_CALL_SERVICE_MOCK } from '@services/openWeatherOneCall/mock/mock';
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

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('OpenWeatherOneCallService Hooks', () => {
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

  const errorMessageMock = OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.HTTP_CLIENT_ERROR.statusText;

  /**
   * useGetCurrentAndForecastsWeatherData 테스트
   * @jinhok96 25.05.07
   */
  describe('useGetCurrentAndForecastsWeatherData', () => {
    const service = openWeatherOneCallService.getCurrentAndForecastsWeatherData as jest.Mock;
    const mock = OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.GET_CURRENT_AND_FORECASTS_WEATHER_DATA;

    test('API 응답 성공', async () => {
      service.mockResolvedValue(mock.RESPONSE);

      const { result } = renderHook(() => useGetCurrentAndForecastsWeatherData(mock.PARAMS), { wrapper });

      await waitFor(() => {
        expect(result.current.isSuccess).toBe(true);
        expect(result.current.data).toEqual(mock.RESPONSE);
      });
    });

    test('에러 throw 테스트', async () => {
      service.mockRejectedValue(new Error(errorMessageMock));

      function TestComponent() {
        useGetCurrentAndForecastsWeatherData(mock.PARAMS);
        return null;
      }

      await act(async () => {
        render(
          <ErrorBoundary
            onError={error => {
              expect(error).toBeInstanceOf(Error);
              expect(error.message).toBe(errorMessageMock);
            }}>
            {wrapper({ children: <TestComponent /> })}
          </ErrorBoundary>,
        );
      });
    });
  });

  /**
   * useGetWeatherDataForTimestamp 테스트
   * @jinhok96 25.05.07
   */
  describe('useGetWeatherDataForTimestamp', () => {
    const service = openWeatherOneCallService.getWeatherDataForTimestamp as jest.Mock;
    const mock = OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.GET_WEATHER_DATA_FOR_TIMESTAMP;

    test('API 응답 성공', async () => {
      service.mockResolvedValue(mock.RESPONSE);

      const { result } = renderHook(() => useGetWeatherDataForTimestamp(mock.PARAMS), { wrapper });

      await waitFor(() => {
        expect(result.current.isSuccess).toBe(true);
        expect(result.current.data).toEqual(mock.RESPONSE);
      });
    });

    test('에러 throw 테스트', async () => {
      service.mockRejectedValue(new Error(errorMessageMock));

      function TestComponent() {
        useGetWeatherDataForTimestamp(mock.PARAMS);
        return null;
      }

      await act(async () => {
        render(
          <ErrorBoundary
            onError={error => {
              expect(error).toBeInstanceOf(Error);
              expect(error.message).toBe(errorMessageMock);
            }}>
            {wrapper({ children: <TestComponent /> })}
          </ErrorBoundary>,
        );
      });
    });
  });

  /**
   * useGetDailyAggregation 테스트
   * @jinhok96 25.05.07
   */
  describe('useGetDailyAggregation', () => {
    const service = openWeatherOneCallService.getDailyAggregation as jest.Mock;
    const mock = OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.GET_DAILY_AGGREGATION;

    test('API 응답 성공', async () => {
      service.mockResolvedValue(mock.RESPONSE);

      const { result } = renderHook(() => useGetDailyAggregation(mock.PARAMS), { wrapper });

      await waitFor(() => {
        expect(result.current.isSuccess).toBe(true);
        expect(result.current.data).toEqual(mock.RESPONSE);
      });
    });

    test('에러 throw 테스트', async () => {
      service.mockRejectedValue(new Error(errorMessageMock));

      function TestComponent() {
        useGetDailyAggregation(mock.PARAMS);
        return null;
      }

      await act(async () => {
        render(
          <ErrorBoundary
            onError={error => {
              expect(error).toBeInstanceOf(Error);
              expect(error.message).toBe(errorMessageMock);
            }}>
            {wrapper({ children: <TestComponent /> })}
          </ErrorBoundary>,
        );
      });
    });
  });
});
