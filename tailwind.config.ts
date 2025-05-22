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

// px -> rem 변환 상수 (1/16)
const REM = 0.0625;
// 타이포그래피 생성 함수
const generateFontSize = (size: number) => `${size * REM}rem`;
const generateLetterSpacing = (size: number, letterSpacing: number) => `${size * letterSpacing * REM}rem`;
const generateTypography = (size: number, lineHeight: string, letterSpacing: number) => ({
  fontSize: generateFontSize(size),
  lineHeight,
  letterSpacing: generateLetterSpacing(size, letterSpacing),
});

/**
 * 타이포그래피 생성 플러그인
 * `.text-${font}-${name}`
 * @jinhok96 25.05.21
 */
const typographyPlugin: PluginCreator = ({ addUtilities }) => {
  addUtilities({
    // Pretendard
    // Title
    '.text-pretendard-title-1': generateTypography(28, '140%', -0.03),
    '.text-pretendard-title-2': generateTypography(24, '140%', -0.03),
    '.text-pretendard-title-3': generateTypography(20, '145%', -0.03),
    '.text-pretendard-title-4': generateTypography(16, '145%', -0.03),
    '.text-pretendard-title-5': generateTypography(14, '145%', -0.03),
    // Body
    '.text-pretendard-body-1': generateTypography(16, '160%', -0.03),
    '.text-pretendard-body-2': generateTypography(14, '160%', -0.03),
    '.text-pretendard-body-3': generateTypography(13, '160%', -0.03),
    '.text-pretendard-body-4': generateTypography(12, '160%', -0.03),
    // Caption
    '.text-pretendard-caption-1': generateTypography(16, '150%', -0.03),
    '.text-pretendard-caption-2': generateTypography(14, '150%', -0.03),
    '.text-pretendard-caption-3': generateTypography(13, '150%', -0.03),
    '.text-pretendard-caption-4': generateTypography(12, '150%', -0.03),
    // Button
    '.text-pretendard-button-1': generateTypography(16, '130%', -0.02),
    '.text-pretendard-button-2': generateTypography(14, '130%', -0.02),
    // Montserrat
    // Title
    '.text-montserrat-title-1': generateTypography(28, '140%', -0.03),
    '.text-montserrat-title-2': generateTypography(24, '140%', -0.03),
    '.text-montserrat-title-3': generateTypography(20, '145%', -0.03),
    '.text-montserrat-title-4': generateTypography(16, '145%', -0.03),
    '.text-montserrat-title-5': generateTypography(14, '145%', -0.03),
    // Body
    '.text-montserrat-body-1': generateTypography(16, '160%', -0.03),
    '.text-montserrat-body-2': generateTypography(14, '160%', -0.03),
    '.text-montserrat-body-3': generateTypography(13, '160%', -0.03),
    '.text-montserrat-body-4': generateTypography(12, '160%', -0.03),
    // Caption
    '.text-montserrat-caption-1': generateTypography(16, '150%', -0.03),
    '.text-montserrat-caption-2': generateTypography(14, '150%', -0.03),
    '.text-montserrat-caption-3': generateTypography(13, '150%', -0.03),
    '.text-montserrat-caption-4': generateTypography(12, '150%', -0.03),
    // Button
    '.text-montserrat-button-1': generateTypography(16, '130%', -0.02),
    '.text-montserrat-button-2': generateTypography(14, '130%', -0.02),
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
        // format: ${value}: var(--color-${value})
        // Test
        test: 'var(--color-test)',
        // Gray
        'gray-90': 'var(--color-gray-90)',
        'gray-80': 'var(--color-gray-80)',
        'gray-70': 'var(--color-gray-70)',
        'gray-60': 'var(--color-gray-60)',
        'gray-50': 'var(--color-gray-50)',
        'gray-40': 'var(--color-gray-40)',
        'gray-30': 'var(--color-gray-30)',
        'gray-20': 'var(--color-gray-20)',
        'gray-10': 'var(--color-gray-10)',
        'gray-5': 'var(--color-gray-5)',
        white: 'var(--color-white)',
        // Primary
        morning: 'var(--color-morning)',
        'morning-medium': 'var(--color-morning-medium)',
        'morning-light': 'var(--color-morning-light)',
        night: 'var(--color-night)',
        'night-medium': 'var(--color-night-medium)',
        'night-light': 'var(--color-night-light)',
        // State
        error: 'var(--color-error)',
        'error-light': 'var(--color-error-light)',
        success: 'var(--color-success)',
        'success-light': 'var(--color-success-light)',
        // Black Transparency
        'black-transparency-90': 'var(--color-black-transparency-90)',
        'black-transparency-80': 'var(--color-black-transparency-80)',
        'black-transparency-70': 'var(--color-black-transparency-70)',
        'black-transparency-60': 'var(--color-black-transparency-60)',
        'black-transparency-50': 'var(--color-black-transparency-50)',
        'black-transparency-40': 'var(--color-black-transparency-40)',
        'black-transparency-30': 'var(--color-black-transparency-30)',
        'black-transparency-20': 'var(--color-black-transparency-20)',
        'black-transparency-10': 'var(--color-black-transparency-10)',
        'black-transparency-5': 'var(--color-black-transparency-5)',
        // White Transparency
        'white-transparency-90': 'var(--color-white-transparency-90)',
        'white-transparency-80': 'var(--color-white-transparency-80)',
        'white-transparency-70': 'var(--color-white-transparency-70)',
        'white-transparency-60': 'var(--color-white-transparency-60)',
        'white-transparency-50': 'var(--color-white-transparency-50)',
        'white-transparency-40': 'var(--color-white-transparency-40)',
        'white-transparency-30': 'var(--color-white-transparency-30)',
        'white-transparency-20': 'var(--color-white-transparency-20)',
        'white-transparency-10': 'var(--color-white-transparency-10)',
        'white-transparency-5': 'var(--color-white-transparency-5)',
      },
    },
  },
  plugins: [autoColorTransitionPlugin, typographyPlugin],
};

export default config;
