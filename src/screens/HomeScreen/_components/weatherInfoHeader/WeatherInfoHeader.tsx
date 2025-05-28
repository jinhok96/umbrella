import { Text, View } from 'react-native';

import Show from '@components/common/Show';
import LocationHeader from '@screens/HomeScreen/_components/weatherInfoHeader/LocationHeader';
import { useRouteStore } from '@store/routeStore/useRouteStore';

import type { RouteName } from '@navigation/Navigation.type';

const WEATHER_INFO_HEADER_SHOW_ROUTE_NAME_LIST: Array<RouteName> = [
  'Home',
  'CurrentForecast',
  'HourlyForecast',
  'DailyForecast',
];

export default function WeatherInfoHeader() {
  const currentRouteName = useRouteStore(state => state.currentRouteName);

  const isHome = currentRouteName && WEATHER_INFO_HEADER_SHOW_ROUTE_NAME_LIST.includes(currentRouteName);

  return (
    <Show when={!!isHome}>
      <View className="pt-safe border-b bg-morning">
        <LocationHeader />
        <View className="p-5">
          <Text>이 위치에 오늘 날씨 정보</Text>
        </View>
      </View>
    </Show>
  );
}
