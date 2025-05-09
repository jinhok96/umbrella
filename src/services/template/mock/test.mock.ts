import type { PickedAxiosResponse } from '@services/httpClient/httpClient.type';
import type { GetTemplateParams, GetTemplateResponse } from '@services/template/axios.type';

/**
 * templateService 공통 에러 Mock
 * @jinhok96 25.05.06
 */
const templateServiceMockHttpClientError: PickedAxiosResponse<null> = {
  data: null,
  status: 500,
  statusText: 'Internal Server Error',
  headers: { 'Content-Type': 'application/json' },
};

/**
 * getTemplate Mock
 * @jinhok96 25.05.06
 */
const getTemplateMockParams: GetTemplateParams = { id: 1 };
const getTemplateMockData: GetTemplateResponse = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false,
};
const getTemplateMockResponse: PickedAxiosResponse<GetTemplateResponse> = {
  data: getTemplateMockData,
  status: 200,
  statusText: 'OK',
  headers: { 'Content-Type': 'application/json' },
};

export const TEMPLATE_SERVICE_MOCK = {
  HTTP_CLIENT_ERROR: templateServiceMockHttpClientError,
  GET_TEMPLATE: {
    PARAMS: getTemplateMockParams,
    DATA: getTemplateMockData,
    RESPONSE: getTemplateMockResponse,
  },
};
