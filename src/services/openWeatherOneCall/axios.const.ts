import type { LocalizedTextMap } from '@libs/utils/localize/localize.type';

// 에러 코드 타입
type OpenWeatherOneCallServiceErrorStatus = LocalizedTextMap<'400' | '401' | '404' | '429'>;

/**
 * openWeatherOneCallService 에러 코드
 * @jinhok96 25.05.08
 */
export const OPEN_WEATHER_ONE_CALL_SERVICE_ERROR_STATUS: OpenWeatherOneCallServiceErrorStatus = {
  '400': {
    en: 'Some mandatory parameters in the request are missing or some of request parameters have incorrect format or values out of allowed range.',
    ko: '요청의 일부 필수 파라미터가 누락되었거나, 요청 파라미터의 형식이 잘못되었거나, 값이 허용 범위를 벗어났습니다.',
  },
  '401': {
    en: 'API token did not providen in the request or in case API token provided in the request does not grant access to this API.',
    ko: '요청에 API 토큰이 제공되지 않았거나, 요청에 제공된 API 토큰이 유효하지 않습니다.',
  },
  '404': {
    en: 'Data with requested parameters does not exist in service database.',
    ko: '요청된 파라미터가 있는 데이터가 서비스 데이터베이스에 존재하지 않습니다.',
  },
  '429': {
    en: 'Key quota of requests for provided API to this API was exceeded.',
    ko: '제공된 API에 대한 요청의 키 할당량이 초과되었습니다.',
  },
};
