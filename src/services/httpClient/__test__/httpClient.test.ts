import nock from 'nock';

import HttpClient from '@services/httpClient/httpClient';
import { PickedAxiosResponse } from '@services/httpClient/httpClient.type';

const BASE_URL = 'https://example.com';
const httpClient = new HttpClient(BASE_URL);

describe('HttpClient', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  test('setHeader, getHeader, removeHeader 테스트', () => {
    const mockKey = 'X-Test-Header-Key';
    const mockValue = 'X-Test-Header-Value';

    httpClient.setHeader(mockKey, mockValue);
    expect(httpClient.getHeader(mockKey)).toBe(mockValue);

    httpClient.removeHeader(mockKey);
    expect(httpClient.getHeader(mockKey)).toBeUndefined();
  });

  test('GET 요청 성공', async () => {
    const mockURL = '/get';
    const mockData = { id: 1, name: 'Test' };
    nock(BASE_URL).get(mockURL).reply(200, mockData);

    const { data, status } = await httpClient.get(mockURL);
    expect(data).toEqual(mockData);
    expect(status).toBe(200);
  });

  test('GET 요청 오류', async () => {
    const mockURL = '/get';
    nock(BASE_URL).get(mockURL).reply(500);

    try {
      await httpClient.get(mockURL);
    } catch (error) {
      const { status } = error as PickedAxiosResponse<null>;
      return expect(status).toBe(500);
    }
  });

  test('POST 요청 성공', async () => {
    const mockURL = '/post';
    const mockData = { id: 1, name: 'Test' };
    const mockPayload = { name: 'Test' };
    nock(BASE_URL).post(mockURL).reply(201, mockData);

    const { data, status } = await httpClient.post(mockURL, mockPayload);
    expect(data).toEqual(mockData);
    expect(status).toBe(201);
  });

  test('POST 요청 오류', async () => {
    const mockURL = '/post';
    const mockPayload = { name: 'Test' };
    nock(BASE_URL).post(mockURL).reply(500);

    try {
      await httpClient.post(mockURL, mockPayload);
    } catch (error) {
      const { status } = error as PickedAxiosResponse<null>;
      return expect(status).toBe(500);
    }
  });

  test('PUT 요청 성공', async () => {
    const mockURL = '/put';
    const mockData = { id: 1, name: 'Test' };
    const mockPayload = { name: 'Test' };
    nock(BASE_URL).put(mockURL).reply(200, mockData);

    const { data, status } = await httpClient.put(mockURL, mockPayload);
    expect(data).toEqual(mockData);
    expect(status).toBe(200);
  });

  test('PUT 요청 오류', async () => {
    const mockURL = '/put';
    const mockPayload = { name: 'Test' };
    nock(BASE_URL).put(mockURL).reply(500);

    try {
      await httpClient.put(mockURL, mockPayload);
    } catch (error) {
      const { status } = error as PickedAxiosResponse<null>;
      return expect(status).toBe(500);
    }
  });

  test('PATCH 요청 성공', async () => {
    const mockURL = '/patch';
    const mockData = { id: 1, name: 'Test' };
    const mockPayload = { name: 'Test' };
    nock(BASE_URL).patch(mockURL).reply(200, mockData);

    const { data, status } = await httpClient.patch(mockURL, mockPayload);
    expect(data).toEqual(mockData);
    expect(status).toBe(200);
  });

  test('PATCH 요청 오류', async () => {
    const mockURL = '/patch';
    const mockPayload = { name: 'Test' };
    nock(BASE_URL).patch(mockURL).reply(500);

    try {
      await httpClient.patch(mockURL, mockPayload);
    } catch (error) {
      const { status } = error as PickedAxiosResponse<null>;
      return expect(status).toBe(500);
    }
  });

  test('DELETE 요청 성공', async () => {
    const mockURL = '/delete';
    const mockData = { id: 1, name: 'Test' };
    nock(BASE_URL).delete(mockURL).reply(200, mockData);

    const { data, status } = await httpClient.delete(mockURL);
    expect(data).toEqual(mockData);
    expect(status).toBe(200);
  });

  test('DELETE 요청 오류', async () => {
    const mockURL = '/delete';
    nock(BASE_URL).delete(mockURL).reply(500);

    try {
      await httpClient.get(mockURL);
    } catch (error) {
      const { status } = error as PickedAxiosResponse<null>;
      return expect(status).toBe(500);
    }
  });
});
