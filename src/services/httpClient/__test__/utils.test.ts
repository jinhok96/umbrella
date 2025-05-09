import { HTTP_CLIENT_STATUS_LIST } from '@services/httpClient/status';
import { getHttpClientStatusMessage, httpClientError } from '@services/httpClient/utils';

import type { PickedAxiosResponse } from '@services/httpClient/httpClient.type';
import type { HttpClientStatusList } from '@services/httpClient/status.type';

/**
 * getHttpClientStatusMessage 테스트
 * 실패 테스트는 getLocalizedTextFromMap에서 이미 수행함
 * @jinhok96 25.05.08
 */
describe('getHttpClientStatusMessage', () => {
  test('성공 테스트', () => {
    const status: keyof HttpClientStatusList = '9999';
    expect(getHttpClientStatusMessage(status, 'en')).toBe(HTTP_CLIENT_STATUS_LIST[status].en);
    expect(getHttpClientStatusMessage(status, 'kr')).toBe(HTTP_CLIENT_STATUS_LIST[status].kr);
  });
});

/**
 * httpClientError 테스트
 * @jinhok96 25.05.08
 */
describe('httpClientError', () => {
  test('PickedAxiosResponse<T | null>를 반환하는지 테스트', () => {
    const mockError: PickedAxiosResponse<{ id: number }> = {
      data: { id: 1 },
      status: 401,
      statusText: 'Unauthorized',
      headers: { 'Content-Type': 'application/json' },
    };
    const typedError = httpClientError(mockError);
    expect(typedError).toMatchObject(mockError);
  });

  test('HttpClient의 error가 아닐 경우 에러 throw 테스트', () => {
    const mockError = { message: 'error' };
    expect(() => httpClientError(mockError)).toThrow(getHttpClientStatusMessage('10003'));
  });
});
