import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { INIT_FORECASTS_STORE_STATE } from '@store/forecastsStore/useForecastsStore.const';

import type { ForecastsStore } from '@store/forecastsStore/useForecastsStore.type';
import type { StateCreator } from 'zustand';

/**
 * 날씨 정보 스토어
 * @ setCurrent - 현재 날씨 설정 (미세먼지 포함)
 * @ setMinutely - 1시간 단위 분별 예보 설정
 * @ setHourly - 48시간 단위 시간별 예보 설정 (미세먼지 포함)
 * @ setDaily - 8일 단위 일별 예보
 * @ setAlerts - 정부 날씨 경보 설정
 * @jinhok96 25.05.18
 */
const forecastsStoreCreator: StateCreator<ForecastsStore> = set => ({
  ...INIT_FORECASTS_STORE_STATE,
  setCurrent: current => set({ current: current || null }),
  setMinutely: minutely => set({ minutely: minutely || null }),
  setDaily: daily => set({ daily: daily || null }),
  setHourly: hourly => set({ hourly: hourly || null }),
  setAlerts: alerts => set({ alerts: alerts || null }),
  setForecasts: (
    getCurrentAndForecastsWeatherResponseData,
    postCurrentAirQualityResponseData,
    postAirQualityHourlyForecastsResponseData,
  ) => {
    const { current, minutely, hourly, daily, alerts } = getCurrentAndForecastsWeatherResponseData;
    const { pm10, pm25 } = postCurrentAirQualityResponseData;

    const newCurrent = current ? { ...current, pm10, pm25 } : null;

    const newMinutely = minutely || null;

    const newHourly = hourly
      ? hourly.map((hourlyData, index) => ({
          ...hourlyData,
          pm10: postAirQualityHourlyForecastsResponseData[index].pm10,
          pm25: postAirQualityHourlyForecastsResponseData[index].pm25,
        }))
      : null;

    const newDaily = daily || null;

    const newAlerts = alerts || null;

    set({ current: newCurrent, minutely: newMinutely, hourly: newHourly, daily: newDaily, alerts: newAlerts });
  },
});

export const useForecastsStore = create<ForecastsStore>()(immer(forecastsStoreCreator));
export const forecastsStore = useForecastsStore;
