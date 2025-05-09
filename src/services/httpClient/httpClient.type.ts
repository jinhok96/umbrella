import type { AxiosResponse } from 'axios';

export type ContentType =
  | 'text/html'
  | 'text/plain'
  | 'multipart/form-data'
  | 'application/json'
  | 'application/x-www-form-urlencoded'
  | 'application/octet-stream';

export type CommonRequestHeadersList =
  | 'Accept'
  | 'Content-Length'
  | 'User-Agent'
  | 'Content-Encoding'
  | 'Authorization';

export type PickedAxiosResponse<T> = Pick<AxiosResponse<T>, 'data' | 'status' | 'statusText' | 'headers'>;
