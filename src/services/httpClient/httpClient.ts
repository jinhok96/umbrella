import axios from 'axios';

import { getHttpClientStatusMessage } from '@services/httpClient/httpClient.util';

import type { HttpClientStatusList, PickedAxiosResponse } from '@services/httpClient/httpClient.type';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults } from 'axios';

const DEFAULT_TIMEOUT = 10000; // 10초

/**
 * Axios HttpClient
 * @description timeout: 10초
 * @description Content-Type: application/json
 * @param baseURL 기본 URL (ex: https://example.com)
 * @param config 초기 axios config
 * @jinhok96 25.05.08
 */
export default class HttpClient {
  private instance: AxiosInstance;

  constructor(baseURL: string, config?: CreateAxiosDefaults) {
    if (!baseURL) throw new Error(getHttpClientStatusMessage('10002'));

    this.instance = axios.create({
      baseURL,
      timeout: DEFAULT_TIMEOUT,
      ...config,
    });
  }

  /**
   * response에서 특정 데이터를 반환하는 함수
   * @param response Axios response 원본
   * @returns 가공된 response 객체
   * @jinhok96 25.05.01
   */
  private static filterResponse<T>(response: AxiosResponse<T>): PickedAxiosResponse<T> {
    const { data, status, statusText, headers } = response;
    return { data, status, statusText, headers };
  }

  /**
   * API 통신 오류를 response 객체로 변환하는 함수
   * @param error 오류
   * @returns 오류 response 객체
   * @jinhok96 25.05.08
   */
  private static errorResponse<T>(error: unknown): PickedAxiosResponse<T | null> {
    // Axios 오류인 경우
    if (axios.isAxiosError(error)) {
      const status: keyof HttpClientStatusList = '500';
      // 서버 응답에서 status가 2xx가 아닌 경우
      if (error.response) {
        return {
          data: error.response?.data || null,
          status: error.response?.status || Number(status),
          statusText: error.response?.statusText || error.message || getHttpClientStatusMessage(status),
          headers: error.response?.headers,
        };
      }

      // 요청 시 브라우저 또는 클라이언트에서 에러가 발생한 경우
      if (error.request) {
        return {
          data: null,
          status: Number(status),
          statusText: error.message || getHttpClientStatusMessage(status),
          headers: {},
        };
      }
    }

    const status: keyof HttpClientStatusList = '10001';

    // AxiosError가 아닐 경우
    if (error instanceof Error) {
      return {
        data: null,
        status: Number(status),
        statusText: error.message || getHttpClientStatusMessage(status),
        headers: {},
      };
    }

    return {
      data: null,
      status: Number(status),
      statusText: getHttpClientStatusMessage(status),
      headers: {},
    };
  }

  /**
   * GET 요청
   * @param url 요청 URL
   * @param params URL 파라미터
   * @param config params를 제외한 나머지 config
   * @returns `{ data, status, statusText, headers }`
   * @jinhok96 25.05.01
   */
  public async get<T, P = Record<string, unknown> | URLSearchParams, D = unknown>(
    url: string,
    params?: P,
    config?: Omit<AxiosRequestConfig<D>, 'params'>,
  ): Promise<PickedAxiosResponse<T | null>> {
    try {
      const response = await this.instance.get<T, AxiosResponse<T>, D>(url, {
        ...config,
        params,
      });
      return HttpClient.filterResponse(response);
    } catch (error) {
      throw HttpClient.errorResponse(error);
    }
  }

  /**
   * POST 요청
   * @param url 요청 URL
   * @param data 요청 Body에 전송할 데이터
   * @param config data를 제외한 나머지 config
   * @returns `{ data, status, statusText, headers }`
   * @jinhok96 25.05.01
   */
  public async post<T, D = unknown>(
    url: string,
    data?: D,
    config?: Omit<AxiosRequestConfig, 'data'>,
  ): Promise<PickedAxiosResponse<T | null>> {
    try {
      const response = await this.instance.post<T, AxiosResponse<T>, D>(url, data, config);
      return HttpClient.filterResponse(response);
    } catch (error) {
      throw HttpClient.errorResponse(error);
    }
  }

  /**
   * PUT 요청
   * @param url 요청 URL
   * @param data 요청 Body에 전송할 데이터
   * @param config data를 제외한 나머지 config
   * @returns `{ data, status, statusText, headers }`
   * @jinhok96 25.05.01
   */
  public async put<T, D = unknown>(
    url: string,
    data?: D,
    config?: Omit<AxiosRequestConfig, 'data'>,
  ): Promise<PickedAxiosResponse<T | null>> {
    try {
      const response = await this.instance.put<T, AxiosResponse<T>, D>(url, data, config);
      return HttpClient.filterResponse(response);
    } catch (error) {
      throw HttpClient.errorResponse(error);
    }
  }

  /**
   * PATCH 요청
   * @param url 요청 URL
   * @param data 요청 Body에 전송할 데이터
   * @param config data를 제외한 나머지 config
   * @returns `{ data, status, statusText, headers }`
   * @jinhok96 25.05.01
   */
  public async patch<T, D = unknown>(
    url: string,
    data?: D,
    config?: Omit<AxiosRequestConfig, 'data'>,
  ): Promise<PickedAxiosResponse<T | null>> {
    try {
      const response = await this.instance.patch<T, AxiosResponse<T>, D>(url, data, config);
      return HttpClient.filterResponse(response);
    } catch (error) {
      throw HttpClient.errorResponse(error);
    }
  }

  /**
   * DELETE 요청
   * @param url 요청 URL
   * @param params URL 파라미터
   * @param config params를 제외한 나머지 config
   * @returns `{ data, status, statusText, headers }`
   * @jinhok96 25.05.01
   */
  public async delete<T, P = Record<string, unknown> | URLSearchParams, D = unknown>(
    url: string,
    params?: P,
    config?: Omit<AxiosRequestConfig<D>, 'params'>,
  ): Promise<PickedAxiosResponse<T | null>> {
    try {
      const response = await this.instance.delete<T, AxiosResponse<T>, D>(url, {
        ...config,
        params,
      });
      return HttpClient.filterResponse(response);
    } catch (error) {
      throw HttpClient.errorResponse(error);
    }
  }
}
