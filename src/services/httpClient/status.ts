import type { PickedAxiosResponse } from '@services/httpClient/httpClient.type';
import type { HttpStatus } from '@services/httpClient/status.type';

/**
 * HTTP 상태 리스트
 * @link https://datatracker.ietf.org/doc/html/rfc2616#section-10
 * @jinhok96 25.05.06
 */
const HTTP_STATUS_LIST: Record<HttpStatus, Pick<PickedAxiosResponse<null>, 'status' | 'statusText'>> = {
  CONTINUE: {
    status: 100,
    statusText: 'Continue',
  },
  SWITCHING_PROTOCOL: {
    status: 101,
    statusText: 'Switching Protocol',
  },
  PROCESSING: {
    status: 102,
    statusText: 'Processing',
  },
  EARLY_HINTS: {
    status: 103,
    statusText: 'Early Hints',
  },
  OK: {
    status: 200,
    statusText: 'OK',
  },
  CREATED: {
    status: 201,
    statusText: 'Created',
  },
  ACCEPTED: {
    status: 202,
    statusText: 'Accepted',
  },
  NON_AUTHORITATIVE_INFORMATION: {
    status: 203,
    statusText: 'Non-Authoritative Information',
  },
  NO_CONTENT: {
    status: 204,
    statusText: 'No Content',
  },
  RESET_CONTENT: {
    status: 205,
    statusText: 'Reset Content',
  },
  PARTIAL_CONTENT: {
    status: 206,
    statusText: 'Partial Content',
  },
  MULTI_STATUS: {
    status: 207,
    statusText: 'Multi-Status',
  },
  ALREADY_REPORTED: {
    status: 208,
    statusText: 'Already Reported',
  },
  IM_USED: {
    status: 226,
    statusText: 'IM Used',
  },
  MULTIPLE_CHOICE: {
    status: 300,
    statusText: 'Multiple Choice',
  },
  MOVED_PERMANENTLY: {
    status: 301,
    statusText: 'Moved Permanently',
  },
  FOUND: {
    status: 302,
    statusText: 'Found',
  },
  SEE_OTHER: {
    status: 303,
    statusText: 'See Other',
  },
  NOT_MODIFIED: {
    status: 304,
    statusText: 'Not Modified',
  },
  USE_PROXY: {
    status: 305,
    statusText: 'Use Proxy',
  },
  TEMPORARY_REDIRECT: {
    status: 307,
    statusText: 'Temporary Redirect',
  },
  PERMANENT_REDIRECT: {
    status: 308,
    statusText: 'Permanent Redirect',
  },
  BAD_REQUEST: {
    status: 400,
    statusText: 'Bad Request',
  },
  UNAUTHORIZED: {
    status: 401,
    statusText: 'Unauthorized',
  },
  PAYMENT_REQUIRED: {
    status: 402,
    statusText: 'Payment Required',
  },
  FORBIDDEN: {
    status: 403,
    statusText: 'Forbidden',
  },
  NOT_FOUND: {
    status: 404,
    statusText: 'Not Found',
  },
  METHOD_NOT_ALLOWED: {
    status: 405,
    statusText: 'Method Not Allowed',
  },
  NOT_ACCEPTABLE: {
    status: 406,
    statusText: 'Not Acceptable',
  },
  PROXY_AUTHENTICATION_REQUIRED: {
    status: 407,
    statusText: 'Proxy Authentication Required',
  },
  REQUEST_TIMEOUT: {
    status: 408,
    statusText: 'Request Timeout',
  },
  CONFLICT: {
    status: 409,
    statusText: 'Conflict',
  },
  GONE: {
    status: 410,
    statusText: 'Gone',
  },
  LENGTH_REQUIRED: {
    status: 411,
    statusText: 'Length Required',
  },
  PRECONDITION_FAILED: {
    status: 412,
    statusText: 'Precondition Failed',
  },
  PAYLOAD_TOO_LARGE: {
    status: 413,
    statusText: 'Payload Too Large',
  },
  URI_TOO_LONG: {
    status: 414,
    statusText: 'URI Too Long',
  },
  UNSUPPORTED_MEDIA_TYPE: {
    status: 415,
    statusText: 'Unsupported Media Type',
  },
  RANGE_NOT_SATISFIABLE: {
    status: 416,
    statusText: 'Range Not Satisfiable',
  },
  EXPECTATION_FAILED: {
    status: 417,
    statusText: 'Expectation Failed',
  },
  IM_A_TEAPOT: {
    status: 418,
    statusText: "I'm a teapot",
  },
  MISDIRECTED_REQUEST: {
    status: 421,
    statusText: 'Misdirected Request',
  },
  UNPROCESSABLE_ENTITY: {
    status: 422,
    statusText: 'Unprocessable Entity',
  },
  LOCKED: {
    status: 423,
    statusText: 'Locked',
  },
  FAILED_DEPENDENCY: {
    status: 424,
    statusText: 'Failed Dependency',
  },
  UPGRADE_REQUIRED: {
    status: 426,
    statusText: 'Upgrade Required',
  },
  PRECONDITION_REQUIRED: {
    status: 428,
    statusText: 'Precondition Required',
  },
  TOO_MANY_REQUESTS: {
    status: 429,
    statusText: 'Too Many Requests',
  },
  REQUEST_HEADER_FIELDS_TOO_LARGE: {
    status: 431,
    statusText: 'Request Header Fields Too Large',
  },
  UNAVAILABLE_FOR_LEGAL_REASONS: {
    status: 451,
    statusText: 'Unavailable For Legal Reasons',
  },
  INTERNAL_SERVER_ERROR: {
    status: 500,
    statusText: 'Internal Server Error',
  },
  NOT_IMPLEMENTED: {
    status: 501,
    statusText: 'Not Implemented',
  },
  BAD_GATEWAY: {
    status: 502,
    statusText: 'Bad Gateway',
  },
  SERVICE_UNAVAILABLE: {
    status: 503,
    statusText: 'Service Unavailable',
  },
  GATEWAY_TIMEOUT: {
    status: 504,
    statusText: 'Gateway Timeout',
  },
  HTTP_VERSION_NOT_SUPPORTED: {
    status: 505,
    statusText: 'HTTP Version Not Supported',
  },
  VARIANT_ALSO_NEGOTIATES: {
    status: 506,
    statusText: 'Variant Also Negotiates',
  },
  INSUFFICIENT_STORAGE: {
    status: 507,
    statusText: 'Insufficient Storage',
  },
  LOOP_DETECTED: {
    status: 508,
    statusText: 'Loop Detected',
  },
  NOT_EXTENDED: {
    status: 510,
    statusText: 'Not Extended',
  },
  NETWORK_AUTHENTICATION_REQUIRED: {
    status: 511,
    statusText: 'Network Authentication Required',
  },
};

/**
 * HttpClient 상태 리스트
 * @jinhok96 25.05.06
 */
export const HTTP_CLIENT_STATUS_LIST: Record<
  | HttpStatus
  | 'BASE_URL_MISSING_ERROR'
  | 'INVALID_HTTP_CLIENT_ERROR'
  | 'INTERNAL_SERVER_ERROR'
  | 'UNKNOWN_HTTP_CLIENT_ERROR'
  | 'UNKNOWN_ERROR',
  Pick<PickedAxiosResponse<null>, 'status' | 'statusText'>
> = {
  ...HTTP_STATUS_LIST,
  BASE_URL_MISSING_ERROR: {
    status: -1,
    statusText: 'baseURL이 없습니다.',
  },
  INVALID_HTTP_CLIENT_ERROR: {
    status: -1,
    statusText: 'HttpClient 에러가 아닙니다.',
  },
  UNKNOWN_HTTP_CLIENT_ERROR: {
    status: 9998,
    statusText: '알 수 없는 HttpClient 에러가 발생했습니다.',
  },
  UNKNOWN_ERROR: {
    status: 9999,
    statusText: 'Unknown Error',
  },
};
