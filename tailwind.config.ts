import type { Config } from 'tailwindcss';

const nativewindPreset = require('nativewind/preset');

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [nativewindPreset],
  darkMode: 'class',
  theme: {
    extend: {
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
  plugins: [],
};

export default config;
