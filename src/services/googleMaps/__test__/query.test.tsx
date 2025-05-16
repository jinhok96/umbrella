/**
 * @jest-environment jsdom
 */
import type { PropsWithChildren } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';

import ErrorBoundary from 'react-native-error-boundary';

import { googleMapsService } from '@services/googleMaps/axios';
import { GOOGLE_MAPS_SERVICE_MOCK } from '@services/googleMaps/mock/test.mock';
import { useGetAutocompleteRegions, useGetPlaceGeocoding, useGetReverseGeocoding } from '@services/googleMaps/query';

// 서비스 모듈 모킹
jest.mock('@services/googleMaps/axios', () => ({
  googleMapsService: {
    postAutocompleteRegions: jest.fn(),
    getPlaceGeocoding: jest.fn(),
    getReverseGeocoding: jest.fn(),
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
  beforeEach(() => {
    jest.clearAllMocks();
    queryClient.clear();

    // 터미널에 console.error 표시되지 않도록 console.error 모킹
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const errorMessageMock = GOOGLE_MAPS_SERVICE_MOCK.HTTP_CLIENT_PLACES_GEOCODING_ERROR.statusText;

  /**
   * useGetAutocompleteRegions 테스트
   * @jinhok96 25.05.16
   */
  describe('useGetAutocompleteRegions', () => {
    const service = googleMapsService.postAutocompleteRegions as jest.Mock;
    const useHook = useGetAutocompleteRegions;
    const mock = GOOGLE_MAPS_SERVICE_MOCK.POST_AUTOCOMPLETE_REGIONS;

    test('API 응답 성공', async () => {
      service.mockResolvedValue(mock.RESPONSE);

      const { result } = renderHook(() => useHook(mock.PAYLOAD), { wrapper });

      await waitFor(() => {
        expect(result.current.isSuccess).toBe(true);
        expect(result.current?.data).toEqual(mock.RESPONSE);
      });
    });

    test('에러 throw 테스트', async () => {
      service.mockRejectedValue(new Error(errorMessageMock));

      function TestComponent() {
        useHook(mock.PAYLOAD);
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
   * useGetPlaceGeocoding 테스트
   * @jinhok96 25.05.16
   */
  describe('useGetPlaceGeocoding', () => {
    const service = googleMapsService.getPlaceGeocoding as jest.Mock;
    const useHook = useGetPlaceGeocoding;
    const mock = GOOGLE_MAPS_SERVICE_MOCK.GET_PLACE_GEOCODING;

    test('API 응답 성공', async () => {
      service.mockResolvedValue(mock.RESPONSE);

      const { result } = renderHook(() => useHook(mock.PARAMS), { wrapper });

      await waitFor(() => {
        expect(result.current.isSuccess).toBe(true);
        expect(result.current?.data).toEqual(mock.RESPONSE);
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
   * useGetReverseGeocoding 테스트
   * @jinhok96 25.05.16
   */
  describe('useGetReverseGeocoding', () => {
    const service = googleMapsService.getReverseGeocoding as jest.Mock;
    const useHook = useGetReverseGeocoding;
    const mock = GOOGLE_MAPS_SERVICE_MOCK.GET_REVERSE_GEOCODING;

    test('API 응답 성공', async () => {
      service.mockResolvedValue(mock.RESPONSE);

      const { result } = renderHook(() => useHook(mock.PARAMS), { wrapper });

      await waitFor(() => {
        expect(result.current.isSuccess).toBe(true);
        expect(result.current?.data).toEqual(mock.RESPONSE);
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
