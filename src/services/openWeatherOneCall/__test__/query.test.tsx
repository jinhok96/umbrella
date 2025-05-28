import { Text } from 'react-native';

import { render, renderHook, screen, waitFor } from '@testing-library/react-native';

import { TestQueryClientProvider, testQueryClient } from '@components/testComponent/TestQueryClientProvider';
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

describe('OpenWeatherOneCallService Hooks', () => {
  beforeEach(() => {
    // 터미널에 console.error 표시되지 않도록 console.error 모킹
    jest.spyOn(console, 'error').mockImplementation(() => {});
    testQueryClient.clear();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const errorMessageMock = OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.HTTP_CLIENT_ERROR.statusText;

  /**
   * useGetCurrentAndForecastsWeatherData 테스트
   * @jinhok96 25.05.20
   */
  describe('useGetCurrentAndForecastsWeatherData', () => {
    const service = openWeatherOneCallService.getCurrentAndForecastsWeatherData as jest.Mock;
    const useHook = useGetCurrentAndForecastsWeatherData;
    const mock = OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.GET_CURRENT_AND_FORECASTS_WEATHER_DATA;

    test('API 응답 성공', async () => {
      service.mockResolvedValue(mock.RESPONSE);

      const { result } = renderHook(() => useHook(mock.PARAMS), { wrapper: TestQueryClientProvider });

      await waitFor(() => {
        expect(result.current.isSuccess).toBe(true);
      });

      expect(result.current.data).toEqual(mock.RESPONSE);
    });

    test('에러 throw 테스트', async () => {
      service.mockRejectedValue(new Error(errorMessageMock));

      function TestComponent() {
        useHook(mock.PARAMS);
        return null;
      }

      function FallbackComponent({ error }: { error: Error }) {
        return <Text>{error.message}</Text>;
      }

      render(
        <TestQueryClientProvider FallbackComponent={({ error }) => <FallbackComponent error={error} />}>
          <TestComponent />
        </TestQueryClientProvider>,
      );

      const children = await screen.findByText(errorMessageMock);
      expect(children).toBeOnTheScreen();
    });
  });

  /**
   * useGetWeatherDataForTimestamp 테스트
   * @jinhok96 25.05.20
   */
  describe('useGetWeatherDataForTimestamp', () => {
    const service = openWeatherOneCallService.getWeatherDataForTimestamp as jest.Mock;
    const useHook = useGetWeatherDataForTimestamp;
    const mock = OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.GET_WEATHER_DATA_FOR_TIMESTAMP;

    test('API 응답 성공', async () => {
      service.mockResolvedValue(mock.RESPONSE);

      const { result } = renderHook(() => useHook(mock.PARAMS), {
        wrapper: TestQueryClientProvider,
      });

      await waitFor(() => {
        expect(result.current.isSuccess).toBe(true);
      });

      expect(result.current.data).toEqual(mock.RESPONSE);
    });

    test('에러 throw 테스트', async () => {
      service.mockRejectedValue(new Error(errorMessageMock));

      function TestComponent() {
        useHook(mock.PARAMS);
        return null;
      }

      function FallbackComponent({ error }: { error: Error }) {
        return <Text>{error.message}</Text>;
      }

      render(
        <TestQueryClientProvider FallbackComponent={({ error }) => <FallbackComponent error={error} />}>
          <TestComponent />
        </TestQueryClientProvider>,
      );

      const children = await screen.findByText(errorMessageMock);
      expect(children).toBeOnTheScreen();
    });
  });

  /**
   * useGetDailyAggregation 테스트
   * @jinhok96 25.05.20
   */
  describe('useGetDailyAggregation', () => {
    const service = openWeatherOneCallService.getDailyAggregation as jest.Mock;
    const useHook = useGetDailyAggregation;
    const mock = OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.GET_DAILY_AGGREGATION;

    test('API 응답 성공', async () => {
      service.mockResolvedValue(mock.RESPONSE);

      const { result } = renderHook(() => useHook(mock.PARAMS), {
        wrapper: TestQueryClientProvider,
      });

      await waitFor(() => {
        expect(result.current.isSuccess).toBe(true);
      });

      expect(result.current.data).toEqual(mock.RESPONSE);
    });

    test('에러 throw 테스트', async () => {
      service.mockRejectedValue(new Error(errorMessageMock));

      function TestComponent() {
        useHook(mock.PARAMS);
        return null;
      }

      function FallbackComponent({ error }: { error: Error }) {
        return <Text>{error.message}</Text>;
      }

      render(
        <TestQueryClientProvider FallbackComponent={({ error }) => <FallbackComponent error={error} />}>
          <TestComponent />
        </TestQueryClientProvider>,
      );

      const children = await screen.findByText(errorMessageMock);
      expect(children).toBeOnTheScreen();
    });
  });
});
