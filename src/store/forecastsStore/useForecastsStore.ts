import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { isRainy } from '@libs/utils/weather.util';
import { INIT_FORECASTS_STORE_STATE } from '@store/forecastsStore/useForecastsStore.const';

import type { ForecastsStore, ForecastsStoreState } from '@store/forecastsStore/useForecastsStore.type';
import type { StateCreator } from 'zustand';

/**
 * 날씨 정보 스토어
 * @ current - 현재 날씨 (미세먼지 포함)
 * @ minutely - 1시간 단위 분별 예보
 * @ hourly - 48시간 단위 시간별 예보 (미세먼지 포함)
 * @ daily - 8일 단위 일별 예보
 * @ alerts - 정부 날씨 경보
 * @ checklist - 체크리스트 정보
 * @ setForecasts - 전체 날씨 정보 설정 - useGetCurrentAndForecastsWeatherData, useGetCurrentAirQuality, useGetAirQualityHourlyForecasts의 Response Data 가공
 * @jinhok96 25.06.10
 */
const forecastsStoreCreator: StateCreator<ForecastsStore> = set => ({
  ...INIT_FORECASTS_STORE_STATE,
  setForecasts: (
    getCurrentAndForecastsWeatherResponseData,
    postCurrentAirQualityResponseData,
    postAirQualityHourlyForecastsResponseData,
  ) => {
    const { current, minutely, hourly, daily, alerts } = getCurrentAndForecastsWeatherResponseData;
    const { pm10: currentPm10, pm25: currentPm25, o3: currentO3 } = postCurrentAirQualityResponseData;

    const newCurrent = { ...current, pm10: currentPm10, pm25: currentPm25, o3: currentO3 };

    const newMinutely = minutely;

    const newChecklist: ForecastsStoreState['checklist'] = {
      umbrella: {
        hours: [],
      },
      mask: {
        pm10: 0,
        pm25: 0,
      },
      clothes: {
        temp: null,
      },
      suncream: {
        uvi: 0,
      },
    };

    const newHourly = hourly.map((hourlyData, index) => {
      const date = new Date(hourlyData.dt * 1000);
      const day = date.getDate();
      const hour = date.getHours();

      const { pm10: hourlyPm10, pm25: hourlyPm25, o3: hourlyO3 } = postAirQualityHourlyForecastsResponseData[index];

      // 체크리스트
      if (day === new Date(hourly[0].dt * 1000).getDate()) {
        // umbrella.hours
        if (isRainy(hourlyData.pop || 0) >= 2) newChecklist.umbrella.hours.push(hour);

        // mask.pm10
        if (!!hourlyPm10 && hourlyPm10 > newChecklist.mask.pm10) newChecklist.mask.pm10 = hourlyPm10;

        // mask.pm25
        if (!!hourlyPm25 && hourlyPm25 > newChecklist.mask.pm25) newChecklist.mask.pm25 = hourlyPm25;

        // suncream.uvi
        if (hourlyData.uvi > newChecklist.suncream.uvi) newChecklist.suncream.uvi = hourlyData.uvi;
      }

      return { ...hourlyData, pm10: hourlyPm10, pm25: hourlyPm25, o3: hourlyO3 };
    });

    const newDaily = daily;

    // 체크리스트 - clothes.temp
    newChecklist.clothes.temp = newDaily?.[0].temp;

    const newAlerts = alerts;

    set({
      current: newCurrent || null,
      minutely: newMinutely || null,
      hourly: newHourly || null,
      daily: newDaily || null,
      alerts: newAlerts || null,
      checklist: newChecklist || null,
    });
  },
});

export const useForecastsStore = create<ForecastsStore>()(immer(forecastsStoreCreator));
export const forecastsStore = useForecastsStore;
