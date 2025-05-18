/**
 * 위도, 소수점(-90; 90)
 *
 * 도시명과 우편번호를 지리적 좌표로 또는 그 반대로 자동 변환하는 지오코딩이 필요한 경우 지오코딩 API를 사용하세요.
 * @link 지오코딩 API: https://openweathermap.org/api/geocoding-api
 * @jinhok96 25.04.30
 */
type Lat = number;

/**
 * 경도, 소수점(-180, 180)
 *
 * 도시명과 우편번호를 지리적 좌표로 자동 변환하거나 그 반대로 변환하는 지오코딩이 필요한 경우 지오코딩 API를 사용하세요.
 * @link 지오코딩 API: https://openweathermap.org/api/geocoding-api
 * @jinhok96 25.04.30
 */
type Lon = number;

/**
 * 날짜; YYYY-MM-DD
 * @jinhok96 25.04.30
 */
type Date = string;

/**
 * 타임스탬프(유닉스 시간, UTC 표준 시간대)
 * @example dt=1586468027
 * @jinhok96 25.04.30
 */
type Dt = number;

/**
 * 응답에서 제외할 날씨 데이터
 *
 * 쉼표로 구분된 목록(공백 없음)이어야 합니다.
 *
 * 사용 가능한 값: current, minutely, hourly, daily, alerts
 * @example exclude=current,minutely,hourly
 * @jinhok96 25.05.12
 */
type Exclude = 'current' | 'minutely' | 'hourly' | 'daily' | 'alerts';

/**
 * 측정 단위
 *
 * 표준(standard), 미터법(metric), 영국식(imperial) 단위를 사용할 수 있습니다
 *
 * 단위 매개변수를 사용하지 않으면 기본적으로 표준(standard) 단위가 적용됩니다.
 *
 * 앱에서 미터법(metric), 영국식(imperial) 단위만 지원
 * @link https://openweathermap.org/api/one-call-3#data
 * @jinhok96 25.05.12
 */
export type Units = 'metric' | 'imperial';

/**
 * OpenWeather One Call API 3.0 언어 매개변수
 *
 * 앱에서 한국어, 영어만 지원
 * @jinhok96 25.05.14
 */
type Language =
  | 'kr' // Korean
  | 'en'; // English

/**
 * OpenWeather One Call API 3.0 공통 매개변수
 * @ units: 측정 단위; 표준(standard), 미터법(metric), 영국식(imperial)
 * @ lang: 출력 언어
 * @jinhok96 25.05.12
 */
export type OpenWeatherOneCallAPICommonParams = {
  units?: Units;
  lang?: Language;
};

/**
 * OpenWeather One Call API 3.0 에러 타입
 * @jinhok96 25.05.05
 */
export type OpenWeatherOneCallServiceError = {
  cod: number;
  message: string;
  parameters?: string[];
};

/**
 * @ lat: 위도, 소수점(-90; 90)
 * @ lon: 경도, 소수점(-180, 180)
 * @ exclude: 응답에서 제외할 날씨 데이터
 * @link https://openweathermap.org/api/one-call-3#current
 * @jinhok96 25.05.12
 */
export type GetCurrentAndForecastsWeatherDataParams = OpenWeatherOneCallAPICommonParams & {
  lat: Lat;
  lon: Lon;
  exclude?: Exclude[];
};

type CommonWeatherData = {
  dt: number; // Current time, Unix, UTC
  temp: number; // Temperature
  feels_like: number; // Human perception of weather temperature
  pressure: number; // Atmospheric pressure on the sea level, hPa
  humidity: number; // Humidity, %
  dew_point: number; // Dew point temperature
  clouds: number; // Cloudiness, %
  uvi: number; // Current UV index
  visibility: number; // Average visibility, metres (max 10km)
  wind_speed: number; // Wind speed
  wind_gust?: number; // Wind gust (where available)
  wind_deg: number; // Wind direction, degrees (meteorological)
  rain?: {
    '1h': number; // Precipitation, mm/h (where available)
  };
  snow?: {
    '1h': number; // Precipitation, mm/h (where available)
  };
  weather: Array<{
    id: number; // Weather condition id
    main: string; // Group of weather parameters (Rain, Snow etc.)
    description: string; // Weather condition description
    icon: string; // Weather icon id
  }>;
};

