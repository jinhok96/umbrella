import { Text } from 'react-native';

import { render, renderHook, screen, waitFor } from '@testing-library/react-native';

import { googleMapsService } from '@services/googleMaps/axios';
import { GOOGLE_MAPS_SERVICE_MOCK } from '@services/googleMaps/mock/test.mock';
import {
  useGetAirQualityHourlyForecasts,
  useGetAutocompleteRegions,
  useGetCurrentAirQuality,
  useGetPlaceGeocoding,
  useGetReverseGeocoding,
} from '@services/googleMaps/query';
import { TestQueryClientProvider, testQueryClient } from '@services/test.util';

// 서비스 모듈 모킹
jest.mock('@services/googleMaps/axios', () => ({
  googleMapsService: {
    postAutocompleteRegions: jest.fn(),
    getPlaceGeocoding: jest.fn(),
    getReverseGeocoding: jest.fn(),
    postCurrentAirQuality: jest.fn(),
    postAirQualityHourlyForecasts: jest.fn(),
  },
}));

describe('googleMapsService Hooks - Places, Geocoding', () => {
  beforeEach(() => {
    // 터미널에 console.error 표시되지 않도록 console.error 모킹
    jest.spyOn(console, 'error').mockImplementation(() => {});
    testQueryClient.clear();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const errorMessageMock = GOOGLE_MAPS_SERVICE_MOCK.HTTP_CLIENT_PLACES_GEOCODING_ERROR.statusText;

  /**
   * useGetAutocompleteRegions 테스트
   * @jinhok96 25.05.20
   */
  describe('useGetAutocompleteRegions', () => {
    const service = googleMapsService.postAutocompleteRegions as jest.Mock;
    const useHook = useGetAutocompleteRegions;
    const mock = GOOGLE_MAPS_SERVICE_MOCK.POST_AUTOCOMPLETE_REGIONS;

    test('API 응답 성공', async () => {
      service.mockResolvedValue(mock.RESPONSE);

      const { result } = renderHook(() => useHook(mock.USE_PARAMS), {
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
        useHook(mock.USE_PARAMS);
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
   * useGetPlaceGeocoding 테스트
   * @jinhok96 25.05.20
   */
  describe('useGetPlaceGeocoding', () => {
    const service = googleMapsService.getPlaceGeocoding as jest.Mock;
    const useHook = useGetPlaceGeocoding;
    const mock = GOOGLE_MAPS_SERVICE_MOCK.GET_PLACE_GEOCODING;

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
   * useGetReverseGeocoding 테스트
   * @jinhok96 25.05.20
   */
  describe('useGetReverseGeocoding', () => {
    const service = googleMapsService.getReverseGeocoding as jest.Mock;
    const useHook = useGetReverseGeocoding;
    const mock = GOOGLE_MAPS_SERVICE_MOCK.GET_REVERSE_GEOCODING;

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

describe('googleMapsService Hooks - Air Quality', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    testQueryClient.clear();

    // 터미널에 console.error 표시되지 않도록 console.error 모킹
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const errorMessageMock = GOOGLE_MAPS_SERVICE_MOCK.HTTP_CLIENT_AIR_QUALITY_ERROR.statusText;

  /**
   * useGetCurrentAirQuality 테스트
   * @jinhok96 25.05.20
   */
  describe('useGetCurrentAirQuality', () => {
    const service = googleMapsService.postCurrentAirQuality as jest.Mock;
    const useHook = useGetCurrentAirQuality;
    const mock = GOOGLE_MAPS_SERVICE_MOCK.POST_CURRENT_AIR_QUALITY;

    test('API 응답 성공', async () => {
      service.mockResolvedValue(mock.RESPONSE);

      const { result } = renderHook(() => useHook(mock.USE_PARAMS), {
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
        useHook(mock.USE_PARAMS);
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
   * useGetCurrentAirQuality 테스트
   * @jinhok96 25.05.20
   */
  describe('useGetAirQualityHourlyForecasts', () => {
    const service = googleMapsService.postAirQualityHourlyForecasts as jest.Mock;
    const useHook = useGetAirQualityHourlyForecasts;
    const mock = GOOGLE_MAPS_SERVICE_MOCK.POST_AIR_QUALITY_HOURLY_FORECASTS;

    test('API 응답 성공', async () => {
      service.mockResolvedValue(mock.RESPONSE);

      const { result } = renderHook(() => useHook(mock.USE_PARAMS), {
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
        useHook(mock.USE_PARAMS);
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
