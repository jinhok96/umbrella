import nock from 'nock';

import HttpClient from '@services/httpClient/httpClient';
import { PickedAxiosResponse } from '@services/httpClient/httpClient.type';

const BASE_URL = 'https://example.com';
const httpClient = new HttpClient(BASE_URL);

describe('HttpClient', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  test('baseURL 비어있을 경우 에러 throw 테스트', () => {
    expect(() => new HttpClient('')).toThrow('baseURL이 없습니다.');
  });

  test('GET 요청 성공', async () => {
    const mockURL = '/get';
    const mockData = { id: 1, name: 'Test' };
    nock(BASE_URL).get(mockURL).reply(200, mockData);

    const { data, status, statusText, headers } = await httpClient.get(mockURL);
    expect(data).toEqual(mockData);
    expect(status).toBe(200);
    expect(statusText).toBe('OK');
    expect(headers).toMatchObject({ 'content-type': 'application/json' });
  });

  test('GET 요청 오류', async () => {
    const mockURL = '/get';
    nock(BASE_URL).get(mockURL).reply(500);

    try {
      await httpClient.get(mockURL);
    } catch (error) {
      const { data, status, statusText, headers } = error as PickedAxiosResponse<null>;
      expect(data).toBeNull();
      expect(status).toBe(500);
      expect(statusText).toBe('Internal Server Error');
      expect(headers).toMatchObject({});
    }
  });

  test('POST 요청 성공', async () => {
    const mockURL = '/post';
    const mockData = { id: 1, name: 'Test' };
    const mockPayload = { name: 'Test' };
    nock(BASE_URL).post(mockURL).reply(201, mockData);

    const { data, status, statusText, headers } = await httpClient.post(mockURL, mockPayload);
    expect(data).toEqual(mockData);
    expect(status).toBe(201);
    expect(statusText).toBe('Created');
    expect(headers).toMatchObject({ 'content-type': 'application/json' });
  });

  test('POST 요청 오류', async () => {
    const mockURL = '/post';
    const mockPayload = { name: 'Test' };
    nock(BASE_URL).post(mockURL).reply(500);

    try {
      await httpClient.post(mockURL, mockPayload);
    } catch (error) {
      const { data, status, statusText, headers } = error as PickedAxiosResponse<null>;
      expect(data).toBeNull();
      expect(status).toBe(500);
      expect(statusText).toBe('Internal Server Error');
      expect(headers).toMatchObject({});
    }
  });

  test('PUT 요청 성공', async () => {
    const mockURL = '/put';
    const mockData = { id: 1, name: 'Test' };
    const mockPayload = { name: 'Test' };
    nock(BASE_URL).put(mockURL).reply(200, mockData);

    const { data, status, statusText, headers } = await httpClient.put(mockURL, mockPayload);
    expect(data).toEqual(mockData);
    expect(status).toBe(200);
    expect(statusText).toBe('OK');
    expect(headers).toMatchObject({ 'content-type': 'application/json' });
  });

  test('PUT 요청 오류', async () => {
    const mockURL = '/put';
    const mockPayload = { name: 'Test' };
    nock(BASE_URL).put(mockURL).reply(500);

    try {
      await httpClient.put(mockURL, mockPayload);
    } catch (error) {
      const { data, status, statusText, headers } = error as PickedAxiosResponse<null>;
      expect(data).toBeNull();
      expect(status).toBe(500);
      expect(statusText).toBe('Internal Server Error');
      expect(headers).toMatchObject({});
    }
  });

  test('PATCH 요청 성공', async () => {
    const mockURL = '/patch';
    const mockData = { id: 1, name: 'Test' };
    const mockPayload = { name: 'Test' };
    nock(BASE_URL).patch(mockURL).reply(200, mockData);

    const { data, status, statusText, headers } = await httpClient.patch(mockURL, mockPayload);
    expect(data).toEqual(mockData);
    expect(status).toBe(200);
    expect(statusText).toBe('OK');
    expect(headers).toMatchObject({ 'content-type': 'application/json' });
  });

  test('PATCH 요청 오류', async () => {
    const mockURL = '/patch';
    const mockPayload = { name: 'Test' };
    nock(BASE_URL).patch(mockURL).reply(500);

    try {
      await httpClient.patch(mockURL, mockPayload);
    } catch (error) {
      const { data, status, statusText, headers } = error as PickedAxiosResponse<null>;
      expect(data).toBeNull();
      expect(status).toBe(500);
      expect(statusText).toBe('Internal Server Error');
      expect(headers).toMatchObject({});
    }
  });

  test('DELETE 요청 성공', async () => {
    const mockURL = '/delete';
    const mockData = { id: 1, name: 'Test' };
    nock(BASE_URL).delete(mockURL).reply(200, mockData);

    const { data, status, statusText, headers } = await httpClient.delete(mockURL);
    expect(data).toEqual(mockData);
    expect(status).toBe(200);
    expect(statusText).toBe('OK');
    expect(headers).toMatchObject({ 'content-type': 'application/json' });
  });

  test('DELETE 요청 오류', async () => {
    const mockURL = '/delete';
    nock(BASE_URL).delete(mockURL).reply(500);

    try {
      await httpClient.delete(mockURL);
    } catch (error) {
      const { data, status, statusText, headers } = error as PickedAxiosResponse<null>;
      expect(data).toBeNull();
      expect(status).toBe(500);
      expect(statusText).toBe('Internal Server Error');
      expect(headers).toMatchObject({});
    }
  });
});
