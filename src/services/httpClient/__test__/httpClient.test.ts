import nock from 'nock';

import HttpClient from '@services/httpClient/httpClient';
import { getHttpClientStatusMessage } from '@services/httpClient/httpClient.util';

import type { PickedAxiosResponse } from '@services/httpClient/httpClient.type';

const BASE_URL = 'https://example.com';
const httpClient = new HttpClient(BASE_URL);

describe('HttpClient', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  test('baseURL 비어있을 경우 에러 throw 테스트', () => {
    expect(() => new HttpClient('')).toThrow(getHttpClientStatusMessage('10002'));
  });

  test('GET 요청 성공', async () => {
    const mockURL = '/get';
    const mockData = { id: 1, name: 'Test' };
    const mockStatusCode = '200';
    nock(BASE_URL).get(mockURL).reply(Number(mockStatusCode), mockData);

    const { data, status, statusText, headers } = await httpClient.get(mockURL);
    expect(data).toEqual(mockData);
    expect(status).toBe(Number(mockStatusCode));
    expect(statusText).toBe(getHttpClientStatusMessage(mockStatusCode));
    expect(headers).toMatchObject({ 'content-type': 'application/json' });
  });

  test('GET 요청 오류', async () => {
    const mockURL = '/get';
    const mockStatusCode = '500';
    nock(BASE_URL).get(mockURL).reply(Number(mockStatusCode));

    try {
      await httpClient.get(mockURL);
    } catch (error) {
      const { data, status, statusText, headers } = error as PickedAxiosResponse<null>;
      expect(data).toBeNull();
      expect(status).toBe(Number(mockStatusCode));
      expect(statusText).toBe(getHttpClientStatusMessage(mockStatusCode));
      expect(headers).toMatchObject({});
    }
  });

  test('POST 요청 성공', async () => {
    const mockURL = '/post';
    const mockData = { id: 1, name: 'Test' };
    const mockPayload = { name: 'Test' };
    const mockStatusCode = '201';
    nock(BASE_URL).post(mockURL).reply(Number(mockStatusCode), mockData);

    const { data, status, statusText, headers } = await httpClient.post(mockURL, mockPayload);
    expect(data).toEqual(mockData);
    expect(status).toBe(Number(mockStatusCode));
    expect(statusText).toBe(getHttpClientStatusMessage(mockStatusCode));
    expect(headers).toMatchObject({ 'content-type': 'application/json' });
  });

  test('POST 요청 오류', async () => {
    const mockURL = '/post';
    const mockPayload = { name: 'Test' };
    const mockStatusCode = '500';
    nock(BASE_URL).post(mockURL).reply(Number(mockStatusCode));

    try {
      await httpClient.post(mockURL, mockPayload);
    } catch (error) {
      const { data, status, statusText, headers } = error as PickedAxiosResponse<null>;
      expect(data).toBeNull();
      expect(status).toBe(Number(mockStatusCode));
      expect(statusText).toBe(getHttpClientStatusMessage(mockStatusCode));
      expect(headers).toMatchObject({});
    }
  });

  test('PUT 요청 성공', async () => {
    const mockURL = '/put';
    const mockData = { id: 1, name: 'Test' };
    const mockPayload = { name: 'Test' };
    const mockStatusCode = '200';
    nock(BASE_URL).put(mockURL).reply(Number(mockStatusCode), mockData);

    const { data, status, statusText, headers } = await httpClient.put(mockURL, mockPayload);
    expect(data).toEqual(mockData);
    expect(status).toBe(Number(mockStatusCode));
    expect(statusText).toBe(getHttpClientStatusMessage(mockStatusCode));
    expect(headers).toMatchObject({ 'content-type': 'application/json' });
  });

  test('PUT 요청 오류', async () => {
    const mockURL = '/put';
    const mockPayload = { name: 'Test' };
    const mockStatusCode = '500';
    nock(BASE_URL).put(mockURL).reply(Number(mockStatusCode));

    try {
      await httpClient.put(mockURL, mockPayload);
    } catch (error) {
      const { data, status, statusText, headers } = error as PickedAxiosResponse<null>;
      expect(data).toBeNull();
      expect(status).toBe(Number(mockStatusCode));
      expect(statusText).toBe(getHttpClientStatusMessage(mockStatusCode));
      expect(headers).toMatchObject({});
    }
  });

  test('PATCH 요청 성공', async () => {
    const mockURL = '/patch';
    const mockData = { id: 1, name: 'Test' };
    const mockPayload = { name: 'Test' };
    const mockStatusCode = '200';
    nock(BASE_URL).patch(mockURL).reply(Number(mockStatusCode), mockData);

    const { data, status, statusText, headers } = await httpClient.patch(mockURL, mockPayload);
    expect(data).toEqual(mockData);
    expect(status).toBe(Number(mockStatusCode));
    expect(statusText).toBe(getHttpClientStatusMessage(mockStatusCode));
    expect(headers).toMatchObject({ 'content-type': 'application/json' });
  });

  test('PATCH 요청 오류', async () => {
    const mockURL = '/patch';
    const mockPayload = { name: 'Test' };
    const mockStatusCode = '500';
    nock(BASE_URL).patch(mockURL).reply(Number(mockStatusCode));

    try {
      await httpClient.patch(mockURL, mockPayload);
    } catch (error) {
      const { data, status, statusText, headers } = error as PickedAxiosResponse<null>;
      expect(data).toBeNull();
      expect(status).toBe(Number(mockStatusCode));
      expect(statusText).toBe(getHttpClientStatusMessage(mockStatusCode));
      expect(headers).toMatchObject({});
    }
  });

  test('DELETE 요청 성공', async () => {
    const mockURL = '/delete';
    const mockData = { id: 1, name: 'Test' };
    const mockStatusCode = '200';
    nock(BASE_URL).delete(mockURL).reply(Number(mockStatusCode), mockData);

    const { data, status, statusText, headers } = await httpClient.delete(mockURL);
    expect(data).toEqual(mockData);
    expect(status).toBe(Number(mockStatusCode));
    expect(statusText).toBe(getHttpClientStatusMessage(mockStatusCode));
    expect(headers).toMatchObject({ 'content-type': 'application/json' });
  });

  test('DELETE 요청 오류', async () => {
    const mockURL = '/delete';
    const mockStatusCode = '500';
    nock(BASE_URL).delete(mockURL).reply(Number(mockStatusCode));

    try {
      await httpClient.delete(mockURL);
    } catch (error) {
      const { data, status, statusText, headers } = error as PickedAxiosResponse<null>;
      expect(data).toBeNull();
      expect(status).toBe(Number(mockStatusCode));
      expect(statusText).toBe(getHttpClientStatusMessage(mockStatusCode));
      expect(headers).toMatchObject({});
    }
  });
});
