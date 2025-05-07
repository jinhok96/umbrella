import HttpClient from '@services/httpClient/httpClient';
import { httpClientError } from '@services/httpClient/utils';

import type { GetTemplateParams, GetTemplateResponse } from '@services/template/axios.type';

/**
 * Axios 인스턴스
 * baseURL 필수, config 선택
 * @jinhok96 25.05.06
 */
const axiosInstance = new HttpClient('https://jsonplaceholder.typicode.com');

/**
 * 서비스 모듈
 * @jinhok96 25.05.06
 */
export const templateService = {
  getTemplate: async (params: GetTemplateParams) => {
    try {
      const response = await axiosInstance.get<GetTemplateResponse>('/todos', params);
      return response;
    } catch (error) {
      const typedError = httpClientError(error);
      throw new Error(typedError.statusText);
    }
  },
};

export { axiosInstance as templateServiceAxiosInstance };
