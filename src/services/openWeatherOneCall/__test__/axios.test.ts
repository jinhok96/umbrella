import { HTTP_CLIENT_STATUS_LIST } from '@services/httpClient/status';
import { openWeatherOneCallAxiosInstance, openWeatherOneCallService } from '@services/openWeatherOneCall/axios';
import { OPEN_WEATHER_ONE_CALL_SERVICE_MOCK } from '@services/openWeatherOneCall/mock/mock';

describe('OpenWeatherOneCallService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const errorMock = OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.HTTP_CLIENT_ERROR;
  const invalidHttpClientErrorMock = HTTP_CLIENT_STATUS_LIST.INVALID_HTTP_CLIENT_ERROR.statusText;

  /**
   * getCurrentAndForecastsWeatherData 테스트
   * @jinhok96 25.05.06
   */
  describe('getCurrentAndForecastsWeatherData', () => {
    const mock = OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.GET_CURRENT_AND_FORECASTS_WEATHER_DATA;

    test('API 응답 성공', async () => {
      jest.spyOn(openWeatherOneCallAxiosInstance, 'get').mockResolvedValue(mock.RESPONSE);

      const response = await openWeatherOneCallService.getCurrentAndForecastsWeatherData(mock.PARAMS);
      expect(response).toMatchObject(mock.RESPONSE);
    });

    test('유효한 HttpClient 에러 throw 테스트', async () => {
      jest.spyOn(openWeatherOneCallAxiosInstance, 'get').mockRejectedValue(errorMock);

      try {
        await openWeatherOneCallService.getCurrentAndForecastsWeatherData(mock.PARAMS);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toBe(errorMock.data.message);
      }
    });

    test('유효하지 않은 HttpClient 에러 throw 테스트', async () => {
      jest.spyOn(openWeatherOneCallAxiosInstance, 'get').mockRejectedValue('error');

      try {
        await openWeatherOneCallService.getCurrentAndForecastsWeatherData(mock.PARAMS);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toBe(invalidHttpClientErrorMock);
      }
    });
  });

  /**
   * getWeatherDataForTimestamp 테스트
   * @jinhok96 25.05.06
   */
  describe('getWeatherDataForTimestamp', () => {
    const mock = OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.GET_WEATHER_DATA_FOR_TIMESTAMP;

    test('API 응답 성공', async () => {
      jest.spyOn(openWeatherOneCallAxiosInstance, 'get').mockResolvedValue(mock.RESPONSE);

      const response = await openWeatherOneCallService.getWeatherDataForTimestamp(mock.PARAMS);
      expect(response).toMatchObject(mock.RESPONSE);
    });

    test('유효한 HttpClient 에러 throw 테스트', async () => {
      jest.spyOn(openWeatherOneCallAxiosInstance, 'get').mockRejectedValue(errorMock);

      try {
        await openWeatherOneCallService.getWeatherDataForTimestamp(mock.PARAMS);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toBe(errorMock.data.message);
      }
    });

    test('유효하지 않은 HttpClient 에러 throw 테스트', async () => {
      jest.spyOn(openWeatherOneCallAxiosInstance, 'get').mockRejectedValue('error');

      try {
        await openWeatherOneCallService.getWeatherDataForTimestamp(mock.PARAMS);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toBe(invalidHttpClientErrorMock);
      }
    });
  });

  /**
   * getDailyAggregation 테스트
   * @jinhok96 25.05.06
   */
  describe('getDailyAggregation', () => {
    const mock = OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.GET_DAILY_AGGREGATION;

    test('API 응답 성공', async () => {
      jest.spyOn(openWeatherOneCallAxiosInstance, 'get').mockResolvedValue(mock.RESPONSE);

      const response = await openWeatherOneCallService.getDailyAggregation(mock.PARAMS);
      expect(response).toMatchObject(mock.RESPONSE);
    });

    test('유효한 HttpClient 에러 throw 테스트', async () => {
      jest.spyOn(openWeatherOneCallAxiosInstance, 'get').mockRejectedValue(errorMock);

      try {
        await openWeatherOneCallService.getDailyAggregation(mock.PARAMS);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toBe(errorMock.data.message);
      }
    });

    test('유효하지 않은 HttpClient 에러 throw 테스트', async () => {
      jest.spyOn(openWeatherOneCallAxiosInstance, 'get').mockRejectedValue('error');

      try {
        await openWeatherOneCallService.getDailyAggregation(mock.PARAMS);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toBe(invalidHttpClientErrorMock);
      }
    });
  });
});
