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
        // White
        white: 'var(--color-white)',
        // Background
        'background-01': 'var(--color-background-01)',
        'background-02': 'var(--color-background-02)',
        'background-03': 'var(--color-background-03)',
        // Text
        'text-01': 'var(--color-text-01)',
        'text-02': 'var(--color-text-02)',
        'text-03': 'var(--color-text-03)',
        'text-04': 'var(--color-text-04)',
        'text-05': 'var(--color-text-05)',
        'text-06': 'var(--color-text-06)',
        'text-07': 'var(--color-text-07)',
        'text-08': 'var(--color-text-08)',
        'text-09': 'var(--color-text-09)',
        'text-10': 'var(--color-text-10)',
        'text-11': 'var(--color-text-11)',
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
        // Transparency
        'transparency-01': 'var(--color-transparency-01)',
        'transparency-02': 'var(--color-transparency-02)',
        'transparency-03': 'var(--color-transparency-03)',
        'transparency-04': 'var(--color-transparency-04)',
        'transparency-05': 'var(--color-transparency-05)',
        'transparency-06': 'var(--color-transparency-06)',
        'transparency-07': 'var(--color-transparency-07)',
        'transparency-08': 'var(--color-transparency-08)',
        'transparency-09': 'var(--color-transparency-09)',
        'transparency-10': 'var(--color-transparency-10)',
      },
    },
  },
  plugins: [autoColorTransitionPlugin, typographyPlugin],
};

export default config;
