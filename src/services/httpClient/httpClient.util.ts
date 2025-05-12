import { getLocalizedTextFromMap } from '@libs/utils/localize/localize';
import { HTTP_CLIENT_STATUS_LIST } from '@services/httpClient/httpClient.const';

import type { HttpClientStatusList, PickedAxiosResponse } from '@services/httpClient/httpClient.type';

/**
 * 로컬라이징된 HttpClient 에러 메세지를 반환하는 함수
 * @param status 에러 status
 * @returns 에러 메세지
 * @jinhok96 25.05.08
 */
export function getHttpClientStatusMessage(status: keyof HttpClientStatusList): string {
  return getLocalizedTextFromMap(HTTP_CLIENT_STATUS_LIST, status);
}

/**
 * unknown error를 PickedAxiosResponse<T | null>로 변환하는 함수
 * @param error unknown; try/catch문에서 catch(error: unknown)
 * @returns `{ data, status, statusText, headers }`
 * @jinhok96 25.05.08
 */
export function httpClientError<T>(error: unknown): PickedAxiosResponse<T | null> {
  const typedError = error as PickedAxiosResponse<T | null>;

  if (!typedError.status || !typedError.statusText) {
    throw new Error(getHttpClientStatusMessage('10003'));
  }

  return typedError;
}
