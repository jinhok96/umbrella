import { HTTP_CLIENT_STATUS_LIST } from '@services/httpClient/status';
import { templateService, templateServiceAxiosInstance } from '@services/template/axios';
import { TEMPLATE_SERVICE_MOCK } from '@services/template/mock/mock';

describe('templateService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const errorMock = TEMPLATE_SERVICE_MOCK.HTTP_CLIENT_ERROR;
  const invalidHttpClientErrorMock = HTTP_CLIENT_STATUS_LIST.INVALID_HTTP_CLIENT_ERROR.statusText;

  /**
   * getTemplate 테스트
   * @jinhok96 25.05.06
   */
  describe('getTemplate', () => {
    const mock = TEMPLATE_SERVICE_MOCK.GET_TEMPLATE;

    test('API 응답 성공', async () => {
      jest.spyOn(templateServiceAxiosInstance, 'get').mockResolvedValue(mock.RESPONSE);

      const response = await templateService.getTemplate(mock.PARAMS);
      expect(response).toMatchObject(mock.RESPONSE);
    });

    test('유효한 HttpClient 에러 throw 테스트', async () => {
      jest.spyOn(templateServiceAxiosInstance, 'get').mockRejectedValue(errorMock);

      try {
        await templateService.getTemplate(mock.PARAMS);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toBe(errorMock.statusText);
      }
    });

    test('유효하지 않은 HttpClient 에러 throw 테스트', async () => {
      jest.spyOn(templateServiceAxiosInstance, 'get').mockRejectedValue('error');

      try {
        await templateService.getTemplate(mock.PARAMS);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toBe(invalidHttpClientErrorMock);
      }
    });
  });
});
