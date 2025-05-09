import { getHttpClientStatusMessage } from '@services/httpClient/httpClient.util';
import { templateService, templateServiceAxiosInstance } from '@services/template/axios';
import { TEMPLATE_SERVICE_MOCK } from '@services/template/mock/test.mock';

describe('templateService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const errorMock = TEMPLATE_SERVICE_MOCK.HTTP_CLIENT_ERROR;
  const invalidHttpClientErrorMock = getHttpClientStatusMessage('10003');

  /**
   * getTemplate 테스트
   * @jinhok96 25.05.07
   */
  describe('getTemplate', () => {
    const axiosInstance = () => jest.spyOn(templateServiceAxiosInstance, 'get');
    const service = templateService.getTemplate;
    const mock = TEMPLATE_SERVICE_MOCK.GET_TEMPLATE;

    test('API 응답 성공', async () => {
      axiosInstance().mockResolvedValue(mock.RESPONSE);

      const response = await service(mock.PARAMS);
      expect(response).toMatchObject(mock.RESPONSE);
    });

    test('유효한 HttpClient 에러 throw 테스트', async () => {
      axiosInstance().mockRejectedValue(errorMock);

      try {
        await service(mock.PARAMS);
        throw new Error('Test Failed: Error has not been thrown');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toBe(errorMock.statusText); // 내부 로직에 맞게 변경해서 사용
      }
    });

    test('유효하지 않은 HttpClient 에러 throw 테스트', async () => {
      axiosInstance().mockRejectedValue('error');

      try {
        await service(mock.PARAMS);
        throw new Error('Test Failed: Error has not been thrown');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toBe(invalidHttpClientErrorMock);
      }
    });
  });
});
