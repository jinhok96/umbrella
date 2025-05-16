declare module 'react-native-config' {
  export interface NativeConfig {
    OPEN_WEATHER_API_BASE_URL?: string;
    OPEN_WEATHER_API_KEY?: string;
    GOOGLE_MAPS_API_KEY?: string;
    GOOGLE_MAPS_PLACES_API_BASE_URL?: string;
    GOOGLE_MAPS_GEOCODING_API_BASE_URL?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
