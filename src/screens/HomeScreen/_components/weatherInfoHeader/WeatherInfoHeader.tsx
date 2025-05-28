import { Text, View } from 'react-native';

import LocationHeader from '@screens/HomeScreen/_components/weatherInfoHeader/LocationHeader';

/**
 * 현재 위치 날씨 정보를 보여주는 컴포넌트
 * @jinhok96 25.05.29
 */
export default function WeatherInfoHeader() {
  return (
    <View className="pt-safe bg-morning">
      <LocationHeader />
      <View className="p-5">
        <Text>이 위치에 오늘 날씨 정보</Text>
      </View>
    </View>
  );
}
