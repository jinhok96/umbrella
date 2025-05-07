import nock from 'nock';

import HttpClient from '@services/httpClient/httpClient';
import { PickedAxiosResponse } from '@services/httpClient/httpClient.type';
import { HTTP_CLIENT_STATUS_LIST } from '@services/httpClient/status';

const BASE_URL = 'https://example.com';
const httpClient = new HttpClient(BASE_URL);

describe('HttpClient', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  test('baseURL 비어있을 경우 에러 throw 테스트', () => {
    expect(() => new HttpClient('')).toThrow(HTTP_CLIENT_STATUS_LIST.BASE_URL_MISSING_ERROR.statusText);
  });

  test('GET 요청 성공', async () => {
    const mockURL = '/get';
    const mockData = { id: 1, name: 'Test' };
    nock(BASE_URL).get(mockURL).reply(HTTP_CLIENT_STATUS_LIST.OK.status, mockData);

    const { data, status, statusText, headers } = await httpClient.get(mockURL);
    expect(data).toEqual(mockData);
    expect(status).toBe(HTTP_CLIENT_STATUS_LIST.OK.status);
    expect(statusText).toBe(HTTP_CLIENT_STATUS_LIST.OK.statusText);
    expect(headers).toMatchObject({ 'content-type': 'application/json' });
  });

  test('GET 요청 오류', async () => {
    const mockURL = '/get';
    nock(BASE_URL).get(mockURL).reply(HTTP_CLIENT_STATUS_LIST.INTERNAL_SERVER_ERROR.status);

    try {
      await httpClient.get(mockURL);
    } catch (error) {
      const { data, status, statusText, headers } = error as PickedAxiosResponse<null>;
      expect(data).toBeNull();
      expect(status).toBe(HTTP_CLIENT_STATUS_LIST.INTERNAL_SERVER_ERROR.status);
      expect(statusText).toBe(HTTP_CLIENT_STATUS_LIST.INTERNAL_SERVER_ERROR.statusText);
      expect(headers).toMatchObject({});
    }
  });

  test('POST 요청 성공', async () => {
    const mockURL = '/post';
    const mockData = { id: 1, name: 'Test' };
    const mockPayload = { name: 'Test' };
    nock(BASE_URL).post(mockURL).reply(HTTP_CLIENT_STATUS_LIST.CREATED.status, mockData);

    const { data, status, statusText, headers } = await httpClient.post(mockURL, mockPayload);
    expect(data).toEqual(mockData);
    expect(status).toBe(HTTP_CLIENT_STATUS_LIST.CREATED.status);
    expect(statusText).toBe(HTTP_CLIENT_STATUS_LIST.CREATED.statusText);
    expect(headers).toMatchObject({ 'content-type': 'application/json' });
  });

  test('POST 요청 오류', async () => {
    const mockURL = '/post';
    const mockPayload = { name: 'Test' };
    nock(BASE_URL).post(mockURL).reply(HTTP_CLIENT_STATUS_LIST.INTERNAL_SERVER_ERROR.status);

    try {
      await httpClient.post(mockURL, mockPayload);
    } catch (error) {
      const { data, status, statusText, headers } = error as PickedAxiosResponse<null>;
      expect(data).toBeNull();
      expect(status).toBe(HTTP_CLIENT_STATUS_LIST.INTERNAL_SERVER_ERROR.status);
      expect(statusText).toBe(HTTP_CLIENT_STATUS_LIST.INTERNAL_SERVER_ERROR.statusText);
      expect(headers).toMatchObject({});
    }
  });

  test('PUT 요청 성공', async () => {
    const mockURL = '/put';
    const mockData = { id: 1, name: 'Test' };
    const mockPayload = { name: 'Test' };
    nock(BASE_URL).put(mockURL).reply(HTTP_CLIENT_STATUS_LIST.OK.status, mockData);

    const { data, status, statusText, headers } = await httpClient.put(mockURL, mockPayload);
    expect(data).toEqual(mockData);
    expect(status).toBe(HTTP_CLIENT_STATUS_LIST.OK.status);
    expect(statusText).toBe(HTTP_CLIENT_STATUS_LIST.OK.statusText);
    expect(headers).toMatchObject({ 'content-type': 'application/json' });
  });

  test('PUT 요청 오류', async () => {
    const mockURL = '/put';
    const mockPayload = { name: 'Test' };
    nock(BASE_URL).put(mockURL).reply(HTTP_CLIENT_STATUS_LIST.INTERNAL_SERVER_ERROR.status);

    try {
      await httpClient.put(mockURL, mockPayload);
    } catch (error) {
      const { data, status, statusText, headers } = error as PickedAxiosResponse<null>;
      expect(data).toBeNull();
      expect(status).toBe(HTTP_CLIENT_STATUS_LIST.INTERNAL_SERVER_ERROR.status);
      expect(statusText).toBe(HTTP_CLIENT_STATUS_LIST.INTERNAL_SERVER_ERROR.statusText);
      expect(headers).toMatchObject({});
    }
  });

  test('PATCH 요청 성공', async () => {
    const mockURL = '/patch';
    const mockData = { id: 1, name: 'Test' };
    const mockPayload = { name: 'Test' };
    nock(BASE_URL).patch(mockURL).reply(HTTP_CLIENT_STATUS_LIST.OK.status, mockData);

    const { data, status, statusText, headers } = await httpClient.patch(mockURL, mockPayload);
    expect(data).toEqual(mockData);
    expect(status).toBe(HTTP_CLIENT_STATUS_LIST.OK.status);
    expect(statusText).toBe(HTTP_CLIENT_STATUS_LIST.OK.statusText);
    expect(headers).toMatchObject({ 'content-type': 'application/json' });
  });

  test('PATCH 요청 오류', async () => {
    const mockURL = '/patch';
    const mockPayload = { name: 'Test' };
    nock(BASE_URL).patch(mockURL).reply(HTTP_CLIENT_STATUS_LIST.INTERNAL_SERVER_ERROR.status);

    try {
      await httpClient.patch(mockURL, mockPayload);
    } catch (error) {
      const { data, status, statusText, headers } = error as PickedAxiosResponse<null>;
      expect(data).toBeNull();
      expect(status).toBe(HTTP_CLIENT_STATUS_LIST.INTERNAL_SERVER_ERROR.status);
      expect(statusText).toBe(HTTP_CLIENT_STATUS_LIST.INTERNAL_SERVER_ERROR.statusText);
      expect(headers).toMatchObject({});
    }
  });

  test('DELETE 요청 성공', async () => {
    const mockURL = '/delete';
    const mockData = { id: 1, name: 'Test' };
    nock(BASE_URL).delete(mockURL).reply(HTTP_CLIENT_STATUS_LIST.OK.status, mockData);

    const { data, status, statusText, headers } = await httpClient.delete(mockURL);
    expect(data).toEqual(mockData);
    expect(status).toBe(HTTP_CLIENT_STATUS_LIST.OK.status);
    expect(statusText).toBe(HTTP_CLIENT_STATUS_LIST.OK.statusText);
    expect(headers).toMatchObject({ 'content-type': 'application/json' });
  });

  test('DELETE 요청 오류', async () => {
    const mockURL = '/delete';
    nock(BASE_URL).delete(mockURL).reply(HTTP_CLIENT_STATUS_LIST.INTERNAL_SERVER_ERROR.status);

    try {
      await httpClient.delete(mockURL);
    } catch (error) {
      const { data, status, statusText, headers } = error as PickedAxiosResponse<null>;
      expect(data).toBeNull();
      expect(status).toBe(HTTP_CLIENT_STATUS_LIST.INTERNAL_SERVER_ERROR.status);
      expect(statusText).toBe(HTTP_CLIENT_STATUS_LIST.INTERNAL_SERVER_ERROR.statusText);
      expect(headers).toMatchObject({});
    }
  });
});