/**
 * 현재 날씨, 1시간 단위 분 예보, 48시간 단위 시간별 예보, 8일 단위 일별 예보, 정부 날씨 경보
 * @ lat: 위도, 소수점(-90; 90)
 * @ lon: 경도, 소수점(-180, 180)
 * @ timezone: 요청한 위치의 타임 존
 * @ timezone_offset UTC: 시간과의 시간 차이
 * @ current: 현재 날씨
 * @ minutely: 1시간 단위 분 예보
 * @ hourly: 48시간 단위 시간별 예보
 * @ daily: 8일 단위 일별 예보
 * @ alerts: 정부 날씨 경보
 * @link https://openweathermap.org/api/one-call-3#current
 * @jinhok96 25.05.18
 */
export type GetCurrentAndForecastsWeatherDataResponse = {
  lat: number; // Latitude of the location, decimal (−90; 90)
  lon: number; // Longitude of the location, decimal (-180; 180)
  timezone: string; // Timezone name for the requested location
  timezone_offset: number; // Shift in seconds from UTC

  current: CommonWeatherData & {
    sunrise?: number; // Sunrise time, Unix, UTC (optional for polar areas)
    sunset?: number; // Sunset time, Unix, UTC (optional for polar areas)
  };

  minutely?: Array<{
    // Minute forecast (optional)
    dt: number; // Time of the forecasted data, unix, UTC
    precipitation: number; // Precipitation, mm/h
  }>;

  hourly: Array<
    CommonWeatherData & {
      pop?: number; // Probability of precipitation (0-1) (optional) }>;
    }
  >;

  daily: Array<
    Omit<CommonWeatherData, 'temp' | 'feels_like' | 'visibility' | 'rain' | 'snow'> & {
      sunrise?: number; // Sunrise time, Unix, UTC (optional for polar areas)
      sunset?: number; // Sunset time, Unix, UTC (optional for polar areas)
      moonrise?: number; // Moonrise time, Unix, UTC
      moonset?: number; // Moonset time, Unix, UTC
      moon_phase: number; // Moon phase (0-1)
      summary?: string; // Human-readable description of the weather conditions
      temp: {
        morn: number; // Morning temperature
        day: number; // Day temperature
        eve: number; // Evening temperature
        night: number; // Night temperature
        min: number; // Min daily temperature
        max: number; // Max daily temperature
      };
      feels_like: {
        morn: number; // Morning temperature perception
        day: number; // Day temperature perception
        eve: number; // Evening temperature perception
        night: number; // Night temperature perception
      };
      pop: number; // Probability of precipitation (0-1)
      rain?: number; // Precipitation volume, mm (where available)
      snow?: number; // Snow volume, mm (where available)
    }
  >;

  alerts?: Array<{
    // National weather alerts (optional)
    sender_name: string; // Name of the alert source
    event: string; // Alert event name
    start: number; // Start of the alert, Unix, UTC
    end: number; // End of the alert, Unix, UTC
    description: string; // Description of the alert
    tags: string[]; // Type of severe weather
  }>;
};

/**
 * @ lat: 위도, 소수점(-90; 90)
 * @ lon: 경도, 소수점(-180; 180)
 * @ dt: 요청할 타임스탬프(유닉스 시간, UTC 표준 시간대)
 * @link https://openweathermap.org/api/one-call-3#history
 * @jinhok96 25.04.30
 */
export type GetWeatherDataForTimestampParams = OpenWeatherOneCallAPICommonParams & {
  lat: Lat;
  lon: Lon;
  dt: Dt;
};

/**
 * 1979년 1월 1일부터 앞으로 4일 후 예보까지 모든 타임스탬프의 날씨 데이터
 * @ lat: 위도, 소수점(-90; 90)
 * @ lon: 경도, 소수점(-180, 180)
 * @ timezone: 요청한 위치의 타임 존
 * @ timezone_offset UTC: 시간과의 시간 차이
 * @ data: 요청한 타임스탬프의 날씨 데이터
 * @link https://openweathermap.org/api/one-call-3#history
 * @jinhok96 25.05.18
 */
