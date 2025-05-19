/** @type {import('tailwindcss').Config} */

const nativewindPreset = require('nativewind/preset');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [nativewindPreset],
  theme: {
    extend: {},
  },
  plugins: [],
};
