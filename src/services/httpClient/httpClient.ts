import type { CommonRequestHeadersList, PickedAxiosResponse } from '@services/httpClient/httpClient.type';

import type { AxiosHeaderValue, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';

const DEFAULT_TIMEOUT = 10000; // 10초

/**
 * Axios HttpClient
 * @description timeout: 10초
 * @description Content-Type: application/json
 * @jinhok96 25.04.18
 */
export default class HttpClient {
  private instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
      timeout: DEFAULT_TIMEOUT,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  /**
   * response에서 특정 데이터를 반환하는 함수
   * @param response Axios response 원본
   * @returns 가공된 response 객체
   * @jinhok96 25.04.18
   */
  private static filterResponse<T>(response: AxiosResponse<T>): PickedAxiosResponse<T> {
    const { data, status, statusText } = response;
    return { data, status, statusText };
  }

  /**
   * API 통신 오류를 response 객체로 변환하는 함수
   * @param error 오류
   * @returns 오류 response 객체
   * @jinhok96 25.04.18
   */
  private static errorResponse<T>(error: unknown): PickedAxiosResponse<T | null> {
    // Axios 오류인 경우
    if (axios.isAxiosError(error)) {
      return {
        data: error.response?.data || null,
        status: error.response?.status || Number(error.code) || 500,
        statusText: error.response?.statusText || error.message || 'Internal Server Error',
      };
    }
    // 다른 종류의 오류
    return {
      data: null,
      status: 999,
      statusText: 'Unknown Error',
    };
  }

  /**
   * 헤더를 설정하는 함수
   * @param key 헤더 키
   * @param value 헤더 키 값
   * @jinhok96 25.04.18
   */
  public setHeader(key: CommonRequestHeadersList | string, value: AxiosHeaderValue): void {
    if (key === 'Content-Type') {
      throw new Error('setContentType으로 Content-Type을 설정해주세요.');
    }
    this.instance.defaults.headers.common[key] = value;
  }

  /**
   * 특정 헤더를 반환하는 함수
   * @param key 헤더 키
   * @returns 헤더 키 값
   * @jinhok96 25.04.18
   */
  public getHeader(key: CommonRequestHeadersList | string): AxiosHeaderValue | undefined {
    return this.instance.defaults.headers.common[key];
  }

  /**
   * 특정 헤더를 제거하는 함수
   * @param key 제거할 헤더 키
   * @jinhok96 25.04.18
   */
  public removeHeader(key: string): void {
    delete this.instance.defaults.headers.common[key];
  }

  /**
   * GET 요청
   * @param url 요청 URL
   * @param params URL 파라미터
   * @param config params를 제외한 나머지 config
   * @returns `{ data, status, statusText }`
   * @jinhok96 25.04.18
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
      return HttpClient.errorResponse(error);
    }
  }

  /**
   * POST 요청
   * @param url 요청 URL
   * @param data 요청 Body에 전송할 데이터
   * @param config data를 제외한 나머지 config
   * @returns `{ data, status, statusText }`
   * @jinhok96 25.04.18
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
      return HttpClient.errorResponse(error);
    }
  }

  /**
   * PUT 요청
   * @param url 요청 URL
   * @param data 요청 Body에 전송할 데이터
   * @param config data를 제외한 나머지 config
   * @returns `{ data, status, statusText }`
   * @jinhok96 25.04.18
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
      return HttpClient.errorResponse(error);
    }
  }

  /**
   * PATCH 요청
   * @param url 요청 URL
   * @param data 요청 Body에 전송할 데이터
   * @param config data를 제외한 나머지 config
   * @returns `{ data, status, statusText }`
   * @jinhok96 25.04.18
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
      return HttpClient.errorResponse(error);
    }
  }

  /**
   * DELETE 요청
   * @param url 요청 URL
   * @param params URL 파라미터
   * @param config params를 제외한 나머지 config
   * @returns `{ data, status, statusText }`
   * @jinhok96 25.04.18
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
      return HttpClient.errorResponse(error);
    }
  }
}
