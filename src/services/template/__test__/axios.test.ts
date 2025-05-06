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

  /**
   * getTemplate 테스트
   * @jinhok96 25.05.06
   */
  describe('getTemplate', () => {
    test('API 응답 성공', async () => {
      jest.spyOn(templateServiceAxiosInstance, 'get').mockResolvedValue(TEMPLATE_SERVICE_MOCK.GET_TEMPLATE.RESPONSE);

      const response = await templateService.getTemplate(TEMPLATE_SERVICE_MOCK.GET_TEMPLATE.PARAMS);
      expect(response).toMatchObject(TEMPLATE_SERVICE_MOCK.GET_TEMPLATE.RESPONSE);
    });

    test('유효한 HttpClient 에러 throw 테스트', async () => {
      jest.spyOn(templateServiceAxiosInstance, 'get').mockRejectedValue(TEMPLATE_SERVICE_MOCK.HTTP_CLIENT_ERROR);

      try {
        await templateService.getTemplate(TEMPLATE_SERVICE_MOCK.GET_TEMPLATE.PARAMS);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toBe(TEMPLATE_SERVICE_MOCK.HTTP_CLIENT_ERROR.statusText);
      }
    });

    test('유효하지 않은 HttpClient 에러 throw 테스트', async () => {
      jest.spyOn(templateServiceAxiosInstance, 'get').mockRejectedValue('error');

      try {
        await templateService.getTemplate(TEMPLATE_SERVICE_MOCK.GET_TEMPLATE.PARAMS);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toBe(HTTP_CLIENT_STATUS_LIST.INVALID_HTTP_CLIENT_ERROR.statusText);
      }
    });
  });
});
