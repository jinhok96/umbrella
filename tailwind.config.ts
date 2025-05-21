import { platformSelect } from 'nativewind/theme';

import type { Config } from 'tailwindcss';
import type { PluginCreator } from 'tailwindcss/types/config';

const nativewindPreset = require('nativewind/preset');

// transition-colors에 대응하는 속성
const COLOR_TRANSITION_PROPERTY_LIST: Record<string, string> = {
  bg: 'background-color',
  text: 'color',
  border: 'border-color',
  fill: 'fill',
  stroke: 'stroke',
  decoration: 'text-decoration-color',
};

/**
 * 컬러 전환 애니메이션 자동화 플러그인
 * @jinhok96 25.05.21
 */
const autoColorTransitionPlugin: PluginCreator = ({ matchUtilities, theme }) => {
  Object.entries(COLOR_TRANSITION_PROPERTY_LIST).forEach(([prefix, property]) => {
    matchUtilities(
      {
        [prefix]: () => ({
          'transition-property': property,
          'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)', // ease-in-out
          'transition-duration': '150ms',
        }),
      },
      { values: theme('colors') },
    );
  });
};

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [nativewindPreset],
  darkMode: 'class',
  theme: {
    extend: {
      // format: ${font}-${weight}
      fontFamily: {
        // Pretendard
        'pretendard-regular': platformSelect({
          default: 'Pretendard-Regular',
          android: 'Pretendard-Regular',
          ios: 'Pretendard-Regular',
        }),
        'pretendard-medium': platformSelect({
          default: 'Pretendard-Medium',
          android: 'Pretendard-Medium',
          ios: 'Pretendard-Medium',
        }),
        'pretendard-semibold': platformSelect({
          default: 'Pretendard-SemiBold',
          android: 'Pretendard-SemiBold',
          ios: 'Pretendard-SemiBold',
        }),
        'pretendard-bold': platformSelect({
          default: 'Pretendard-Bold',
          android: 'Pretendard-Bold',
          ios: 'Pretendard-Bold',
        }),
        // Montserrat
        'montserrat-regular': platformSelect({
          default: 'Montserrat-Regular',
          android: 'Montserrat-Regular',
          ios: 'Montserrat-Regular',
        }),
        'montserrat-medium': platformSelect({
          default: 'Montserrat-Medium',
          android: 'Montserrat-Medium',
          ios: 'Montserrat-Medium',
        }),
        'montserrat-semibold': platformSelect({
          default: 'Montserrat-SemiBold',
          android: 'Montserrat-SemiBold',
          ios: 'Montserrat-SemiBold',
        }),
        'montserrat-bold': platformSelect({
          default: 'Montserrat-Bold',
          android: 'Montserrat-Bold',
          ios: 'Montserrat-Bold',
        }),
      },
      colors: {
        // Test
        test: 'var(--color-test)',
        // Gray
        gray: {
          90: 'var(--color-gray-90)',
          80: 'var(--color-gray-80)',
          70: 'var(--color-gray-70)',
          60: 'var(--color-gray-60)',
          50: 'var(--color-gray-50)',
          40: 'var(--color-gray-40)',
          30: 'var(--color-gray-30)',
          20: 'var(--color-gray-20)',
          10: 'var(--color-gray-10)',
          5: 'var(--color-gray-5)',
        },
        white: 'var(--color-white)',
        // Primary
        morning: {
          default: 'var(--color-morning)',
          medium: 'var(--color-morning-medium)',
          light: 'var(--color-morning-light)',
        },
        night: {
          default: 'var(--color-night)',
          medium: 'var(--color-night-medium)',
          light: 'var(--color-night-light)',
        },
        // State
        error: {
          default: 'var(--color-error)',
          light: 'var(--color-error-light)',
        },
        success: {
          default: 'var(--color-success)',
          light: 'var(--color-success-light)',
        },
        // Black Transparency
        'black-transparency': {
          90: 'var(--color-black-transparency-90)',
          80: 'var(--color-black-transparency-80)',
          70: 'var(--color-black-transparency-70)',
          60: 'var(--color-black-transparency-60)',
          50: 'var(--color-black-transparency-50)',
          40: 'var(--color-black-transparency-40)',
          30: 'var(--color-black-transparency-30)',
          20: 'var(--color-black-transparency-20)',
          10: 'var(--color-black-transparency-10)',
          5: 'var(--color-black-transparency-5)',
        },
        // White Transparency
        'white-transparency': {
          90: 'var(--color-white-transparency-90)',
          80: 'var(--color-white-transparency-80)',
          70: 'var(--color-white-transparency-70)',
          60: 'var(--color-white-transparency-60)',
          50: 'var(--color-white-transparency-50)',
          40: 'var(--color-white-transparency-40)',
          30: 'var(--color-white-transparency-30)',
          20: 'var(--color-white-transparency-20)',
          10: 'var(--color-white-transparency-10)',
          5: 'var(--color-white-transparency-5)',
        },
      },
    },
  },
  plugins: [autoColorTransitionPlugin],
};

export default config;
