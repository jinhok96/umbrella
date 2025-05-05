declare module 'react-native-config' {
  export interface NativeConfig {
    OPEN_WEATHER_API_BASE_URL?: string;
    OPEN_WEATHER_API_KEY?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
