import nock from 'nock';

import Config from 'react-native-config';

import { openWeatherOneCallService } from '@services/openWeatherOneCall/axios';

const BASE_URL = Config.OPEN_WEATHER_API_BASE_URL || '';

describe('OpenWeatherOneCallService', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  describe('getCurrentAndForecastsWeatherData', () => {
    const mockParams = { lat: 37.5665, lon: 126.978 };

    test('API 에러 응답 처리', async () => {
      const mockError = { cod: 401, message: 'Invalid API key' };
      nock(BASE_URL).get('/3.0/onecall').query(true).reply(401, mockError);

      try {
        await openWeatherOneCallService.getCurrentAndForecastsWeatherData(mockParams);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toBe(mockError.message);
      }
    });

    test('필수 파라미터 누락', async () => {
      try {
        // @ts-expect-error - 의도적으로 잘못된 파라미터 전달
        await openWeatherOneCallService.getCurrentAndForecastsWeatherData({});
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
      }
    });
  });

  describe('getWeatherDataForTimestamp', () => {
    const mockParams = { lat: 37.5665, lon: 126.978, dt: 1717171200 };

    test('API 에러 응답 처리', async () => {
      const mockError = { cod: 400, message: 'Invalid timestamp' };
      nock(BASE_URL).get('/3.0/onecall/timemachine').query(true).reply(400, mockError);

      try {
        await openWeatherOneCallService.getWeatherDataForTimestamp({ ...mockParams, dt: 999999999999 });
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toBe(mockError.message);
      }
    });

    test('필수 파라미터 누락', async () => {
      try {
        // @ts-expect-error - 의도적으로 잘못된 파라미터 전달
        await openWeatherOneCallService.getWeatherDataForTimestamp({});
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
      }
    });
  });

  describe('getDailyAggregation', () => {
    const mockParams = { lat: 37.5665, lon: 126.978, date: '2024-05-01' };

    test('API 에러 응답 처리', async () => {
      const mockError = { cod: 400, message: 'Invalid date format' };
      nock(BASE_URL).get('/3.0/onecall/day_summary').query(true).reply(400, mockError);

      try {
        await openWeatherOneCallService.getDailyAggregation({ ...mockParams, date: '2024/05/01' });
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toBe(mockError.message);
      }
    });

    test('필수 파라미터 누락', async () => {
      try {
        // @ts-expect-error - 의도적으로 잘못된 파라미터 전달
        await openWeatherOneCallService.getDailyAggregation({});
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
      }
    });
  });
});
