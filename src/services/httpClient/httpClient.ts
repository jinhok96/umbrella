import type {
  CommonRequestHeadersList,
  ContentType,
  PickedAxiosResponse,
} from '@services/httpClient/httpClient.type';

import type {
  AxiosHeaderValue,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import axios from 'axios';

const DEFAULT_TIMEOUT = 10000; // 10초

/**
 * Axios HttpClient
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
   */
  private static filterResponse<T>(
    response: AxiosResponse<T>,
  ): PickedAxiosResponse<T> {
    const { data, status, statusText } = response;
    return { data, status, statusText };
  }

  /**
   * 타입 정의된 공통 Content-Type을 설정하는 함수
   * @description 기본값: application/json
   * @param value 타입 정의된 공통 Content-Type
   */
  public setCommonContentType(value: ContentType): void {
    this.instance.defaults.headers.common['Content-Type'] = value;
  }

  /**
   * 전체 Content-Type을 설정하는 함수
   * @description 기본값: application/json
   * @param value 임의의 Content-Type
   */
  public setContentType(value: AxiosHeaderValue): void {
    this.instance.defaults.headers.common['Content-Type'] = value;
  }

  /**
   * 타입 정의된 공통 헤더를 설정하는 함수
   * @param key 타입 정의된 공통 헤더 키
   * @param value 헤더 키값
   */
  public setCommonHeader(
    key: CommonRequestHeadersList,
    value: AxiosHeaderValue,
  ): void {
    this.instance.defaults.headers.common[key] = value;
  }

  /**
   * 전체 헤더를 설정하는 함수
   * @param key 임의의 헤더 키
   * @param value 헤더 키값
   */
  public setHeader(key: string, value: AxiosHeaderValue): void {
    if (key === 'Content-Type') {
      throw new Error('setContentType으로 Content-Type을 설정해주세요.');
    }
    this.instance.defaults.headers.common[key] = value;
  }

  /**
   * 특정 헤더를 제거하는 함수
   * @param key 제거할 헤더 키
   */
  public removeHeader(key: string): void {
    delete this.instance.defaults.headers.common[key];
  }

  /**
   * GET 요청
   * @param url 요청 URL
   * @param params URL 파라미터
   * @param config params를 제외한 나머지 config
   * @returns \{ data, status, statusText \}
   */
  public async get<
    T,
    P = Record<string, unknown> | URLSearchParams,
    D = unknown,
  >(
    url: string,
    params?: P,
    config?: Omit<AxiosRequestConfig<D>, 'params'>,
  ): Promise<PickedAxiosResponse<T>> {
    const response = await this.instance.get<T, AxiosResponse<T>, D>(url, {
      ...config,
      params,
    });
    return HttpClient.filterResponse(response);
  }

  /**
   * POST 요청
   * @param url 요청 URL
   * @param data 요청 Body에 전송할 데이터
   * @param config data를 제외한 나머지 config
   * @returns \{ data, status, statusText \}
   */
  public async post<T, D = unknown>(
    url: string,
    data?: D,
    config?: Omit<AxiosRequestConfig, 'data'>,
  ): Promise<PickedAxiosResponse<T>> {
    const response = await this.instance.post<T, AxiosResponse<T>, D>(
      url,
      data,
      config,
    );
    return HttpClient.filterResponse(response);
  }

  /**
   * PUT 요청
   * @param url 요청 URL
   * @param data 요청 Body에 전송할 데이터
   * @param config data를 제외한 나머지 config
   * @returns \{ data, status, statusText \}
   */
  public async put<T, D = unknown>(
    url: string,
    data?: D,
    config?: Omit<AxiosRequestConfig, 'data'>,
  ): Promise<PickedAxiosResponse<T>> {
    const response = await this.instance.put<T, AxiosResponse<T>, D>(
      url,
      data,
      config,
    );
    return HttpClient.filterResponse(response);
  }

  /**
   * PATCH 요청
   * @param url 요청 URL
   * @param data 요청 Body에 전송할 데이터
   * @param config data를 제외한 나머지 config
   * @returns \{ data, status, statusText \}
   */
  public async patch<T, D = unknown>(
    url: string,
    data?: D,
    config?: Omit<AxiosRequestConfig, 'data'>,
  ): Promise<PickedAxiosResponse<T>> {
    const response = await this.instance.patch<T, AxiosResponse<T>, D>(
      url,
      data,
      config,
    );
    return HttpClient.filterResponse(response);
  }

  /**
   * DELETE 요청
   * @param url 요청 URL
   * @param params URL 파라미터
   * @param config params를 제외한 나머지 config
   * @returns \{ data, status, statusText \}
   */
  public async delete<
    T,
    P = Record<string, unknown> | URLSearchParams,
    D = unknown,
  >(
    url: string,
    params?: P,
    config?: Omit<AxiosRequestConfig<D>, 'params'>,
  ): Promise<PickedAxiosResponse<T>> {
    const response = await this.instance.delete<T, AxiosResponse<T>, D>(url, {
      ...config,
      params,
    });
    return HttpClient.filterResponse(response);
  }
}
