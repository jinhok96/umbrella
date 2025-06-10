import type { ForecastsStoreState } from '@store/forecastsStore/useForecastsStore.type';

// export const INIT_FORECASTS_STORE_STATE: ForecastsStoreState = {
//   current: null,
//   minutely: null,
//   hourly: null,
//   daily: null,
//   alerts: null,
// };

export const INIT_FORECASTS_STORE_STATE: ForecastsStoreState = {
  current: {
    dt: 1684929490,
    sunrise: 1684926645,
    sunset: 1684977332,
    temp: 292.5,
    feels_like: 292.8,
    pressure: 1014,
    humidity: 89,
    dew_point: 290.6,
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
    pm25: 15,
    pm10: 20,
    o3: 63,
  },
  minutely: new Array(60).fill(0).map((_, index) => ({
    dt: 1684929540 + index * 60,
    precipitation: 0,
  })),
  hourly: new Array(48).fill(0).map((_, index) => ({
    dt: 1684926000 + index * 60 * 60,
    temp: 292.5 * Math.random(),
    feels_like: 292.5,
    pressure: 1014,
    humidity: 91,
    dew_point: 290.5,
    uvi: 0,
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
    pm25: 15,
    pm10: 20,
    o3: 63,
  })),
  daily: new Array(8).fill(0).map((_, index) => ({
    dt: 1684951200 + index * 60 * 60 * 24,
    sunrise: 1684926645,
    sunset: 1684977332,
    moonrise: 1684941060,
    moonset: 1684905480,
    moon_phase: 0.16,
    summary: 'Expect a day of partly cloudy with rain',
    temp: {
      day: 299.5 * Math.random(),
      min: 290.6 * Math.random(),
      max: 300.3 * Math.random(),
      night: 291.4 * Math.random(),
      eve: 297.5 * Math.random(),
      morn: 292.5 * Math.random(),
    },
    feels_like: {
      day: 299.2,
      night: 291.3,
      eve: 297.8,
      morn: 292.8,
    },
    pressure: 1016,
    humidity: 59,
    dew_point: 290.4,
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
  })),
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
  checklist: {
    umbrella: {
      hours: [21, 22],
      message: {
        ko: `오후 4시에 비가 내려요. 우산을 잊지말고 꼭 챙기세요!`,
        en: `It’s going to rain this afternoon at 4. Make sure to bring an umbrella if you’re heading out!`,
      },
    },
    mask: {
      pm10: 15,
      pm25: 20,
      message: {
        ko: `미세먼지 농도가 00로 매우 높아요.\n마스크를 착용하세요!`,
        en: `It’s going to rain this afternoon at 4. Make sure to bring an umbrella if you’re heading out!`,
      },
    },
    clothes: {
      temp: {
        day: 26.35,
        min: 17.45,
        max: 27.15,
        night: 18.25,
        eve: 24.35,
        morn: 19.35,
      },
      message: {
        ko: `일교차가 크고 쌀쌀해요. 긴팔을 입는 게 좋아요!`,
        en: `It’s going to rain this afternoon at 4. Make sure to bring an umbrella if you’re heading out!`,
      },
    },
    suncream: {
      uvi: 9.23,
      message: {
        ko: `자외선지수가 00으로 매우 높아요!\n썬크림으로 피부를 보호하세요!`,
        en: `It’s going to rain this afternoon at 4. Make sure to bring an umbrella if you’re heading out!`,
      },
    },
  },
};
