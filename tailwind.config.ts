import type { Config } from 'tailwindcss';

const nativewindPreset = require('nativewind/preset');

/**
 * HEX 코드에 알파 값을 추가하는 함수
 * @param hex HEX 코드
 * @param opacity 알파 값 (0 ~ 1)
 * @returns 알파 값이 포함된 8자리 HEX 코드
 */
// function withAlpha(hex: string, opacity: number) {
//   if (opacity === 1) return hex;
//   if (opacity < 0 || opacity > 1) throw new Error('Opacity must be between 0 and 1');

//   const alphaHex = Math.round(opacity * 255)
//     .toString(16)
//     .padStart(2, '0');

//   return `${hex}${alphaHex}`;
// }

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [nativewindPreset],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Gray
        gray: {
          90: '#191F28',
          80: '#333D4B',
          70: '#4E5968',
          60: '#6B7684',
          50: '#8B95A1',
          40: '#B0B8C1',
          30: '#D0D8DE',
          20: '#E2E7EB',
          10: '#EEF0F2',
          5: '#F9FAFB',
        },
        white: '#FFFFFF',
        // Primary
        morning: 'var(--color-morning)',
        // morningMedium: withAlpha('#168AFF', 0.2),
        // morningLight: withAlpha('#168AFF', 0.1),
        // night: '#6C75FF',
        // nightMedium: withAlpha('#8088FF', 0.2),
        // nightLight: withAlpha('#8088FF', 0.1),
        // // State
        // error: '#FF5E5E',
        // errorLight: withAlpha('#FF5E5E', 0.1),
        // success: '#03B26C',
        // successLight: withAlpha('#03B26C', 0.1),
        // // BlackTransparency
        // blackTransparency: {
        //   90: withAlpha('#000000', 0.9),
        //   80: withAlpha('#000000', 0.8),
        //   70: withAlpha('#000000', 0.7),
        //   60: withAlpha('#000000', 0.6),
        //   50: withAlpha('#000000', 0.5),
        //   40: withAlpha('#000000', 0.4),
        //   30: withAlpha('#000000', 0.3),
        //   20: withAlpha('#000000', 0.2),
        //   10: withAlpha('#000000', 0.1),
        //   5: withAlpha('#000000', 0.05),
        // },
        // // WhiteTransparency
        // whiteTransparency: {
        //   90: withAlpha('#FFFFFF', 0.9),
        //   80: withAlpha('#FFFFFF', 0.8),
        //   70: withAlpha('#FFFFFF', 0.7),
        //   60: withAlpha('#FFFFFF', 0.6),
        //   50: withAlpha('#FFFFFF', 0.5),
        //   40: withAlpha('#FFFFFF', 0.4),
        //   30: withAlpha('#FFFFFF', 0.3),
        //   20: withAlpha('#FFFFFF', 0.2),
        //   10: withAlpha('#FFFFFF', 0.1),
        //   5: withAlpha('#FFFFFF', 0.05),
        // },
      },
    },
  },
  plugins: [],
};

export default config;
