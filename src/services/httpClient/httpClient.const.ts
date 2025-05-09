import type { HttpClientStatusList, HttpStatusList } from '@services/httpClient/httpClient.type';

/**
 * HTTP 상태 리스트
 * @link https://datatracker.ietf.org/doc/html/rfc2616#section-10
 * @jinhok96 25.05.08
 */
const HTTP_STATUS_LIST: HttpStatusList = {
  100: {
    en: 'Continue',
    kr: 'Continue',
  },
  101: {
    en: 'Switching Protocol',
    kr: 'Switching Protocol',
  },
  102: {
    en: 'Processing',
    kr: 'Processing',
  },
  103: {
    en: 'Early Hints',
    kr: 'Early Hints',
  },
  200: {
    en: 'OK',
    kr: 'OK',
  },
  201: {
    en: 'Created',
    kr: 'Created',
  },
  202: {
    en: 'Accepted',
    kr: 'Accepted',
  },
  203: {
    en: 'Non-Authoritative Information',
    kr: 'Non-Authoritative Information',
  },
  204: {
    en: 'No Content',
    kr: 'No Content',
  },
  205: {
    en: 'Reset Content',
    kr: 'Reset Content',
  },
  206: {
    en: 'Partial Content',
    kr: 'Partial Content',
  },
  207: {
    en: 'Multi-Status',
    kr: 'Multi-Status',
  },
  208: {
    en: 'Already Reported',
    kr: 'Already Reported',
  },
  226: {
    en: 'IM Used',
    kr: 'IM Used',
  },
  300: {
    en: 'Multiple Choice',
    kr: 'Multiple Choice',
  },
  301: {
    en: 'Moved Permanently',
    kr: 'Moved Permanently',
  },
  302: {
    en: 'Found',
    kr: 'Found',
  },
  303: {
    en: 'See Other',
    kr: 'See Other',
  },
  304: {
    en: 'Not Modified',
    kr: 'Not Modified',
  },
  305: {
    en: 'Use Proxy',
    kr: 'Use Proxy',
  },
  307: {
    en: 'Temporary Redirect',
    kr: 'Temporary Redirect',
  },
  308: {
    en: 'Permanent Redirect',
    kr: 'Permanent Redirect',
  },
  400: {
    en: 'Bad Request',
    kr: 'Bad Request',
  },
  401: {
    en: 'Unauthorized',
    kr: 'Unauthorized',
  },
  402: {
    en: 'Payment Required',
    kr: 'Payment Required',
  },
  403: {
    en: 'Forbidden',
    kr: 'Forbidden',
  },
  404: {
    en: 'Not Found',
    kr: 'Not Found',
  },
  405: {
    en: 'Method Not Allowed',
    kr: 'Method Not Allowed',
  },
  406: {
    en: 'Not Acceptable',
    kr: 'Not Acceptable',
  },
  407: {
    en: 'Proxy Authentication Required',
    kr: 'Proxy Authentication Required',
  },
  408: {
    en: 'Request Timeout',
    kr: 'Request Timeout',
  },
  409: {
    en: 'Conflict',
    kr: 'Conflict',
  },
  410: {
    en: 'Gone',
    kr: 'Gone',
  },
  411: {
    en: 'Length Required',
    kr: 'Length Required',
  },
  412: {
    en: 'Precondition Failed',
    kr: 'Precondition Failed',
  },
  413: {
    en: 'Payload Too Large',
    kr: 'Payload Too Large',
  },
  414: {
    en: 'URI Too Long',
    kr: 'URI Too Long',
  },
  415: {
    en: 'Unsupported Media Type',
    kr: 'Unsupported Media Type',
  },
  416: {
    en: 'Range Not Satisfiable',
    kr: 'Range Not Satisfiable',
  },
  417: {
    en: 'Expectation Failed',
    kr: 'Expectation Failed',
  },
  418: {
    en: "I'm a teapot",
    kr: "I'm a teapot",
  },
  421: {
    en: 'Misdirected Request',
    kr: 'Misdirected Request',
  },
  422: {
    en: 'Unprocessable Entity',
    kr: 'Unprocessable Entity',
  },
  423: {
    en: 'Locked',
    kr: 'Locked',
  },
  424: {
    en: 'Failed Dependency',
    kr: 'Failed Dependency',
  },
  426: {
    en: 'Upgrade Required',
    kr: 'Upgrade Required',
  },
  428: {
    en: 'Precondition Required',
    kr: 'Precondition Required',
  },
  429: {
    en: 'Too Many Requests',
    kr: 'Too Many Requests',
  },
  431: {
    en: 'Request Header Fields Too Large',
    kr: 'Request Header Fields Too Large',
  },
  451: {
    en: 'Unavailable For Legal Reasons',
    kr: 'Unavailable For Legal Reasons',
  },
  500: {
    en: 'Internal Server Error',
    kr: 'Internal Server Error',
  },
  501: {
    en: 'Not Implemented',
    kr: 'Not Implemented',
  },
  502: {
    en: 'Bad Gateway',
    kr: 'Bad Gateway',
  },
  503: {
    en: 'Service Unavailable',
    kr: 'Service Unavailable',
  },
  504: {
    en: 'Gateway Timeout',
    kr: 'Gateway Timeout',
  },
  505: {
    en: 'HTTP Version Not Supported',
    kr: 'HTTP Version Not Supported',
  },
  506: {
    en: 'Variant Also Negotiates',
    kr: 'Variant Also Negotiates',
  },
  507: {
    en: 'Insufficient Storage',
    kr: 'Insufficient Storage',
  },
  508: {
    en: 'Loop Detected',
    kr: 'Loop Detected',
  },
  510: {
    en: 'Not Extended',
    kr: 'Not Extended',
  },
  511: {
    en: 'Network Authentication Required',
    kr: 'Network Authentication Required',
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
    kr: '예기치 않은 오류가 발생했습니다.',
  },

  // HttpClient 내부 오류
  10001: {
    en: 'Unknown HttpClient error has occurred.',
    kr: '알 수 없는 HttpClient 오류가 발생했습니다.',
  },
  10002: {
    en: 'BaseURL of HttpClient is empty.',
    kr: 'baseURL이 없습니다.',
  },
  10003: {
    en: 'Invalid HttpClient error.',
    kr: '유효하지 않은 HttpClient 오류입니다.',
  },
  10004: {
    en: 'Status is not defined in HttpClient.',
    kr: 'HttpClient에 정의되지 않은 상태입니다.',
  },
};
