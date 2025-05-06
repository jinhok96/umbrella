import { HTTP_CLIENT_STATUS_LIST } from '@services/httpClient/status';
import { httpClientError } from '@services/httpClient/utils';

import type { PickedAxiosResponse } from '@services/httpClient/httpClient.type';

describe('httpClientError', () => {
  test('PickedAxiosResponse<T | null>를 반환하는지 테스트', () => {
    const errorMock: PickedAxiosResponse<{ id: number }> = {
      data: { id: 1 },
      status: 401,
      statusText: 'Unauthorized',
      headers: { 'Content-Type': 'application/json' },
    };
    const typedError = httpClientError(errorMock);
    expect(typedError).toMatchObject(errorMock);
  });

  test('HttpClient의 error가 아닐 경우 에러 throw 테스트', () => {
    const errorMock = { message: 'error' };
    expect(() => httpClientError(errorMock)).toThrow(HTTP_CLIENT_STATUS_LIST.INVALID_HTTP_CLIENT_ERROR.statusText);
  });
});
