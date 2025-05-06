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

  /**
   * getCurrentAndForecastsWeatherData 테스트
   * @jinhok96 25.05.06
   */
  describe('getCurrentAndForecastsWeatherData', () => {
    test('API 응답 성공', async () => {
      jest
        .spyOn(openWeatherOneCallAxiosInstance, 'get')
        .mockResolvedValue(OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.GET_CURRENT_AND_FORECASTS_WEATHER_DATA.RESPONSE);

      const response = await openWeatherOneCallService.getCurrentAndForecastsWeatherData(
        OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.GET_CURRENT_AND_FORECASTS_WEATHER_DATA.PARAMS,
      );
      expect(response).toMatchObject(
        OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.GET_CURRENT_AND_FORECASTS_WEATHER_DATA.RESPONSE,
      );
    });

    test('유효한 HttpClient 에러 throw 테스트', async () => {
      jest
        .spyOn(openWeatherOneCallAxiosInstance, 'get')
        .mockRejectedValue(OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.HTTP_CLIENT_ERROR);

      try {
        await openWeatherOneCallService.getCurrentAndForecastsWeatherData(
          OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.GET_CURRENT_AND_FORECASTS_WEATHER_DATA.PARAMS,
        );
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toBe(OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.HTTP_CLIENT_ERROR.data.message);
      }
    });

    test('유효하지 않은 HttpClient 에러 throw 테스트', async () => {
      jest.spyOn(openWeatherOneCallAxiosInstance, 'get').mockRejectedValue('error');

      try {
        await openWeatherOneCallService.getCurrentAndForecastsWeatherData(
          OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.GET_CURRENT_AND_FORECASTS_WEATHER_DATA.PARAMS,
        );
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toBe(HTTP_CLIENT_STATUS_LIST.INVALID_HTTP_CLIENT_ERROR.statusText);
      }
    });
  });

  /**
   * getWeatherDataForTimestamp 테스트
   * @jinhok96 25.05.06
   */
  describe('getWeatherDataForTimestamp', () => {
    test('API 응답 성공', async () => {
      jest
        .spyOn(openWeatherOneCallAxiosInstance, 'get')
        .mockResolvedValue(OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.GET_WEATHER_DATA_FOR_TIMESTAMP.RESPONSE);

      const response = await openWeatherOneCallService.getWeatherDataForTimestamp(
        OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.GET_WEATHER_DATA_FOR_TIMESTAMP.PARAMS,
      );
      expect(response).toMatchObject(OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.GET_WEATHER_DATA_FOR_TIMESTAMP.RESPONSE);
    });

    test('유효한 HttpClient 에러 throw 테스트', async () => {
      jest
        .spyOn(openWeatherOneCallAxiosInstance, 'get')
        .mockRejectedValue(OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.HTTP_CLIENT_ERROR);

      try {
        await openWeatherOneCallService.getWeatherDataForTimestamp(
          OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.GET_WEATHER_DATA_FOR_TIMESTAMP.PARAMS,
        );
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toBe(OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.HTTP_CLIENT_ERROR.data.message);
      }
    });

    test('유효하지 않은 HttpClient 에러 throw 테스트', async () => {
      jest.spyOn(openWeatherOneCallAxiosInstance, 'get').mockRejectedValue('error');

      try {
        await openWeatherOneCallService.getWeatherDataForTimestamp(
          OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.GET_WEATHER_DATA_FOR_TIMESTAMP.PARAMS,
        );
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toBe(HTTP_CLIENT_STATUS_LIST.INVALID_HTTP_CLIENT_ERROR.statusText);
      }
    });
  });

  /**
   * getDailyAggregation 테스트
   * @jinhok96 25.05.06
   */
  describe('getDailyAggregation', () => {
    test('API 응답 성공', async () => {
      jest
        .spyOn(openWeatherOneCallAxiosInstance, 'get')
        .mockResolvedValue(OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.GET_DAILY_AGGREGATION.RESPONSE);

      const response = await openWeatherOneCallService.getDailyAggregation(
        OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.GET_DAILY_AGGREGATION.PARAMS,
      );
      expect(response).toMatchObject(OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.GET_DAILY_AGGREGATION.RESPONSE);
    });

    test('유효한 HttpClient 에러 throw 테스트', async () => {
      jest
        .spyOn(openWeatherOneCallAxiosInstance, 'get')
        .mockRejectedValue(OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.HTTP_CLIENT_ERROR);

      try {
        await openWeatherOneCallService.getDailyAggregation(
          OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.GET_DAILY_AGGREGATION.PARAMS,
        );
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toBe(OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.HTTP_CLIENT_ERROR.data.message);
      }
    });

    test('유효하지 않은 HttpClient 에러 throw 테스트', async () => {
      jest.spyOn(openWeatherOneCallAxiosInstance, 'get').mockRejectedValue('error');

      try {
        await openWeatherOneCallService.getDailyAggregation(
          OPEN_WEATHER_ONE_CALL_SERVICE_MOCK.GET_DAILY_AGGREGATION.PARAMS,
        );
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toBe(HTTP_CLIENT_STATUS_LIST.INVALID_HTTP_CLIENT_ERROR.statusText);
      }
    });
  });
});