export type GetWeatherDataForTimestampResponse = {
  lat: number; // Latitude of the location, decimal (−90; 90)
  lon: number; // Longitude of the location, decimal (-180; 180)
  timezone: string; // Timezone name for the requested location
  timezone_offset: number; // Shift in seconds from UTC

  data: Array<{
    dt: number; // Requested time, Unix, UTC
    sunrise?: number; // Sunrise time, Unix, UTC (optional for polar areas)
    sunset?: number; // Sunset time, Unix, UTC (optional for polar areas)
    temp: number; // Temperature (units depend on request)
    feels_like: number; // Human-perceived temperature (units depend on request)
    pressure: number; // Atmospheric pressure on the sea level, hPa
    humidity: number; // Humidity, %
    dew_point: number; // Dew point temperature (units depend on request)
    clouds: number; // Cloudiness, %
    uvi?: number; // UV index (historical data may not be available)
    visibility?: number; // Average visibility, metres (max 10000)
    wind_speed: number; // Wind speed (units depend on request)
    wind_gust?: number; // Wind gust (where available, units depend on request)
    wind_deg: number; // Wind direction, degrees (meteorological)
    weather: Array<{
      id: number; // Weather condition id
      main: string; // Group of weather parameters (Rain, Snow etc.)
      description: string; // Weather condition description
      icon: string; // Weather icon id
    }>;
    rain?: {
      '1h': number; // Precipitation, mm/h (where available)
    };
    snow?: {
      '1h': number; // Precipitation, mm/h (where available)
    };
  }>;
};

/**
 * @ lat: 위도, 소수점(-90; 90)
 * @ lon: 경도, 소수점(-180; 180)
 * @ date: 요청할 날짜; YYYY-MM-DD
 * @link https://openweathermap.org/api/one-call-3#history_daily_aggregation
 * @jinhok96 25.04.30
 */
export type GetDailyAggregationParams = OpenWeatherOneCallAPICommonParams & {
  lat: Lat;
  lon: Lon;
  date: Date;
};

/**
 * 1979년 1월 2일부터 앞으로 1.5년 동안의 장기 예보까지 특정 날짜의 집계된 날씨 데이터
 * @ lat: 위도, 소수점(-90; 90)
 * @ lon: 경도, 소수점(-180, 180)
 * @ tz: ±XX:XX 형식의 시간대
 * @ date: 요청한 날짜; YYYY-MM-DD
 * @ units: 요청한 측정 단위; 표준(standard), 미터법(metric), 영국식(imperial)
 * @ cloud_cover: 구름 관련 정보
 * @ humidity: 습도 관련 정보
 * @ precipitation: 강수 관련 정보
 * @ pressure: 대기압 관련 정보
 * @ temperature: 기온 관련 정보
 * @ wind: 풍속 관련 정보
 * @link https://openweathermap.org/api/one-call-3#history_daily_aggregation
 * @jinhok96 25.04.30
 */
export type GetDailyAggregationResponse = {
  lat: number; // Latitude of the location, decimal (−90; 90)
  lon: number; // Longitude of the location, decimal (-180; 180)
  tz: string; // Timezone in the ±XX:XX format
  date: string; // Date in YYYY-MM-DD format (from 1979-01-02 to 1.5 years ahead)
  units: string; // Units of measurement specified in the request

  cloud_cover: {
    afternoon: number; // Cloud cover at 12:00, %
  };

  humidity: {
    afternoon: number; // Relative humidity at 12:00, %
  };

  precipitation: {
    total: number; // Total precipitation (liquid water equivalent), mm
  };

  pressure: {
    afternoon: number; // Atmospheric pressure at 12:00, hPa
  };

  temperature: {
    min: number; // Minimum daily temperature (units depend on request)
    max: number; // Maximum daily temperature (units depend on request)
    afternoon: number; // Temperature at 12:00 (units depend on request)
    night: number; // Temperature at 00:00 (units depend on request)
    evening: number; // Temperature at 18:00 (units depend on request)
    morning: number; // Temperature at 06:00 (units depend on request)
  };

  wind: {
    max: {
      speed: number; // Maximum wind speed (units depend on request)
      direction: number; // Wind direction in degrees (meteorological)
    };
  };
};
