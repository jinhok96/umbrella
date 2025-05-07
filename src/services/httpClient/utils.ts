import { HTTP_CLIENT_STATUS_LIST } from '@services/httpClient/status';

import type { PickedAxiosResponse } from '@services/httpClient/httpClient.type';

/**
 * unknown error를 PickedAxiosResponse<T | null>로 변환하는 함수
 * @param error unknown; try/catch문에서 catch(error: unknown)
 * @returns `{ data, status, statusText, headers }`
 * @jinhok96 25.05.06
 */
export function httpClientError<T>(error: unknown): PickedAxiosResponse<T | null> {
  const typedError = error as PickedAxiosResponse<T | null>;

  if (!typedError.status || !typedError.statusText) {
    throw new Error(HTTP_CLIENT_STATUS_LIST.INVALID_HTTP_CLIENT_ERROR.statusText);
  }

  return typedError;
}
