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
      umbrella: null,
      mask: null,
      clothes: null,
      suncream: null,
      ozone: null,
    };

    const newHourly = hourly.map((hourlyData, index) => {
      const date = new Date(hourlyData.dt * 1000);
      const day = date.getDate();
      const hour = date.getHours();

      const { pm10: hourlyPm10, pm25: hourlyPm25, o3: hourlyO3 } = postAirQualityHourlyForecastsResponseData[index];

      // 체크리스트
      if (day === new Date(hourly[0].dt * 1000).getDate()) {
        // umbrella.hours
        if (isRainy(hourlyData.pop || 0) >= 2) {
          if (!newChecklist.umbrella) newChecklist.umbrella = { hours: [] };
          newChecklist.umbrella.hours.push(hour);
        }

        // mask.pm10
        if (hourlyPm10) {
          if (!newChecklist.mask) newChecklist.mask = { pm10: 0, pm25: 0 };
          if (hourlyPm10 > newChecklist.mask.pm10) newChecklist.mask.pm10 = hourlyPm10;
        }

        // mask.pm25
        if (hourlyPm25) {
          if (!newChecklist.mask) newChecklist.mask = { pm10: 0, pm25: 0 };
          if (hourlyPm25 > newChecklist.mask.pm25) newChecklist.mask.pm25 = hourlyPm25;
        }

        // ozone.o3
        if (hourlyO3) {
          if (!newChecklist.ozone) newChecklist.ozone = { o3: 0 };
          if (hourlyO3 > newChecklist.ozone.o3) newChecklist.ozone.o3 = hourlyO3;
        }
      }

      return { ...hourlyData, pm10: hourlyPm10, pm25: hourlyPm25, o3: hourlyO3 };
    });

    const newDaily = daily;

    // 체크리스트 - suncream.uvi
    /**
      낮음	~2	안전. 따로 대비하지않아도 무방
      보통	3~5	모자, 선글라스 사용 권장
      높음	6~7	1-2시간에 피부화상. 긴소매옷과 양산, 자외선 차단제 권장
      매우 높음	8~10	1시간 내로 피부화상. 한낮에는 외출자제 권장
      위험	11+	수십 분 정도로 피부화상. 가능한 한 실내활동.
     */
    if (!newChecklist.suncream) newChecklist.suncream = { uvi: 0 };
    newChecklist.suncream.uvi = newDaily[0].uvi;

    // 체크리스트 - clothes.temp
    if (!newChecklist.clothes) newChecklist.clothes = { temp: null };
    newChecklist.clothes.temp = newDaily?.[0].temp;

    // 나중에 작업할 것
    // 체크리스트 - umbrella.message
    if (newChecklist.umbrella) {
      newChecklist.umbrella.message = {
        ko: `오후 00시에 비가 내려요. 우산을 잊지말고 꼭 챙기세요!`,
        en: `It’s going to rain this afternoon at 00. Make sure to bring an umbrella if you’re heading out!`,
      };
    }

    // 체크리스트 - mask.message
    if (newChecklist.mask) {
      newChecklist.mask.message = {
        ko: `미세먼지 농도가 00로 매우 높아요.\n마스크를 착용해요!`,
        en: `It’s going to rain this afternoon at 00. Make sure to bring an umbrella if you’re heading out!`,
      };
    }

    // 체크리스트 - clothes.message
    if (newChecklist.clothes.temp) {
      newChecklist.clothes.message = {
        ko: `일교차가 크고 쌀쌀해요. 긴팔을 입는 게 좋아요!`,
        en: `It’s going to rain this afternoon at 00. Make sure to bring an umbrella if you’re heading out!`,
      };
    }

    // 체크리스트 - suncream.message
    if (newChecklist.suncream.uvi) {
      newChecklist.suncream.message = {
        ko: `자외선지수가 00으로 매우 높아요!\n썬크림으로 피부를 보호하세요!`,
        en: `It’s going to rain this afternoon at 00. Make sure to bring an umbrella if you’re heading out!`,
      };
    }

    const newAlerts = alerts;

    set({
      current: newCurrent || null,
      minutely: newMinutely || null,
      hourly: newHourly || null,
      daily: newDaily || null,
      alerts: newAlerts || null,
      checklist: newChecklist,
    });
  },
});

export const useForecastsStore = create<ForecastsStore>()(immer(forecastsStoreCreator));
export const forecastsStore = useForecastsStore;
