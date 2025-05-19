module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.tsx', '.ts', '.ios.tsx', '.android.tsx', '.js', '.ios.js', '.android.js', '.json'],
        alias: {
          // tsconfig.json, metro.config.js와 통일
          '@assets': './src/assets',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@libs': './src/libs',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@services': './src/services',
          '@store': './src/store',
        },
      },
    ],
  ],
};
