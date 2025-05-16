import {
  googleMapsGeocodingServiceAxiosInstance,
  googleMapsPlacesServiceAxiosInstance,
  googleMapsService,
} from '@services/googleMaps/axios';
import { GOOGLE_MAPS_SERVICE_MOCK } from '@services/googleMaps/mock/test.mock';
import { getHttpClientStatusMessage } from '@services/httpClient/httpClient.util';

describe('GoogleMapsService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const errorMock = GOOGLE_MAPS_SERVICE_MOCK.HTTP_CLIENT_ERROR;
  const invalidHttpClientErrorMock = getHttpClientStatusMessage('10003');

  /**
   * postAutocompleteRegions 테스트
   * @jinhok96 25.05.16
   */
  describe('postAutocompleteRegions', () => {
    const axiosInstance = () => jest.spyOn(googleMapsPlacesServiceAxiosInstance, 'post');
    const service = googleMapsService.postAutocompleteRegions;
    const mock = GOOGLE_MAPS_SERVICE_MOCK.POST_AUTOCOMPLETE_REGIONS;

    test('API 응답 성공', async () => {
      axiosInstance().mockResolvedValue(mock.RAW_RESPONSE);

      const response = await service(mock.PAYLOAD);
      expect(response).toMatchObject(mock.RESPONSE);
    });

    test('유효한 HttpClient 에러 throw 테스트', async () => {
      axiosInstance().mockRejectedValue(errorMock);

      try {
        await service(mock.PAYLOAD);
        throw new Error('Test Failed: Error has not been thrown');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toBe(errorMock.data.message);
      }
    });

    test('유효하지 않은 HttpClient 에러 throw 테스트', async () => {
      axiosInstance().mockRejectedValue('error');

      try {
        await service(mock.PAYLOAD);
        throw new Error('Test Failed: Error has not been thrown');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toBe(invalidHttpClientErrorMock);
      }
    });
  });

  /**
   * getPlaceGeocoding 테스트
   * @jinhok96 25.05.16
   */
  describe('getPlaceGeocoding', () => {
    const axiosInstance = () => jest.spyOn(googleMapsGeocodingServiceAxiosInstance, 'get');
    const service = googleMapsService.getPlaceGeocoding;
    const mock = GOOGLE_MAPS_SERVICE_MOCK.GET_PLACE_GEOCODING;

    test('API 응답 성공', async () => {
      axiosInstance().mockResolvedValue(mock.RAW_RESPONSE);

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
        expect((error as Error).message).toBe(errorMock.data.message);
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

  /**
   * getPlaceGeocoding 테스트
   * @jinhok96 25.05.16
   */
  describe('getReverseGeocoding', () => {
    const axiosInstance = () => jest.spyOn(googleMapsGeocodingServiceAxiosInstance, 'get');
    const service = googleMapsService.getReverseGeocoding;
    const mock = GOOGLE_MAPS_SERVICE_MOCK.GET_REVERSE_GEOCODING;

    test('API 응답 성공', async () => {
      axiosInstance().mockResolvedValue(mock.RAW_RESPONSE);

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
        expect((error as Error).message).toBe(errorMock.data.message);
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
