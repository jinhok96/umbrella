import type { HttpClientStatusList, HttpStatusList } from '@services/httpClient/httpClient.type';

/**
 * HTTP 상태 리스트
 * @link https://datatracker.ietf.org/doc/html/rfc2616#section-10
 * @jinhok96 25.05.08
 */
const HTTP_STATUS_LIST: HttpStatusList = {
  100: {
    en: 'Continue',
    ko: 'Continue',
  },
  101: {
    en: 'Switching Protocol',
    ko: 'Switching Protocol',
  },
  102: {
    en: 'Processing',
    ko: 'Processing',
  },
  103: {
    en: 'Early Hints',
    ko: 'Early Hints',
  },
  200: {
    en: 'OK',
    ko: 'OK',
  },
  201: {
    en: 'Created',
    ko: 'Created',
  },
  202: {
    en: 'Accepted',
    ko: 'Accepted',
  },
  203: {
    en: 'Non-Authoritative Information',
    ko: 'Non-Authoritative Information',
  },
  204: {
    en: 'No Content',
    ko: 'No Content',
  },
  205: {
    en: 'Reset Content',
    ko: 'Reset Content',
  },
  206: {
    en: 'Partial Content',
    ko: 'Partial Content',
  },
  207: {
    en: 'Multi-Status',
    ko: 'Multi-Status',
  },
  208: {
    en: 'Already Reported',
    ko: 'Already Reported',
  },
  226: {
    en: 'IM Used',
    ko: 'IM Used',
  },
  300: {
    en: 'Multiple Choice',
    ko: 'Multiple Choice',
  },
  301: {
    en: 'Moved Permanently',
    ko: 'Moved Permanently',
  },
  302: {
    en: 'Found',
    ko: 'Found',
  },
  303: {
    en: 'See Other',
    ko: 'See Other',
  },
  304: {
    en: 'Not Modified',
    ko: 'Not Modified',
  },
  305: {
    en: 'Use Proxy',
    ko: 'Use Proxy',
  },
  307: {
    en: 'Temporary Redirect',
    ko: 'Temporary Redirect',
  },
  308: {
    en: 'Permanent Redirect',
    ko: 'Permanent Redirect',
  },
  400: {
    en: 'Bad Request',
    ko: 'Bad Request',
  },
  401: {
    en: 'Unauthorized',
    ko: 'Unauthorized',
  },
  402: {
    en: 'Payment Required',
    ko: 'Payment Required',
  },
  403: {
    en: 'Forbidden',
    ko: 'Forbidden',
  },
  404: {
    en: 'Not Found',
    ko: 'Not Found',
  },
  405: {
    en: 'Method Not Allowed',
    ko: 'Method Not Allowed',
  },
  406: {
    en: 'Not Acceptable',
    ko: 'Not Acceptable',
  },
  407: {
    en: 'Proxy Authentication Required',
    ko: 'Proxy Authentication Required',
  },
  408: {
    en: 'Request Timeout',
    ko: 'Request Timeout',
  },
  409: {
    en: 'Conflict',
    ko: 'Conflict',
  },
  410: {
    en: 'Gone',
    ko: 'Gone',
  },
  411: {
    en: 'Length Required',
    ko: 'Length Required',
  },
  412: {
    en: 'Precondition Failed',
    ko: 'Precondition Failed',
  },
  413: {
    en: 'Payload Too Large',
    ko: 'Payload Too Large',
  },
  414: {
    en: 'URI Too Long',
    ko: 'URI Too Long',
  },
  415: {
    en: 'Unsupported Media Type',
    ko: 'Unsupported Media Type',
  },
  416: {
    en: 'Range Not Satisfiable',
    ko: 'Range Not Satisfiable',
  },
  417: {
    en: 'Expectation Failed',
    ko: 'Expectation Failed',
  },
  418: {
    en: "I'm a teapot",
    ko: "I'm a teapot",
  },
  421: {
    en: 'Misdirected Request',
    ko: 'Misdirected Request',
  },
  422: {
    en: 'Unprocessable Entity',
    ko: 'Unprocessable Entity',
  },
  423: {
    en: 'Locked',
    ko: 'Locked',
  },
  424: {
    en: 'Failed Dependency',
    ko: 'Failed Dependency',
  },
  426: {
    en: 'Upgrade Required',
    ko: 'Upgrade Required',
  },
  428: {
    en: 'Precondition Required',
    ko: 'Precondition Required',
  },
  429: {
    en: 'Too Many Requests',
    ko: 'Too Many Requests',
  },
  431: {
    en: 'Request Header Fields Too Large',
    ko: 'Request Header Fields Too Large',
  },
  451: {
    en: 'Unavailable For Legal Reasons',
    ko: 'Unavailable For Legal Reasons',
  },
  500: {
    en: 'Internal Server Error',
    ko: 'Internal Server Error',
  },
  501: {
    en: 'Not Implemented',
    ko: 'Not Implemented',
  },
  502: {
    en: 'Bad Gateway',
    ko: 'Bad Gateway',
  },
  503: {
    en: 'Service Unavailable',
    ko: 'Service Unavailable',
  },
  504: {
    en: 'Gateway Timeout',
    ko: 'Gateway Timeout',
  },
  505: {
    en: 'HTTP Version Not Supported',
    ko: 'HTTP Version Not Supported',
  },
  506: {
    en: 'Variant Also Negotiates',
    ko: 'Variant Also Negotiates',
  },
  507: {
    en: 'Insufficient Storage',
    ko: 'Insufficient Storage',
  },
  508: {
    en: 'Loop Detected',
    ko: 'Loop Detected',
  },
  510: {
    en: 'Not Extended',
    ko: 'Not Extended',
  },
  511: {
    en: 'Network Authentication Required',
    ko: 'Network Authentication Required',
  },
};

/**
 * HttpClient 상태 리스트
 * @jinhok96 25.05.08
 */
export const HTTP_CLIENT_STATUS_LIST: HttpClientStatusList = {
  // Http 오류
  ...HTTP_STATUS_LIST,

  // 기타 오류
  9999: {
    en: 'Unexpected error has occurred.',
    ko: '예기치 않은 오류가 발생했습니다.',
  },

  // HttpClient 내부 오류
  10001: {
    en: 'Unknown HttpClient error has occurred.',
    ko: '알 수 없는 HttpClient 오류가 발생했습니다.',
  },
  10002: {
    en: 'BaseURL of HttpClient is empty.',
    ko: 'baseURL이 없습니다.',
  },
  10003: {
    en: 'Invalid HttpClient error.',
    ko: '유효하지 않은 HttpClient 오류입니다.',
  },
  10004: {
    en: 'Status is not defined in HttpClient.',
    ko: 'HttpClient에 정의되지 않은 상태입니다.',
  },
};
