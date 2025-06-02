import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { INIT_FORECASTS_STORE_STATE } from '@store/forecastsStore/useForecastsStore.const';

import type { ForecastsStore } from '@store/forecastsStore/useForecastsStore.type';
import type { StateCreator } from 'zustand';

/**
 * 날씨 정보 스토어
 * @ current - 현재 날씨 (미세먼지 포함)
 * @ minutely - 1시간 단위 분별 예보
 * @ hourly - 48시간 단위 시간별 예보 (미세먼지 포함)
 * @ daily - 8일 단위 일별 예보
 * @ alerts - 정부 날씨 경보
 * @ setForecasts - 전체 날씨 정보 설정 - useGetCurrentAndForecastsWeatherData, useGetCurrentAirQuality, useGetAirQualityHourlyForecasts의 Response Data 가공
 * @jinhok96 25.05.18
 */
const forecastsStoreCreator: StateCreator<ForecastsStore> = set => ({
  ...INIT_FORECASTS_STORE_STATE,
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
