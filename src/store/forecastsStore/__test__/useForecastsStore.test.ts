import { act, renderHook } from '@testing-library/react-native';

import { forecastsStore, useForecastsStore } from '@store/forecastsStore/useForecastsStore';
import { INIT_FORECASTS_STORE_STATE } from '@store/forecastsStore/useForecastsStore.const';

import type { PostCurrentAirQualityResponse } from '@services/googleMaps/axios.type';
import type { GetCurrentAndForecastsWeatherDataResponse } from '@services/openWeatherOneCall/axios.type';
import type { ForecastsStoreState } from '@store/forecastsStore/useForecastsStore.type';

type StoreState = ForecastsStoreState;

const GET_CURRENT_AND_FORECASTS_WEATHER_RESPONSE_MOCK: GetCurrentAndForecastsWeatherDataResponse = {
  lat: 33.44,
  lon: -94.04,
  timezone: 'America/Chicago',
  timezone_offset: -18000,
  current: {
    dt: 1684929490,
    sunrise: 1684926645,
    sunset: 1684977332,
    temp: 292.55,
    feels_like: 292.87,
    pressure: 1014,
    humidity: 89,
    dew_point: 290.69,
    uvi: 0.16,
    clouds: 53,
    visibility: 10000,
    wind_speed: 3.13,
    wind_deg: 93,
    wind_gust: 6.71,
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04d',
      },
    ],
  },
  minutely: new Array(60).fill({
    dt: 1684929540,
    precipitation: 0,
  }),
  hourly: new Array(48).fill({
    dt: 1684926000,
    temp: 292.01,
    feels_like: 292.33,
    pressure: 1014,
    humidity: 91,
    dew_point: 290.51,
    uvi: 0.16,
    clouds: 54,
    visibility: 10000,
    wind_speed: 2.58,
    wind_deg: 86,
    wind_gust: 5.88,
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04n',
      },
    ],
    pop: 0.15,
  }),
  daily: new Array(8).fill({
    dt: 1684951200,
    sunrise: 1684926645,
    sunset: 1684977332,
    moonrise: 1684941060,
    moonset: 1684905480,
    moon_phase: 0.16,
    summary: 'Expect a day of partly cloudy with rain',
    temp: {
      day: 299.03,
      min: 290.69,
      max: 300.35,
      night: 291.45,
      eve: 297.51,
      morn: 292.55,
    },
    feels_like: {
      day: 299.21,
      night: 291.37,
      eve: 297.86,
      morn: 292.87,
    },
    pressure: 1016,
    humidity: 59,
    dew_point: 290.48,
    wind_speed: 3.98,
    wind_deg: 76,
    wind_gust: 8.92,
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10d',
      },
    ],
    clouds: 92,
    pop: 0.47,
    rain: 0.15,
    uvi: 9.23,
  }),
  alerts: [
    {
      sender_name: 'NWS Philadelphia - Mount Holly (New Jersey, Delaware, Southeastern Pennsylvania)',
      event: 'Small Craft Advisory',
      start: 1684952747,
      end: 1684988747,
      description: '...SMALL CRAFT ADVISORY REMAINS IN EFFECT FROM 5 PM THIS\nAFTERNOON TO 3 AM EST FRIDAY...',
      tags: [],
    },
  ],
};

const POST_CURRENT_AIR_QUALITY_RESPONSE_MOCK: PostCurrentAirQualityResponse = {
  dateTime: 'testDateTime',
  pm25: 15,
  pm10: 20,
  o3: 63,
};

const POST_AIR_QUALITY_HOURLY_FORECASTS_RESPONSE_MOCK = new Array(48).fill(POST_CURRENT_AIR_QUALITY_RESPONSE_MOCK);

const INIT_STATE_MOCK: StoreState = {
  current: null,
  minutely: null,
  hourly: null,
  daily: null,
  alerts: null,
  checklist: null,
};

const NEW_STATE_MOCK: StoreState = {
  current: {
    ...GET_CURRENT_AND_FORECASTS_WEATHER_RESPONSE_MOCK.current,
    pm10: POST_CURRENT_AIR_QUALITY_RESPONSE_MOCK.pm10,
    pm25: POST_CURRENT_AIR_QUALITY_RESPONSE_MOCK.pm25,
    o3: POST_CURRENT_AIR_QUALITY_RESPONSE_MOCK.o3,
  },
  minutely: GET_CURRENT_AND_FORECASTS_WEATHER_RESPONSE_MOCK.minutely,
  hourly: GET_CURRENT_AND_FORECASTS_WEATHER_RESPONSE_MOCK.hourly.map((hourlyData, index) => ({
    ...hourlyData,
    pm10: POST_AIR_QUALITY_HOURLY_FORECASTS_RESPONSE_MOCK[index].pm10,
    pm25: POST_AIR_QUALITY_HOURLY_FORECASTS_RESPONSE_MOCK[index].pm25,
    o3: POST_AIR_QUALITY_HOURLY_FORECASTS_RESPONSE_MOCK[index].o3,
  })),
  daily: GET_CURRENT_AND_FORECASTS_WEATHER_RESPONSE_MOCK.daily,
  alerts: GET_CURRENT_AND_FORECASTS_WEATHER_RESPONSE_MOCK.alerts,
  checklist: {
    umbrella: {
      hours: [],
    },
    mask: {
      pm10: POST_AIR_QUALITY_HOURLY_FORECASTS_RESPONSE_MOCK[0].pm10,
      pm25: POST_AIR_QUALITY_HOURLY_FORECASTS_RESPONSE_MOCK[0].pm25,
    },
    clothes: {
      temp: GET_CURRENT_AND_FORECASTS_WEATHER_RESPONSE_MOCK.daily[0].temp,
    },
    suncream: {
      uvi: GET_CURRENT_AND_FORECASTS_WEATHER_RESPONSE_MOCK.hourly[0].uvi,
    },
  },
};

/**
 * useForecastsStore 테스트
 * @jinhok96 25.06.10
 */
describe('useForecastsStore', () => {
  const store = forecastsStore;
  const useStore = useForecastsStore;

  beforeEach(() => {
    // 각 테스트 전에 스토어를 초기 상태로 리셋
    store.setState(INIT_STATE_MOCK);
  });

  afterAll(() => {
    // 모든 테스트 완료 후 스토어를 초기 상태로 리셋
    store.setState(INIT_FORECASTS_STORE_STATE);
  });

  test('초기 상태 확인', () => {
    const { result } = renderHook(() => useStore());
    expect(result.current).toMatchObject(INIT_STATE_MOCK);
  });

  test('액션: setForecasts', () => {
    const { result } = renderHook(() => useStore());
    expect(result.current).toMatchObject(INIT_STATE_MOCK);

    act(() => {
      result.current.setForecasts(
        GET_CURRENT_AND_FORECASTS_WEATHER_RESPONSE_MOCK,
        POST_CURRENT_AIR_QUALITY_RESPONSE_MOCK,
        POST_AIR_QUALITY_HOURLY_FORECASTS_RESPONSE_MOCK,
      );
    });

    expect(result.current).toMatchObject(NEW_STATE_MOCK);
  });
});
