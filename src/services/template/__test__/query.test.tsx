import { Text } from 'react-native';

import { render, renderHook, screen, waitFor } from '@testing-library/react-native';

import { testQueryClient, TestQueryClientProvider } from '@components/testComponent/TestQueryClientProvider';
import { templateService } from '@services/template/axios';
import { TEMPLATE_SERVICE_MOCK } from '@services/template/mock/test.mock';
import { useGetTemplate } from '@services/template/query';

// 서비스 모듈 모킹
jest.mock('@services/template/axios', () => ({
  templateService: {
    getTemplate: jest.fn(),
  },
}));

describe('templateService Hooks', () => {
  beforeEach(() => {
    // 터미널에 console.error 표시되지 않도록 console.error 모킹
    jest.spyOn(console, 'error').mockImplementation(() => {});
    testQueryClient.clear();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const errorMessageMock = TEMPLATE_SERVICE_MOCK.HTTP_CLIENT_ERROR.statusText;

  /**
   * useGetTemplate 테스트
   * @jinhok96 25.05.20
   */
  describe('useGetTemplate', () => {
    const service = templateService.getTemplate as jest.Mock;
    const useHook = useGetTemplate;
    const mock = TEMPLATE_SERVICE_MOCK.GET_TEMPLATE;

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
